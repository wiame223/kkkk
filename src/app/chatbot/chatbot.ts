import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.html',
  styleUrls: ['./chatbot.css']
})
export class ChatbotComponent {
  userInput: string = '';
  messages: { text: string, fromUser: boolean }[] = [];

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ text: this.userInput, fromUser: true });

    // Simule une réponse simple du bot
    setTimeout(() => {
      this.messages.push({ text: "Je suis un assistant virtuel, comment puis-je vous aider ?", fromUser: false });
    }, 500);

    this.userInput = '';
  }
}
