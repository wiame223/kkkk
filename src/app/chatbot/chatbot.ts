import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { inject } from "@angular/core"

@Component({
  selector: "app-chatbot",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./chatbot.html",
  styleUrls: ["./chatbot.css"],
})
export class ChatbotComponent {
  private http = inject(HttpClient)
  private readonly MISTRAL_API_KEY = "n8mAG9izL5s05AukquTAu60VRRklOcF9"
  private readonly MISTRAL_API_URL = "https://api.mistral.ai/v1/chat/completions"

  userInput = ""
  messages: { text: string; fromUser: boolean }[] = []
  isLoading = false

  async sendMessage() {
    if (!this.userInput.trim() || this.isLoading) return

    const userMessage = this.userInput.trim()
    this.messages.push({ text: userMessage, fromUser: true })
    this.userInput = ""
    this.isLoading = true

    // Add typing indicator
    this.messages.push({ text: "Assistant is typing...", fromUser: false })

    try {
      const response = await this.callMistralAPI(userMessage)
      // Remove typing indicator
      this.messages.pop()
      this.messages.push({ text: response, fromUser: false })
    } catch (error) {
      // Remove typing indicator and show error
      this.messages.pop()
      this.messages.push({
        text: "Désolé, je rencontre des difficultés techniques. Veuillez réessayer.",
        fromUser: false,
      })
      console.error("Mistral API Error:", error)
    } finally {
      this.isLoading = false
    }
  }

  private async callMistralAPI(message: string): Promise<string> {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.MISTRAL_API_KEY}`,
    })

    const body = {
      model: "mistral-large-latest",
      messages: [
        {
          role: "system",
          content:
            "Tu es un assistant virtuel professionnel pour une plateforme de téléconsultation appelée EliteCom. Tu aides les utilisateurs avec leurs questions sur les services de consultation en ligne dans les domaines de la santé, du droit, de l'esthétique, de l'éducation, du bien-être et de la décoration intérieure. Réponds de manière courtoise et professionnelle en français.",
        },
        {
          role: "user",
          content: message,
        },
      ],
      temperature: 0.7,
      max_tokens: 500,
    }

    try {
      const response = await this.http.post<any>(this.MISTRAL_API_URL, body, { headers }).toPromise()
      return response.choices[0].message.content || "Je n'ai pas pu traiter votre demande."
    } catch (error: any) {
      if (error.status === 401) {
        throw new Error("Erreur d'authentification API")
      } else if (error.status === 429) {
        throw new Error("Limite de requêtes atteinte")
      } else {
        throw new Error("Erreur de connexion à l'API")
      }
    }
  }

  onKeyPress(event: KeyboardEvent) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      this.sendMessage()
    }
  }

  clearChat() {
    this.messages = []
  }
}