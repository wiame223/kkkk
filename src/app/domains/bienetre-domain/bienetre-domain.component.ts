import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bienetre-domain',
  templateUrl: './bienetre-domain.component.html',
  styleUrls: ['./bienetre-domain.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BienetreDomainComponent {
  specialties = [
    {
      name: 'Coaching Personnel',
      description: 'Développement personnel et confiance en soi',
      icon: 'bi bi-person-heart'
    },
    {
      name: 'Coaching Professionnel', 
      description: 'Accompagnement carrière et leadership',
      icon: 'bi bi-briefcase-fill'
    },
    {
      name: 'Nutrition & Bien-être',
      description: 'Programmes alimentaires équilibrés',
      icon: 'bi bi-egg-fried'
    },
    {
      name: 'Méditation & Pleine Conscience',
      description: 'Gestion du stress et relaxation',
      icon: 'bi bi-tree-fill'
    }
  ];

  selectedSpecialty: string | null = null;

  coaches = [
    // Coaching Personnel
    {
      firstName: 'Karima',
      lastName: 'Benbrahim',
      specialty: 'Coaching Personnel',
      expertise: 'Confiance en soi',
      experience: '8 ans',
      mode: 'En ligne/Présentiel (Casablanca)',
      availableSlots: ['Lundi 16h', 'Mercredi 10h', 'Samedi 14h'],
      avatar: '/images/karima.jpg'
    },
    {
      firstName: 'Mehdi',
      lastName: 'El Amrani',
      specialty: 'Coaching Personnel',
      expertise: 'Gestion des émotions',
      experience: '5 ans',
      mode: 'En ligne',
      availableSlots: ['Mardi 17h', 'Jeudi 16h', 'Vendredi 18h'],
      avatar: '/images/mehdi.jpg'
    },
    {
      firstName: 'Amina',
      lastName: 'Zeroual',
      specialty: 'Coaching Personnel',
      expertise: 'Relations interpersonnelles',
      experience: '6 ans',
      mode: 'Présentiel (Rabat)',
      availableSlots: ['Mercredi 14h', 'Samedi 10h'],
      avatar: '/images/amina.jpg'
    },

    // Coaching Professionnel
    {
      firstName: 'Omar',
      lastName: 'Cherkaoui',
      specialty: 'Coaching Professionnel',
      expertise: 'Leadership',
      experience: '10 ans',
      mode: 'En ligne/Présentiel (Marrakech)',
      availableSlots: ['Lundi 9h-12h', 'Jeudi 14h-17h'],
      avatar: '/images/omar.jpg'
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Coaching Professionnel',
      expertise: 'Gestion de carrière',
      experience: '7 ans',
      mode: 'En ligne',
      availableSlots: ['Mardi 18h-21h', 'Samedi 9h-12h'],
      avatar: '/images/leila.jpg'
    },
    {
      firstName: 'Youssef',
      lastName: 'Bennani',
      specialty: 'Coaching Professionnel',
      expertise: 'Transition professionnelle',
      experience: '9 ans',
      mode: 'Présentiel (Casablanca)',
      availableSlots: ['Mercredi 19h-21h', 'Vendredi 19h-21h'],
      avatar: '/images/youssef.jpg'
    },

    // Nutrition & Bien-être
    {
      firstName: 'Fatima', 
      lastName: 'Alaoui',
      specialty: 'Nutrition & Bien-être',
      expertise: 'Nutrition holistique',
      experience: '12 ans',
      mode: 'En ligne/Présentiel (Tanger)',
      availableSlots: ['Mardi 9h', 'Jeudi 15h'],
      avatar: '/images/fatima.jpg'
    },
    {
      firstName: 'Hicham',
      lastName: 'El Fassi',
      specialty: 'Nutrition & Bien-être',
      expertise: 'Sport et alimentation',
      experience: '5 ans',
      mode: 'Présentiel (Agadir)',
      availableSlots: ['Lundi 13h', 'Mercredi 11h', 'Vendredi 10h'],
      avatar: '/images/hicham.jpg'
    },
    {
      firstName: 'Nadia',
      lastName: 'Bennis',
      specialty: 'Nutrition & Bien-être',
      expertise: 'Régimes spécifiques',
      experience: '8 ans',
      mode: 'En ligne',
      availableSlots: ['Mardi 14h', 'Jeudi 10h', 'Samedi 16h'],
      avatar: '/images/nadia.jpg'
    },

    // Méditation & Pleine Conscience
    {
      firstName: 'Samir',
      lastName: 'Belhaj',
      specialty: 'Méditation & Pleine Conscience',
      expertise: 'Réduction du stress',
      experience: '20 ans',
      mode: 'En ligne/Présentiel (Fès)',
      availableSlots: ['Lundi 14h', 'Vendredi 16h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Zahra',
      lastName: 'Idrissi',
      specialty: 'Méditation & Pleine Conscience',
      expertise: 'Méditation guidée',
      experience: '6 ans',
      mode: 'En ligne',
      availableSlots: ['Mercredi 15h', 'Dimanche 11h'],
      avatar: '/images/zahra.jpg'
    },
    {
      firstName: 'Kamal',
      lastName: 'Rhouzi',
      specialty: 'Méditation & Pleine Conscience',
      expertise: 'Pleine conscience au travail',
      experience: '4 ans',
      mode: 'Présentiel (Casablanca)',
      availableSlots: ['Mardi 20h', 'Samedi 9h'],
      avatar: '/images/sopihie.jpeg'
    }
  ];

  get filteredCoaches() {
    return this.selectedSpecialty
      ? this.coaches.filter(c => c.specialty === this.selectedSpecialty)
      : this.coaches;
  }

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }

  resetFilter() {
    this.selectedSpecialty = null;
  }
}