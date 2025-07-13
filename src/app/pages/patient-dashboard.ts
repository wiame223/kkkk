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

  // Documents upload
  documents: { name: string; url: string; type: 'pdf' | 'image' }[] = [];

  // Rendez-vous simulés
  appointments: Appointment[] = [
    { id: 1, title: 'Consultation générale', date: '2025-07-20T10:00:00Z', location: 'Cabinet A', status: 'confirmé' },
    { id: 2, title: 'Suivi cardiologie', date: '2025-07-22T14:00:00Z', location: 'Cabinet B', status: 'en attente' }
  ];

  // PROPRIÉTÉS POUR LE PAIEMENT SIMULÉ
  paymentAmount: number = 0;
  cardNumber: string = '';
  paymentStatus: 'success' | 'error' | null = null;
  paymentMessage: string = '';

  constructor(private router: Router) {}

  // Déconnexion
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

  showSection(section: string) {
  this.activeSection = section;

  // Après changement de section, scroll vers la div .section-container
  setTimeout(() => {
    const container = document.querySelector('.section-container');
    if (container) {
      container.scrollIntoView({ behavior: 'smooth' });
    }
  }, 0);
}

  // Contacts simulés
  contacts: Contact[] = [
    { id: 1, name: 'Dr. Dupont', avatar: '/assets/doctor1.jpg', specialty: 'Médecin généraliste' },
    { id: 2, name: 'Me. Legrand', avatar: '/assets/lawyer1.jpg', specialty: 'Avocat' },
    { id: 3, name: 'Mme. Durand', avatar: '/assets/architect.jpg', specialty: 'Architecte' }
  ];

  // Messages simulés
  messages: Message[] = [
    { contactId: 1, text: 'Bonjour Docteur, j’ai une douleur.', sent: true, time: new Date() },
    { contactId: 1, text: 'Depuis combien de temps ?', sent: false, time: new Date() },
    { contactId: 2, text: 'Bonjour Maître, j’ai reçu une convocation.', sent: true, time: new Date() },
    { contactId: 2, text: 'Envoyez-la moi.', sent: false, time: new Date() }
  ];

  // Annulation d'un rendez-vous
  cancelAppointment(id: number) {
    const appt = this.appointments.find(a => a.id === id);
    if (appt) {
      appt.status = 'annulé';
    }
  }

  // Upload fichiers
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files) return;

    const files: FileList = input.files;

    Array.from(files).forEach(file => {
      const reader = new FileReader();

      reader.onload = () => {
        const url = reader.result as string;
        const type = file.type.includes('pdf') ? 'pdf' : 'image';

        this.documents.push({
          name: file.name,
          url,
          type
        });
      };

      reader.readAsDataURL(file);
    });
  }

  removeDocument(index: number) {
    this.documents.splice(index, 1);
  }

  // Envoi message
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

  // Gestion calendrier
  changeView(view: string) {
    this.calendarView = view;
  }

  addAppointment() {
    console.log("Ouverture modal pour ajouter un rendez-vous");
    // Implémenter ouverture modal ou navigation
  }

  // ============================
  // Méthode pour simuler paiement
submitPayment() {
  if (this.paymentAmount > 0 && this.cardNumber.length === 16) {
    setTimeout(() => {
      this.paymentStatus = 'success';
      this.paymentMessage = `Paiement de ${this.paymentAmount} MAD effectué avec succès !`;

      this.paymentAmount = 0;
      this.cardNumber = '';

      // 🔁 Aller à la section appel vidéo
      this.activeSection = 'appelVideo';
    }, 1000);
  } else {
    this.paymentStatus = 'error';
    this.paymentMessage = 'Erreur dans les informations de paiement.';
  }
}

// ✅ Ajouter ceci :
endCall() {
  this.activeSection = 'none';
}
}