import { Component } from "@angular/core"
import { CommonModule } from "@angular/common"
import { FormsModule } from "@angular/forms"
import { Router } from "@angular/router"

@Component({
  selector: "app-admin-dashboard",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./admin-dashboard.html",
  styleUrls: ["./admin-dashboard.css"],
})
export class AdminDashboardComponent {
  // Gestion de la déconnexion
  showLogoutConfirm = false
  // ✅ Section active, par défaut sur 'home'
  activeSection: "home" | "users" | "validation" | "moderation" | "stats" | "reports" = "home"

  userTab = "patients"

  // Filtres
  filter = "all"
  reportFilter = "all"

  // Données des utilisateurs
  users = [
    // Praticiens
    {
      id: 1,
      firstName: "Nadia",
      lastName: "El Mansouri",
      fullName: "Nadia El Mansouri",
      email: "nadia.elm@example.com",
      type: "practitioner",
      profession: "Esthéticienne",
      status: "active",
    },
    {
      id: 2,
      firstName: "Karima",
      lastName: "Benbrahim",
      fullName: "Karima Benbrahim",
      email: "karima.b@example.com",
      type: "practitioner",
      profession: "Coach",
      status: "active",
    },
    {
      id: 3,
      firstName: "Khalid",
      lastName: "El Yamani",
      fullName: "Khalid El Yamani",
      email: "khalid.ey@example.com",
      type: "practitioner",
      profession: "Cardiologue",
      status: "pending",
    },
    {
      id: 4,
      firstName: "Karim",
      lastName: "El Fassi",
      fullName: "Karim El Fassi",
      email: "karim.ef@example.com",
      type: "practitioner",
      profession: "Avocate",
      status: "active",
    },
    // Patients
    {
      id: 5,
      firstName: "Ahmed",
      lastName: "Hachimi",
      fullName: "Ahmed Hachimi",
      email: "ahmed.h@example.com",
      type: "patient",
      status: "active",
    },
    {
      id: 6,
      firstName: "Laila",
      lastName: "Belhaj",
      fullName: "Laila Belhaj",
      email: "laila.b@example.com",
      type: "patient",
      status: "active",
    },
    {
      id: 7,
      firstName: "Yassine",
      lastName: "Sttati",
      fullName: "Yassine Sttati",
      email: "yassine.s@example.com",
      type: "patient",
      status: "inactive",
    },
  ]
  // Données des praticiens à valider
  practitioners = [
    {
      id: 3,
      name: "Dr. Khalid El Yamani",
      specialty: "Cardiologie",
      consultations: 0,
      status: "pending",
    },
    {
      id: 8,
      name: "Dr. Amina Toumi",
      specialty: "Dermatologie",
      consultations: 0,
      status: "pending",
    },
  ]
  // Données des messages
  messages = [
    {
      id: 1,
      sender: "Ahmed Hachimi",
      receiver: "Nadia El Mansouri",
      date: "2023-05-15 14:30",
      content: "Bonjour, je voudrais prendre rendez-vous pour une consultation.",
      flagged: false,
      deleted: false,
    },
    {
      id: 2,
      sender: "Karim El Fassi",
      receiver: "Laila Belhaj",
      date: "2023-05-16 10:15",
      content: "Votre demande de consultation a été approuvée.",
      flagged: false,
      deleted: false,
    },
    {
      id: 3,
      sender: "Anonyme",
      receiver: "Karima Benbrahim",
      date: "2023-05-17 16:45",
      content: "Message inapproprié contenant des insultes.",
      flagged: true,
      deleted: true,
    },
  ]
  // Statistiques
  stats = {
    totalUsers: 7,
    activePractitioners: 3,
    pendingPractitioners: 2,
    consultationsToday: 12,
    unresolvedReports: 3,
  }
  // Réclamations
  reports = [
    {
      id: 1,
      user: "Ahmed Hachimi",
      type: "Problème de rendez-vous",
      date: "2023-05-10",
      content: "Je n'ai pas pu annuler mon rendez-vous via la plateforme.",
      status: "pending",
    },
    {
      id: 2,
      user: "Laila Belhaj",
      type: "Message inapproprié",
      date: "2023-05-12",
      content: "J'ai reçu un message déplacé d'un autre utilisateur.",
      status: "resolved",
    },
  ]

  constructor(private router: Router) {}

  // 🔒 Déconnexion
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

  // Méthodes pour les sections
  showSection(section: "home" | "users" | "validation" | "moderation" | "stats" | "reports") {
    this.activeSection = section
    // Après changement de section, scroll vers la div .section-container
    setTimeout(() => {
      const container = document.querySelector(".section-container")
      if (container) {
        container.scrollIntoView({ behavior: "smooth" })
      }
    }, 0)
  }

  // Méthodes pour les praticiens
  validatePractitioner(id: number) {
    const practitioner = this.practitioners.find((p) => p.id === id)
    if (practitioner) {
      practitioner.status = "active"
    }
    // Mettre à jour aussi dans la liste des users
    const user = this.users.find((u) => u.id === id)
    if (user) {
      user.status = "active"
    }
  }
  rejectPractitioner(id: number) {
    this.practitioners = this.practitioners.filter((p) => p.id !== id)
    // Mettre à jour aussi dans la liste des users
    this.users = this.users.filter((u) => u.id !== id)
  }

  // Méthodes pour les messages
  warnUser(messageId: number) {
    console.log(`Avertissement envoyé pour le message ${messageId}`)
  }
  deleteMessage(messageId: number) {
    const message = this.messages.find((m) => m.id === messageId)
    if (message) {
      message.deleted = true
    }
  }
  restoreMessage(messageId: number) {
    const message = this.messages.find((m) => m.id === messageId)
    if (message) {
      message.deleted = false
    }
  }

  // Méthodes pour les réclamations
  resolveReport(reportId: number) {
    const report = this.reports.find((r) => r.id === reportId)
    if (report) {
      report.status = "resolved"
    }
  }
  contactUser(reportId: number) {
    console.log(`Contact initié pour la réclamation ${reportId}`)
  }

  // Helper pour afficher le statut
  getStatusLabel(status: string): string {
    switch (status) {
      case "active":
        return "Actif"
      case "pending":
        return "En attente"
      case "inactive":
        return "Inactif"
      default:
        return status
    }
  }
}
