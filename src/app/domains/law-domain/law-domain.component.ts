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
    {
      name: 'Droit Civil',
      description: 'Litiges familiaux, contrats, successions, etc.',
      icon: 'bi bi-file-earmark-text'
    },
    {
      name: 'Droit Pénal',
      description: 'Défense en cas d’infractions et délits.',
      icon: 'bi bi-shield-lock'
    },
    {
      name: 'Droit du Travail',
      description: 'Relations employeur-employé, contrats de travail.',
      icon: 'bi bi-briefcase-fill'
    },
    {
      name: 'Droit des Affaires',
      description: 'Conseil aux entreprises, contrats commerciaux.',
      icon: 'bi bi-building'
    }
  ];

  selectedSpecialty: string | null = null;

  get filteredLawyers() {
    return this.selectedSpecialty
      ? this.lawyers.filter(l => l.specialty === this.selectedSpecialty)
      : this.lawyers;
  }

  lawyers = [
    {
      firstName: 'Youssef',
      lastName: 'Benali',
      specialty: 'Droit Civil',
      location: 'Casablanca',
      mode: 'Consultation en cabinet',
      availableSlots: ['Lundi 10h', 'Mercredi 14h'],
      avatar: '/images/youssef.jpeg'
    },
    {
      firstName: 'Imane',
      lastName: 'El Amrani',
      specialty: 'Droit Pénal',
      location: 'Rabat',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 9h', 'Jeudi 15h'],
      avatar: '/images/imane.jpeg'
    },
    {
      firstName: 'Adil',
      lastName: 'Kabbaj',
      specialty: 'Droit du Travail',
      location: 'Marrakech',
      mode: 'Consultation en cabinet',
      availableSlots: ['Mercredi 11h', 'Vendredi 16h'],
      avatar: '/images/adil.jpeg'
    },
    {
      firstName: 'Sara',
      lastName: 'El Fassi',
      specialty: 'Droit des Affaires',
      location: 'Tanger',
      mode: 'Téléconsultation',
      availableSlots: ['Jeudi 10h', 'Samedi 14h'],
      avatar: '/images/sara.jpeg'
    }
  ];

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }
}
