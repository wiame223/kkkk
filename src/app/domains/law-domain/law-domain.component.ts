import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-law-domain',
  templateUrl: './law-domain.component.html',
  styleUrls: ['./law-domain.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class LawDomainComponent {
  specialties = [
    { name: 'Droit Civil', description: 'Litiges familiaux, contrats, successions, etc.', icon: 'bi bi-file-earmark-text' },
    { name: 'Droit Pénal', description: "Défense en cas d'infractions et délits.", icon: 'bi bi-shield-lock' },
    { name: 'Droit du Travail', description: "Relations employeur-employé, contrats de travail.", icon: 'bi bi-briefcase-fill' },
    { name: 'Droit des Affaires', description: 'Conseil aux entreprises, contrats commerciaux.', icon: 'bi bi-building' }
  ];

  selectedSpecialty: string = '';

  lawyers = [
    // Droit Civil
    {
      firstName: 'Youssef',
      lastName: 'Benali',
      specialty: 'Droit Civil',
      location: 'Casablanca - Cabinet Benali',
      mode: 'Consultation en cabinet',
      tarif: '600 - 1200 Dh',
      avatar: 'images/youssef-benali.jpeg'
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Droit Civil',
      location: 'Rabat - Société Juridique RBAT',
      mode: 'Téléconsultation',
      tarif: '500 Dh',
      avatar: 'images/leila-mansouri.jpeg'
    },
    {
      firstName: 'Karim',
      lastName: 'El Fassi',
      specialty: 'Droit Civil',
      location: 'Fès - Cabinet El Fassi',
      mode: 'Consultation en cabinet',
      tarif: '700 - 1300 Dh',
      avatar: 'images/sopihie.jpeg'
    },

    // Droit Pénal
    {
      firstName: 'Imane',
      lastName: 'El Amrani',
      specialty: 'Droit Pénal',
      location: 'Rabat - Palais de Justice',
      mode: 'Téléconsultation',
      tarif: '650 Dh',
      avatar: 'images/imane-amrani.jpeg'
    },
    {
      firstName: 'Mehdi',
      lastName: 'Cherkaoui',
      specialty: 'Droit Pénal',
      location: 'Casablanca - Tribunal de Commerce',
      mode: 'Consultation en cabinet',
      tarif: '600 - 1200 Dh',
      avatar: 'images/mehdi-cherkaoui.jpeg'
    },
    {
      firstName: 'Nadia',
      lastName: 'Zahiri',
      specialty: 'Droit Pénal',
      location: 'Marrakech - Cabinet Zahiri',
      mode: 'Téléconsultation',
      tarif: '550 Dh',
      avatar: 'images/nadia-zahiri.jpeg'
    },

    // Droit du Travail
    {
      firstName: 'Adil',
      lastName: 'Kabbaj',
      specialty: 'Droit du Travail',
      location: 'Marrakech - Société Kabbaj & Associés',
      mode: 'Consultation en cabinet',
      tarif: '700 - 1300 Dh',
      avatar: 'images/adil-kabbaj.jpeg'
    },
    {
      firstName: 'Samira',
      lastName: 'Bennani',
      specialty: 'Droit du Travail',
      location: 'Tanger - Cabinet Bennani',
      mode: 'Téléconsultation',
      tarif: '900 Dh',
      avatar: 'images/sopihie.jpeg'
    },
    {
      firstName: 'Omar',
      lastName: 'El Khatib',
      specialty: 'Droit du Travail',
      location: 'Agadir - Société Juridique AGD',
      mode: 'Consultation en cabinet',
      tarif: '650 - 1250 Dh',
      avatar: 'images/omar-khatib.jpeg'
    },

    // Droit des Affaires
    {
      firstName: 'Sara',
      lastName: 'El Fassi',
      specialty: 'Droit des Affaires',
      location: 'Tanger - Fassi Legal Consulting',
      mode: 'Téléconsultation',
      tarif: '700 Dh',
      avatar: 'images/sopihie.jpeg'
    },
    {
      firstName: 'Amine',
      lastName: 'Berrada',
      specialty: 'Droit des Affaires',
      location: 'Casablanca - Berrada & Partners',
      mode: 'Consultation en cabinet',
      tarif: '720 - 1450 Dh',
      avatar: 'images/sopihie.jpeg'
    },
    {
      firstName: 'Fatima',
      lastName: 'El Khamlichi',
      specialty: 'Droit des Affaires',
      location: 'Rabat - Khamlichi Law Firm',
      mode: 'Téléconsultation',
      tarif: '820 Dh',
      avatar: 'images/sopihie.jpeg'
    }
  ];

showAgendaModal = false;
selectedTeacherForAppointment: any = null;

  get filteredLawyers() {
    return this.selectedSpecialty
      ? this.lawyers.filter(l => l.specialty === this.selectedSpecialty)
      : this.lawyers;
  }

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }

  resetFilter() {
    this.selectedSpecialty = '';
  }
  
  openAgendaModal(teacher: any) {
    this.selectedTeacherForAppointment = teacher;
    this.showAgendaModal = true;
  }

  closeAgendaModal() {
    this.showAgendaModal = false;
    this.selectedTeacherForAppointment = null;
  }
}

