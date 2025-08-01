import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Router } from "@angular/router"

// ✅ Interfaces que le backend doit implémenter
export interface Appointment {
  id: number
  title: string
  date: string // format ISO: '2025-07-13T14:30:00Z'
  location: string
  status: "confirmé" | "annulé" | "en attente"
}

export interface Message {
  contactId: number
  text: string
  sent: boolean // true = envoyé par patient, false = praticien
  time: Date
}

export interface Contact {
  id: number
  name: string
  avatar: string
  specialty: string
}

@Component({
  selector: "app-patient-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./patient-dashboard.html",
  styleUrls: ["./patient-dashboard.css"],
})
export class PatientDashboardComponent {
  activeSection = "none"
  showLogoutConfirm = false
  newMessage = ""
  activeContact = 1
  calendarView = "week"

  // Documents upload
  documents: { name: string; url: string; type: "pdf" | "image" }[] = []

  // Rendez-vous simulés
  appointments: Appointment[] = [
    { id: 1, title: "Consultation générale", date: "2025-07-20T10:00:00Z", location: "Cabinet A", status: "confirmé" },
    { id: 2, title: "Suivi cardiologie", date: "2025-07-22T14:00:00Z", location: "Cabinet B", status: "en attente" },
  ]

  // PROPRIÉTÉS POUR LE PAIEMENT SIMULÉ
  paymentAmount = 0
  cardNumber = ""
  paymentStatus: "success" | "error" | null = null
  paymentMessage = ""

  // Ajoutez ces propriétés après les propriétés existantes
  patientProfile = {
    name: "John Doe",
    avatar: "/placeholder.svg?height=32&width=32&text=JD",
    status: "Patient",
    id: "P001",
  }
  currentDate = new Date(2022, 5, 10) // June 10, 2022 comme dans le screenshot
  weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  // Visites d'aujourd'hui
  todaysVisits = [
    {
      id: 1,
      time: "12:00-12:45",
      patientName: "Olivia Wild",
      avatar: "/placeholder.svg?height=40&width=40&text=OW",
      type: "visit",
    },
    {
      id: 2,
      time: "14:00-14:45",
      patientName: "Osip Mendelstam",
      avatar: "/placeholder.svg?height=40&width=40&text=OM",
      type: "visit",
    },
    {
      id: 3,
      time: "15:00-15:45",
      patientName: "Jennifer Parkins",
      avatar: "/placeholder.svg?height=40&width=40&text=JP",
      type: "call",
    },
  ]

  // Événements du calendrier
  calendarEvents = [
    {
      date: 1,
      events: [
        { type: "visits", count: 1, label: "Visits" },
        { type: "calls", count: 2, label: "Calls" },
      ],
    },
    {
      date: 2,
      events: [{ type: "review", count: 1, label: "Review L." }],
    },
    {
      date: 6,
      events: [{ type: "visits", count: 3, label: "Visits" }],
    },
    {
      date: 9,
      events: [{ type: "review", count: 1, label: "I. Platova" }],
    },
    {
      date: 10,
      events: [{ type: "visits", count: 1, label: "Visits" }],
    },
    {
      date: 13,
      events: [{ type: "review", count: 1, label: "J. Parkins" }],
    },
    {
      date: 14,
      events: [{ type: "calls", count: 2, label: "Calls" }],
    },
    {
      date: 15,
      events: [{ type: "tasks", count: 0, label: "Tasks" }],
    },
    {
      date: 20,
      events: [{ type: "visits", count: 2, label: "Visits" }],
    },
    {
      date: 23,
      events: [{ type: "exam", count: 1, label: "Exam pr." }],
    },
    {
      date: 24,
      events: [{ type: "tasks", count: 3, label: "Tasks" }],
    },
    {
      date: 27,
      events: [{ type: "review", count: 1, label: "M. Dots." }],
    },
    {
      date: 28,
      events: [{ type: "review", count: 1, label: "Get labs." }],
    },
    {
      date: 30,
      events: [{ type: "calls", count: 4, label: "Calls" }],
    },
  ]

  constructor(private router: Router) {}

  // Déconnexion
  confirmLogout() {
    this.showLogoutConfirm = true
  }

  cancelLogout() {
    this.showLogoutConfirm = false
  }

  logout() {
    this.showLogoutConfirm = false
    this.router.navigateByUrl("")
  }

  showSection(section: string) {
    this.activeSection = section
  }

  // Contacts simulés
  contacts: Contact[] = [
    { id: 1, name: "Dr. Dupont", avatar: "/assets/doctor1.jpg", specialty: "Médecin généraliste" },
    { id: 2, name: "Me. Legrand", avatar: "/assets/lawyer1.jpg", specialty: "Avocat" },
    { id: 3, name: "Mme. Durand", avatar: "/assets/architect.jpg", specialty: "Architecte" },
  ]

  // Messages simulés
  messages: Message[] = [
    { contactId: 1, text: "Bonjour Docteur, j'ai une douleur.", sent: true, time: new Date() },
    { contactId: 1, text: "Depuis combien de temps ?", sent: false, time: new Date() },
    { contactId: 2, text: "Bonjour Maître, j'ai reçu une convocation.", sent: true, time: new Date() },
    { contactId: 2, text: "Envoyez-la moi.", sent: false, time: new Date() },
  ]

  // Annulation d'un rendez-vous
  cancelAppointment(id: number) {
    const appt = this.appointments.find((a) => a.id === id)
    if (appt) {
      appt.status = "annulé"
    }
  }

  // Upload fichiers
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement
    if (!input.files) return

    const files: FileList = input.files
    Array.from(files).forEach((file) => {
      const reader = new FileReader()
      reader.onload = () => {
        const url = reader.result as string
        const type = file.type.includes("pdf") ? "pdf" : "image"
        this.documents.push({
          name: file.name,
          url,
          type,
        })
      }
      reader.readAsDataURL(file)
    })
  }

  removeDocument(index: number) {
    this.documents.splice(index, 1)
  }

  // Envoi message
  sendMessage() {
    if (!this.newMessage.trim()) return

    this.messages.push({
      contactId: this.activeContact,
      text: this.newMessage,
      sent: true,
      time: new Date(),
    })

    const contact = this.contacts.find((c) => c.id === this.activeContact)
    const name = contact?.name ?? "Praticien"

    // Réponse simulée
    setTimeout(() => {
      this.messages.push({
        contactId: this.activeContact,
        text: `Bonjour, ici ${name}. Comment puis-je vous aider ?`,
        sent: false,
        time: new Date(),
      })
    }, 1000)

    this.newMessage = ""
  }

  getMessagesForContact(): Message[] {
    return this.messages.filter((msg) => msg.contactId === this.activeContact)
  }

  selectContact(id: number) {
    this.activeContact = id
  }

  // Gestion calendrier
  changeView(view: string) {
    this.calendarView = view
  }

  addAppointment() {
    console.log("Ouverture modal pour ajouter un rendez-vous")
    // Implémenter ouverture modal ou navigation
  }

  // Ajoutez ces méthodes à votre classe existante
  getInitials(name: string): string {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
  }

  formatTime(dateString: string): string {
    const date = new Date(dateString)
    const hours = date.getHours().toString().padStart(2, "0")
    const minutes = date.getMinutes().toString().padStart(2, "0")
    const endHours = (date.getHours() + 1).toString().padStart(2, "0")
    return `${hours}:${minutes}-${endHours}:${minutes}`
  }

  // Méthode pour simuler paiement
  submitPayment() {
    if (this.paymentAmount > 0 && this.cardNumber.length === 16) {
      setTimeout(() => {
        this.paymentStatus = "success"
        this.paymentMessage = `Paiement de ${this.paymentAmount} MAD effectué avec succès !`
        this.paymentAmount = 0
        this.cardNumber = ""
      }, 1000)
    } else {
      this.paymentStatus = "error"
      this.paymentMessage = "Erreur dans les informations de paiement."
    }
  }

  endCall() {
    this.activeSection = "none"
  }

  startVideoCall() {
    console.log("Démarrage d'un appel vidéo avec le contact ID:", this.activeContact)
    alert("Appel vidéo démarré (simulation)")
  }

  startAudioCall() {
    console.log("Démarrage d'un appel audio avec le contact ID:", this.activeContact)
    alert("Appel audio démarré (simulation)")
  }

  // Ajoutez ces méthodes après les méthodes existantes

  getCurrentDate(): string {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
      weekday: "long",
    }
    return new Date().toLocaleDateString("fr-FR", options)
  }

  getMonthYear(): string {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return `${monthNames[this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}`
  }

  get calendarDays() {
    const year = this.currentDate.getFullYear()
    const month = this.currentDate.getMonth()

    // Premier jour du mois et nombre de jours
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()

    // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
    let startDay = firstDay.getDay()
    startDay = startDay === 0 ? 6 : startDay - 1 // Convertir pour que lundi = 0

    const days = []

    // Jours du mois précédent
    const prevMonth = new Date(year, month - 1, 0)
    const daysInPrevMonth = prevMonth.getDate()

    for (let i = startDay - 1; i >= 0; i--) {
      const date = daysInPrevMonth - i
      days.push({
        date: date,
        isPrevMonth: true,
        isNextMonth: false,
        isToday: false,
        events: [],
      })
    }

    // Jours du mois actuel
    for (let date = 1; date <= daysInMonth; date++) {
      const isToday = date === 10 && month === 5 && year === 2022 // 10 juin 2022
      const dayEvents = this.calendarEvents.find((event) => event.date === date)

      days.push({
        date: date,
        isPrevMonth: false,
        isNextMonth: false,
        isToday: isToday,
        events: dayEvents ? dayEvents.events : [],
      })
    }

    // Jours du mois suivant pour compléter la grille
    const totalCells = Math.ceil(days.length / 7) * 7
    let nextMonthDate = 1

    while (days.length < totalCells) {
      days.push({
        date: nextMonthDate,
        isPrevMonth: false,
        isNextMonth: true,
        isToday: false,
        events: [],
      })
      nextMonthDate++
    }

    return days
  }

  previousMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, 1)
  }

  nextMonth() {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 1)
  }
}
