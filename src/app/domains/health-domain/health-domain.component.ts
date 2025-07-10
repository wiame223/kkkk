
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-health-domain',
  templateUrl: './health-domain.component.html',
  styleUrls: ['./health-domain.component.css'],
  standalone: true,
   imports: [CommonModule, FormsModule],
})
export class HealthDomainComponent {
  specialties = [
    {
      name: 'Cardiologie',
      description: 'Spécialistes du cœur et des vaisseaux sanguins.',
      icon: 'bi bi-heart-pulse'
    },
    {
      name: 'Dermatologie',
      description: 'Soins pour la peau, les cheveux et les ongles.',
      icon: 'bi bi-droplet-half'
    },
    {
      name: 'Pédiatrie',
      description: 'Médecine pour les nourrissons et les enfants.',
      icon: 'bi bi-emoji-smile'
    },
    {
      name: 'Psychiatrie',
      description: 'Santé mentale et troubles du comportement.',
      icon: 'bi bi-brain'
    }
  ];


  selectedSpecialty: string | null = null;

get filteredDoctors() {
  return this.selectedSpecialty
    ? this.doctors.filter(d => d.specialty === this.selectedSpecialty)
    : [];
}

selectSpecialty(name: string) {
  this.selectedSpecialty = name;
}


doctors = [
  {
    firstName: 'Khalid',
    lastName: 'El Yamani',
    specialty: 'Cardiologie',
    location: 'Rabat - Clinique Ibn Sina',
    mode: 'Présentiel',
    availableSlots: ['Lundi 10h', 'Mercredi 14h', 'Vendredi 9h'],
    avatar: '/images/khalid.jpeg'
  },
  {
    firstName: 'Leila',
    lastName: 'Bennani',
    specialty: 'Cardiologie',
    location: 'Agadir - Polyclinique Agadir',
    mode: 'Téléconsultation',
    availableSlots: ['Jeudi 10h', 'Samedi 11h'],
    avatar: '/images/leila.jpeg'
  },
  {
    firstName: 'Sofia',
    lastName: 'Benali',
    specialty: 'Dermatologie',
    location: 'Fès - Centre Médical Fès',
    mode: 'Téléconsultation',
    availableSlots: ['Lundi 16h', 'Mercredi 10h'],
    avatar: '/images/sofia.jpeg'
  },
  {
    firstName: 'Amine',
    lastName: 'Ouazzani',
    specialty: 'Dermatologie',
    location: 'Tanger - Cabinet Privé',
    mode: 'Présentiel',
    availableSlots: ['Mardi 11h', 'Jeudi 15h'],
    avatar: '/images/amine.jpeg'
  },
  {
    firstName: 'Nezha',
    lastName: 'Elhattab',
    specialty: 'Pédiatrie',
    location: 'Casablanca - Clinique ABC',
    mode: 'Présentiel + Téléconsultation',
    availableSlots: ['Mardi 15h', 'Jeudi 11h'],
    avatar: '/images/nezha.jpeg'
  },
  {
    firstName: 'Youssef',
    lastName: 'Hamzaoui',
    specialty: 'Psychiatrie',
    location: 'Marrakech - Centre Psy Santé',
    mode: 'Présentiel',
    availableSlots: ['Mardi 9h', 'Vendredi 13h'],
    avatar: '/images/youssef.jpeg'
  }
];
}