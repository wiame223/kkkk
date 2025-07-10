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
      : this.doctors;
  }

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }

  doctors = [
    // Cardiologie (3 médecins)
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
      firstName: 'Omar',
      lastName: 'Chaoui',
      specialty: 'Cardiologie',
      location: 'Casablanca - Hôpital Cheikh Khalifa',
      mode: 'Présentiel + Téléconsultation',
      availableSlots: ['Mardi 8h', 'Jeudi 16h', 'Samedi 10h'],
      avatar: '/images/omar.jpeg'
    },
    {
      firstName: 'Yassin',
      lastName: 'Benjelloun',
      specialty: 'Cardiologie',
      location: 'Tanger - Centre Cardiologique',
      mode: 'Téléconsultation',
      availableSlots: ['Mercredi 9h', 'Vendredi 14h'],
      avatar: '/images/yassin.jpeg'
    },
    
    // Dermatologie (3 médecins)
    {
      firstName: 'Sofia',
      lastName: 'El Mesbahi',
      specialty: 'Dermatologie',
      location: 'Fès - Centre Médical Fès',
      mode: 'Téléconsultation',
      availableSlots: ['Lundi 16h', 'Mercredi 10h'],
      avatar: '/images/sofia.jpeg'
    },
    {
      firstName: 'Fatima',
      lastName: 'Zahra',
      specialty: 'Dermatologie',
      location: 'Marrakech - Clinique Atlas',
      mode: 'Présentiel',
      availableSlots: ['Lundi 14h', 'Mercredi 9h', 'Vendredi 11h'],
      avatar: '/images/fatima.jpeg'
    },
    {
      firstName: 'Mehdi',
      lastName: 'Alaoui',
      specialty: 'Dermatologie',
      location: 'Agadir - Centre Dermatologique',
      mode: 'Présentiel',
      availableSlots: ['Mardi 13h', 'Jeudi 10h'],
      avatar: '/images/mehdi-derm.jpeg'
    },
    
    // Pédiatrie (3 médecins)
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
      firstName: 'Amina',
      lastName: 'Bouzidi',
      specialty: 'Pédiatrie',
      location: 'Oujda - Centre Médical Oriental',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 10h', 'Jeudi 14h', 'Samedi 9h'],
      avatar: '/images/amina.jpeg'
    },
    {
      firstName: 'Karim',
      lastName: 'El Fassi',
      specialty: 'Pédiatrie',
      location: 'Rabat - Hôpital Enfants',
      mode: 'Présentiel',
      availableSlots: ['Lundi 8h', 'Mercredi 16h'],
      avatar: '/images/karim-ped.jpeg'
    },
    
    // Psychiatrie (3 médecins)
    {
      firstName: 'Samira',
      lastName: 'Labraiouig',
      specialty: 'Psychiatrie',
      location: 'Casablanca - Cabinet Psychiatrique',
      mode: 'Présentiel + Téléconsultation',
      availableSlots: ['Lundi 13h', 'Mercredi 17h'],
      avatar: '/images/samira.jpeg'
    },
    {
      firstName: 'Karim',
      lastName: 'Benkirane',
      specialty: 'Psychiatrie',
      location: 'Tétouan - Centre de Santé Mentale',
      mode: 'Téléconsultation',
      availableSlots: ['Jeudi 9h', 'Samedi 15h'],
      avatar: '/images/karim.jpeg'
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Psychiatrie',
      location: 'Marrakech - Institut Psychiatrique',
      mode: 'Présentiel',
      availableSlots: ['Mardi 11h', 'Vendredi 10h'],
      avatar: '/images/leila-psy.jpeg'
    }
  ];
}