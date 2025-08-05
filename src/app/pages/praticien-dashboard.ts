import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Router } from "@angular/router"

// ✅ Interfaces que le backend doit implémenter (si non déjà présentes)
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
  unread?: number // Ajouté pour la section collaboration
}

// Nouvelles interfaces pour l'agenda
interface Visit {
  id: number
  time: string
  patientName: string
  avatar: string
  type: "visit" | "call"
}

interface CalendarEvent {
  type: "visits" | "calls" | "review" | "tasks" | "exam"
  count: number
  label: string
}

interface CalendarDay {
  date: number
  isToday: boolean
  isPrevMonth: boolean
  isNextMonth: boolean
  events: CalendarEvent[]
}

@Component({
  selector: "app-practicien-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./praticien-dashboard.html",
  styleUrls: ["./praticien-dashboard.css"],
})
export class PraticienDashboardComponent {
  activeSection = "home" // Défini sur 'home' pour afficher les cartes par défaut
  commTab = "messagerie" // 'messagerie' | 'video' | 'forum'
  showLogoutConfirm = false

  // Données simulées pour la messagerie (existantes)
 // Contacts simulés pour les praticiens
  contacts: Contact[] = [
    { id: 1, name: "Dr. Dupont", avatar: "/assets/doctor1.jpg", specialty: "Cardiologie", unread: 2 },
    { id: 2, name: "Dr. Martin", avatar: "/assets/doctor2.jpg", specialty: "Radiologie", unread: 0 },
    { id: 3, name: "Dr. Leroy", avatar: "/assets/doctor3.jpg", specialty: "Pédiatrie", unread: 5 },
  ]

  // Messages simulés entre praticiens
  messages: Message[] = [
    {
      contactId: 1,
      text: "Bonjour Dr. Dupont, avez-vous les résultats de l'IRM du patient X ?",
      sent: true,
      time: new Date(Date.now() - 3600000),
    },
    {
      contactId: 1,
      text: "Oui, je les ai reçus ce matin. Je vous les envoie par le système sécurisé.",
      sent: false,
      time: new Date(Date.now() - 3500000),
    },
    { contactId: 1, text: "Parfait, merci beaucoup !", sent: true, time: new Date(Date.now() - 3400000) },
    {
      contactId: 2,
      text: "Dr. Martin, concernant le cas de Mme. Dubois, je pense qu'une consultation conjointe serait bénéfique.",
      sent: true,
      time: new Date(Date.now() - 1800000),
    },
    {
      contactId: 2,
      text: "Je suis d'accord. Proposez-moi des créneaux la semaine prochaine.",
      sent: false,
      time: new Date(Date.now() - 1700000),
    },
    {
      contactId: 3,
      text: "Dr. Leroy, le protocole de vaccination pédiatrique a été mis à jour. Je vous ai partagé les nouvelles directives.",
      sent: true,
      time: new Date(Date.now() - 1200000),
    },
    {
      contactId: 3,
      text: "Merci pour l'info, je vais consulter ça de suite.",
      sent: false,
      time: new Date(Date.now() - 1100000),
    },
  ]


  forumTopics = [
    {
      title: "Cas complexe de diabète",
      lastMessage: "Quelqu'un a une expérience avec...",
      replies: 12,
      lastDate: new Date(Date.now() - 86400000),
    },
    {
      title: "Nouveaux protocoles COVID",
      lastMessage: "Les nouvelles recommandations...",
      replies: 8,
      lastDate: new Date(Date.now() - 172800000),
    },
  ]

  newMessage = ""
  activeContact = 1
  calendarView = "month" // Défini sur 'month' pour l'agenda

  // Remplaçants (existants)
  replacements = [
    { name: "Dr. Nadia", specialty: "Dermatologie", availableFrom: "2025-07-19" },
    { name: "Dr. Mehdi", specialty: "ORL", availableFrom: "2025-07-20" },
  ]

  // ✅ PROPRIÉTÉS POUR L'AGENDA (copiées du patient-dashboard.ts)
  currentDate = new Date(2022, 5, 10) // June 10, 2022 comme dans le screenshot
  weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  todaysVisits: Visit[] = [
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

  calendarEvents: { date: number; events: CalendarEvent[] }[] = [
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

  // Gestion de la déconnexion (existante)
  confirmLogout() {
    this.showLogoutConfirm = true
  }
  cancelLogout() {
    this.showLogoutConfirm = false
  }
  logout() {
    console.log("Déconnexion du praticien confirmée")
    this.showLogoutConfirm = false
    this.router.navigate([""])
  }

  // Mise à jour de la section active (modifiée pour la sidebar)
  showSection(section: string) {
    this.activeSection = section
    // Après changement de section, scroll vers la div .section-container
    setTimeout(() => {
      const container = document.querySelector(".section-container")
      if (container) {
        container.scrollIntoView({ behavior: "smooth" })
      }
    }, 0)
  }

  // Gestion des onglets de communication (existante)
  setCommTab(tab: string) {
    this.commTab = tab
  }

  // Sélection d'un contact (existante)
  selectContact(contactId: number) {
    this.activeContact = contactId
    // Ici vous pourriez charger les messages depuis un service
  }

   sendMessage() {
    if (this.newMessage.trim()) {
      // Pour simuler l'envoi, nous ajoutons le message au tableau avec le contactId actif
      this.messages.push({
        contactId: this.activeContact, // Associe le message au contact actif
        text: this.newMessage,
        sent: true, // Le message est envoyé par le praticien actuel
        time: new Date(),
      })
      this.newMessage = ""
      // Ici vous ajouteriez l'envoi au backend
    }
  }


  // Gestion des appels (existante)
  startVideoCall() {
    console.log("Démarrage appel vidéo avec le praticien ID:", this.activeContact)
    // Intégration avec WebRTC ou autre service
  }
  startAudioCall() {
    console.log("Démarrage appel audio avec le praticien ID:", this.activeContact)
  }

  // Gestion du calendrier (existante, mais déplacée ici)
  changeView(view: string) {
    this.calendarView = view
  }
  addAppointment() {
    console.log("Ouverture modal pour ajouter un rendez-vous")
    // Implémentez l'ouverture d'un modal ou la navigation
  }

  // Remplaçants (existante)
  addReplacement(name: string, specialty: string, availableFrom: string) {
    this.replacements.push({ name, specialty, availableFrom })
  }

  // ✅ MÉTHODES POUR L'AGENDA (copiées du patient-dashboard.ts)
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

  get calendarDays(): CalendarDay[] {
    const year = this.currentDate.getFullYear()
    const month = this.currentDate.getMonth()

    // Premier jour du mois et nombre de jours
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()

    // Jour de la semaine du premier jour (0 = dimanche, 1 = lundi, etc.)
    let startDay = firstDay.getDay()
    startDay = startDay === 0 ? 6 : startDay - 1 // Convertir pour que lundi = 0

    const days: CalendarDay[] = []

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
      const isToday = date === 10 && month === 5 && year === 2022 // 10 juin 2022 (pour la simulation du screenshot)
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