import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-practicien-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule ],
  templateUrl: './praticien-dashboard.html',
  styleUrls: ['./praticien-dashboard.css']
})
export class PraticienDashboardComponent {
  activeSection: string = 'none';
  commTab: string = 'messagerie'; // 'messagerie' | 'video' | 'forum'
  showLogoutConfirm = false;
  
  // Données simulées pour la messagerie
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
  calendarView = 'week';

  constructor(private router: Router) {}

  // Gestion de la déconnexion
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

  showSection(section: string) {
  this.activeSection = section;
  if (section === 'collaboration') {
    this.commTab = 'messagerie'; // Reset à la messagerie par défaut
  }
  
  // Après changement de section, scroll vers la div .section-container
  setTimeout(() => {
    const container = document.querySelector('.section-container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  }, 0);
}


 
  // Gestion des onglets de communication
  setCommTab(tab: string) {
    this.commTab = tab;
  }

  // Sélection d'un contact
  selectContact(contactId: number) {
    this.activeContact = contactId;
    // Ici vous pourriez charger les messages depuis un service
  }

  // Envoi de message
  sendMessage() {
    if (this.newMessage.trim()) {
      this.messages.push({
        text: this.newMessage,
        sent: true,
        time: new Date()
      });
      this.newMessage = '';
      // Ici vous ajouteriez l'envoi au backend
    }
  }

  // Gestion des appels
  startVideoCall() {
    console.log("Démarrage appel vidéo avec le praticien ID:", this.activeContact);
    // Intégration avec WebRTC ou autre service
  }

  startAudioCall() {
    console.log("Démarrage appel audio avec le praticien ID:", this.activeContact);
  }

  // Gestion du calendrier
  changeView(view: string) {
    this.calendarView = view;
  }

  addAppointment() {
    console.log("Ouverture modal pour ajouter un rendez-vous");
    // Implémentez l'ouverture d'un modal ou la navigation
  }
}