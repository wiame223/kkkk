import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-practicien-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './praticien-dashboard.html',
  styleUrls: ['./praticien-dashboard.css']
})
export class PraticienDashboardComponent {
  activeSection: string = 'none';
  commTab: string = 'messagerie';
  showLogoutConfirm = false;

  // Données simulées
  contacts = [
    { id: 1, name: 'Dr. Dupont', avatar: '/assets/doctor1.jpg', specialty: 'Cardiologie', unread: 2 },
    { id: 2, name: 'Dr. Martin', avatar: '/assets/doctor2.jpg', specialty: 'Radiologie', unread: 0 },
    { id: 3, name: 'Dr. Leroy', avatar: '/assets/doctor3.jpg', specialty: 'Pédiatrie', unread: 5 }
  ];

  messages = [
    { text: 'Bonjour, avez-vous reçu les résultats du patient X?', sent: false, time: new Date(Date.now() - 3600000) },
    { text: 'Oui, je les ai reçus ce matin', sent: true, time: new Date(Date.now() - 1800000) },
    { text: 'Pouvez-vous me donner votre avis?', sent: false, time: new Date(Date.now() - 1200000) }
  ];

  forumTopics = [
    { title: 'Cas complexe de diabète', lastMessage: 'Quelqu\'un a une expérience avec...', replies: 12, lastDate: new Date(Date.now() - 86400000) },
    { title: 'Nouveaux protocoles COVID', lastMessage: 'Les nouvelles recommandations...', replies: 8, lastDate: new Date(Date.now() - 172800000) }
  ];

  newMessage = '';
  activeContact = 1;

  // Planning
  calendarView = 'week';
  planningSlots: { day: string, hour: string, available: boolean }[] = [
    { day: 'Lundi', hour: '10:00', available: true },
    { day: 'Mardi', hour: '14:00', available: true }
  ];

  // Remplaçants
  replacements = [
    { name: 'Dr. Nadia', specialty: 'Dermatologie', availableFrom: '2025-07-19' },
    { name: 'Dr. Mehdi', specialty: 'ORL', availableFrom: '2025-07-20' }
  ];

  constructor(private router: Router) {}

  // Déconnexion
  confirmLogout() {
    this.showLogoutConfirm = true;
  }

  cancelLogout() {
    this.showLogoutConfirm = false;
  }

  logout() {
    console.log("Déconnexion du praticien confirmée");
    this.showLogoutConfirm = false;
    this.router.navigate(['']);
  }

  // Navigation
  showSection(section: string) {
    this.activeSection = section;
    if (section === 'collaboration') {
      this.commTab = 'messagerie';
    }
  }

  // Messagerie
  setCommTab(tab: string) {
    this.commTab = tab;
  }

  selectContact(contactId: number) {
    this.activeContact = contactId;
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        sent: true,
        time: new Date()
      });
      this.newMessage = '';
    }
  }

  // Appels
  startVideoCall() {
    console.log("Démarrage appel vidéo avec le praticien ID:", this.activeContact);
  }

  startAudioCall() {
    console.log("Démarrage appel audio avec le praticien ID:", this.activeContact);
  }

  // Planning
  changeView(view: string) {
    this.calendarView = view;
  }

  addAppointment() {
    console.log("Ouverture modal pour ajouter un rendez-vous");
  }

  removeSlot(index: number) {
    this.planningSlots.splice(index, 1);
  }

  // Remplaçants
  addReplacement(name: string, specialty: string, availableFrom: string) {
    this.replacements.push({ name, specialty, availableFrom });
  }
}