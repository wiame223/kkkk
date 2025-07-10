import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-health-domain',
  templateUrl: './health-domain.component.html',
  styleUrls: ['./health-domain.component.css'],
  imports: [CommonModule], 
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
    },
    {
      name: 'Gynécologie',
      description: 'Santé reproductive féminine et suivi de grossesse.',
      icon: 'bi bi-gender-female'
    },
    {
      name: 'Orthopédie',
      description: 'Problèmes musculo-squelettiques et traumatologie.',
      icon: 'bi bi-bone'
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
    // Cardiologie
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
      firstName: 'Omar',
      lastName: 'Cherkaoui',
      specialty: 'Cardiologie',
      location: 'Casablanca - Hôpital Cheikh Khalifa',
      mode: 'Présentiel',
      availableSlots: ['Mardi 8h', 'Jeudi 16h', 'Samedi 10h'],
      avatar: '/images/omar.jpeg'
    },
    
    // Dermatologie
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
      firstName: 'Zineb',
      lastName: 'El Fassi',
      specialty: 'Dermatologie',
      location: 'Marrakech - Clinique Internationale',
      mode: 'Présentiel + Téléconsultation',
      availableSlots: ['Lundi 14h', 'Mercredi 9h', 'Vendredi 16h'],
      avatar: '/images/zineb.jpeg'
    },
    
    // Pédiatrie
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
      firstName: 'Mehdi',
      lastName: 'Bouzidi',
      specialty: 'Pédiatrie',
      location: 'Rabat - Hôpital d\'Enfants',
      mode: 'Présentiel',
      availableSlots: ['Lundi 9h', 'Mercredi 10h', 'Vendredi 14h'],
      avatar: '/images/mehdi.jpeg'
    },
    {
      firstName: 'Fatima',
      lastName: 'Zahra',
      specialty: 'Pédiatrie',
      location: 'Oujda - Centre Médical Al Amal',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 13h', 'Jeudi 17h'],
      avatar: '/images/fatima.jpeg'
    },
    
    // Psychiatrie
    {
      firstName: 'Youssef',
      lastName: 'Hamzaoui',
      specialty: 'Psychiatrie',
      location: 'Marrakech - Centre Psy Santé',
      mode: 'Présentiel',
      availableSlots: ['Mardi 9h', 'Vendredi 13h'],
      avatar: '/images/youssef.jpeg'
    },
    {
      firstName: 'Samira',
      lastName: 'El Mansouri',
      specialty: 'Psychiatrie',
      location: 'Casablanca - Clinique des spécialités',
      mode: 'Présentiel + Téléconsultation',
      availableSlots: ['Lundi 11h', 'Mercredi 15h', 'Samedi 10h'],
      avatar: '/images/samira.jpeg'
    },
    {
      firstName: 'Karim',
      lastName: 'Belhaj',
      specialty: 'Psychiatrie',
      location: 'Tétouan - Centre Psychiatrique du Nord',
      mode: 'Présentiel',
      availableSlots: ['Mardi 16h', 'Jeudi 9h'],
      avatar: '/images/karim.jpeg'
    },
    
    // Gynécologie
    {
      firstName: 'Amina',
      lastName: 'Lahlou',
      specialty: 'Gynécologie',
      location: 'Rabat - Clinique Annakhil',
      mode: 'Présentiel',
      availableSlots: ['Lundi 8h', 'Mercredi 11h', 'Vendredi 15h'],
      avatar: '/images/amina.jpeg'
    },
    {
      firstName: 'Houda',
      lastName: 'Saidi',
      specialty: 'Gynécologie',
      location: 'Casablanca - Polyclinique du Littoral',
      mode: 'Présentiel + Téléconsultation',
      availableSlots: ['Mardi 10h', 'Jeudi 14h'],
      avatar: '/images/houda.jpeg'
    },
    {
      firstName: 'Nadia',
      lastName: 'Berraho',
      specialty: 'Gynécologie',
      location: 'Fès - Clinique Al Farabi',
      mode: 'Présentiel',
      availableSlots: ['Lundi 13h', 'Mercredi 9h', 'Vendredi 11h'],
      avatar: '/images/nadia.jpeg'
    },
    
    // Orthopédie
    {
      firstName: 'Rachid',
      lastName: 'El Kadi',
      specialty: 'Orthopédie',
      location: 'Casablanca - Clinique du Sport',
      mode: 'Présentiel',
      availableSlots: ['Mardi 8h', 'Jeudi 16h', 'Samedi 9h'],
      avatar: '/images/rachid.jpeg'
    },
    {
      firstName: 'Hicham',
      lastName: 'Benjelloun',
      specialty: 'Orthopédie',
      location: 'Marrakech - Centre de Traumatologie',
      mode: 'Présentiel',
      availableSlots: ['Lundi 15h', 'Mercredi 10h', 'Vendredi 14h'],
      avatar: '/images/hicham.jpeg'
    },
    {
      firstName: 'Salma',
      lastName: 'Tazi',
      specialty: 'Orthopédie',
      location: 'Tanger - Hôpital Régional',
      mode: 'Présentiel + Téléconsultation',
      availableSlots: ['Mardi 14h', 'Jeudi 9h'],
      avatar: '/images/salma.jpeg'
    }
  ];
}

