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
      description: 'Défense en cas d\'infractions et délits.',
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
    // Droit Civil (3 avocats)
    {
      firstName: 'Youssef',
      lastName: 'Benali',
      specialty: 'Droit Civil',
      location: 'Casablanca - Cabinet Benali',
      mode: 'Consultation en cabinet',
      availableSlots: ['Lundi 10h', 'Mercredi 14h', 'Vendredi 9h'],
      avatar: 'images/youssef-benali.jpeg'
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Droit Civil',
      location: 'Rabat - Société Juridique RBAT',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 13h', 'Jeudi 10h'],
      avatar: 'images/leila-mansouri.jpeg'
    },
    {
      firstName: 'Karim',
      lastName: 'El Fassi',
      specialty: 'Droit Civil',
      location: 'Fès - Cabinet El Fassi',
      mode: 'Consultation en cabinet',
      availableSlots: ['Lundi 16h', 'Mercredi 11h', 'Samedi 15h'],
      avatar: 'images/sopihie.jpeg'
    },

    // Droit Pénal (3 avocats)
    {
      firstName: 'Imane',
      lastName: 'El Amrani',
      specialty: 'Droit Pénal',
      location: 'Rabat - Palais de Justice',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 9h', 'Jeudi 15h', 'Vendredi 14h'],
      avatar: 'images/imane-amrani.jpeg'
    },
    {
      firstName: 'Mehdi',
      lastName: 'Cherkaoui',
      specialty: 'Droit Pénal',
      location: 'Casablanca - Tribunal de Commerce',
      mode: 'Consultation en cabinet',
      availableSlots: ['Lundi 14h', 'Mercredi 10h'],
      avatar: 'images/mehdi-cherkaoui.jpeg'
    },
    {
      firstName: 'Nadia',
      lastName: 'Zahiri',
      specialty: 'Droit Pénal',
      location: 'Marrakech - Cabinet Zahiri',
      mode: 'Téléconsultation',
      availableSlots: ['Jeudi 16h', 'Samedi 11h'],
      avatar: 'images/nadia-zahiri.jpeg'
    },

    // Droit du Travail (3 avocats)
    {
      firstName: 'Adil',
      lastName: 'Kabbaj',
      specialty: 'Droit du Travail',
      location: 'Marrakech - Société Kabbaj & Associés',
      mode: 'Consultation en cabinet',
      availableSlots: ['Mercredi 11h', 'Vendredi 16h', 'Samedi 10h'],
      avatar: 'images/adil-kabbaj.jpeg'
    },
    {
      firstName: 'Samira',
      lastName: 'Bennani',
      specialty: 'Droit du Travail',
      location: 'Tanger - Cabinet Bennani',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 15h', 'Jeudi 9h'],
      avatar: 'images/sopihie.jpeg'
    },
    {
      firstName: 'Omar',
      lastName: 'El Khatib',
      specialty: 'Droit du Travail',
      location: 'Agadir - Société Juridique AGD',
      mode: 'Consultation en cabinet',
      availableSlots: ['Lundi 9h', 'Vendredi 13h'],
      avatar: 'images/omar-khatib.jpeg'
    },

    // Droit des Affaires (3 avocats)
    {
      firstName: 'Sara',
      lastName: 'El Fassi',
      specialty: 'Droit des Affaires',
      location: 'Tanger - Fassi Legal Consulting',
      mode: 'Téléconsultation',
      availableSlots: ['Jeudi 10h', 'Samedi 14h', 'Dimanche 11h'],
      avatar: 'images/sopihie.jpeg'
    },
    {
      firstName: 'Amine',
      lastName: 'Berrada',
      specialty: 'Droit des Affaires',
      location: 'Casablanca - Berrada & Partners',
      mode: 'Consultation en cabinet',
      availableSlots: ['Lundi 15h', 'Mercredi 9h'],
      avatar: 'images/sopihie.jpeg'
    },
    {
      firstName: 'Fatima',
      lastName: 'El Khamlichi',
      specialty: 'Droit des Affaires',
      location: 'Rabat - Khamlichi Law Firm',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 11h', 'Vendredi 17h'],
      avatar: 'images/sopihie.jpeg'
    }
  ];

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }
}