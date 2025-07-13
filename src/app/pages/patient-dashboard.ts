import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// ✅ Interfaces que le backend doit implémenter
export interface Appointment {
  id: number;
  title: string;
  date: string; // format ISO: '2025-07-13T14:30:00Z'
  location: string;
  status: 'confirmé' | 'annulé' | 'en attente';
}

export interface Message {
  contactId: number;
  text: string;
  sent: boolean; // true = envoyé par patient, false = praticien
  time: Date;
}

export interface Contact {
  id: number;
  name: string;
  avatar: string;
  specialty: string;
}

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patient-dashboard.html',
  styleUrls: ['./patient-dashboard.css']
})
export class PatientDashboardComponent {
  activeSection: string = 'none';
  showLogoutConfirm = false;

 newMessage = '';
  activeContact = 1;
  calendarView = 'week';

  constructor(private router: Router) {}

  // 🔒 Déconnexion
  confirmLogout() {
    this.showLogoutConfirm = true;
  }

  cancelLogout() {
    this.showLogoutConfirm = false;
  }

  logout() {
    this.showLogoutConfirm = false;
    this.router.navigateByUrl('');
  }

  // 🔁 Navigation dynamique
  showSection(section: string) {
    this.activeSection = section;
    if (section === 'messagerie') {
      this.activeContact = this.contacts[0]?.id;
    }
  }

  // 🔵 Simuler les contacts
  contacts: Contact[] = [
    { id: 1, name: 'Dr. Dupont', avatar: '/assets/doctor1.jpg', specialty: 'Médecin généraliste' },
    { id: 2, name: 'Me. Legrand', avatar: '/assets/lawyer1.jpg', specialty: 'Avocat' },
    { id: 3, name: 'Mme. Durand', avatar: '/assets/architect.jpg', specialty: 'Architecte' }
  ];

  // 📬 Messages simulés
  messages: Message[] = [
    { contactId: 1, text: 'Bonjour Docteur, j’ai une douleur.', sent: true, time: new Date() },
    { contactId: 1, text: 'Depuis combien de temps ?', sent: false, time: new Date() },
    { contactId: 2, text: 'Bonjour Maître, j’ai reçu une convocation.', sent: true, time: new Date() },
    { contactId: 2, text: 'Envoyez-la moi.', sent: false, time: new Date() }
  ];

 

  // 📤 Envoi message
  sendMessage() {
    if (!this.newMessage.trim()) return;

    this.messages.push({
      contactId: this.activeContact,
      text: this.newMessage,
      sent: true,
      time: new Date()
    });

    const contact = this.contacts.find(c => c.id === this.activeContact);
    const name = contact?.name ?? 'Praticien';

    // Réponse simulée
    setTimeout(() => {
      this.messages.push({
        contactId: this.activeContact,
        text: `Bonjour, ici ${name}. Comment puis-je vous aider ?`,
        sent: false,
        time: new Date()
      });
    }, 1000);

    this.newMessage = '';
  }

  getMessagesForContact(): Message[] {
    return this.messages.filter(msg => msg.contactId === this.activeContact);
  }

  selectContact(id: number) {
    this.activeContact = id;
  }

  // 🗓️ Agenda simulé (sera récupéré du backend plus tard)
    // Gestion du calendrier
  changeView(view: string) {
    this.calendarView = view;
  }

  addAppointment() {
    console.log("Ouverture modal pour ajouter un rendez-vous");
    // Implémentez l'ouverture d'un modal ou la navigation
  }
}
  

  // Méthodes futures à implémenter avec un vrai backend :
  // - fetchMessages(): Observable<Message[]>
  // - sendMessageToBackend(msg: Message): Observable<void>
  // - getAppointments(): Observable<Appointment[]>
  // - cancelAppointment(id: number): Observable<void>

