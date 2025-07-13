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

  selectedSpecialty: string = '';

  coaches = [
    {
      firstName: 'Karima',
      lastName: 'Benbrahim',
      specialty: 'Coaching Personnel',
      style: 'Développement personnel',
      experience: '8 ans',
      location: 'Casablanca',
      tarif: '400 - 600 Dh',
      avatar: '/images/karima.jpg'
    },
    {
      firstName: 'Mehdi',
      lastName: 'El Amrani',
      specialty: 'Coaching Personnel',
      style: 'Gestion des émotions',
      experience: '5 ans',
      location: 'En ligne',
      tarif: '400 - 500 Dh',
      avatar: '/images/mehdi.jpg'
    },
    {
      firstName: 'Amina',
      lastName: 'Zeroual',
      specialty: 'Coaching Personnel',
      style: 'Relations humaines',
      experience: '6 ans',
      location: 'Rabat',
      tarif: '300 - 600 Dh',
      avatar: '/images/amina.jpg'
    },
    {
      firstName: 'Omar',
      lastName: 'Cherkaoui',
      specialty: 'Coaching Professionnel',
      style: 'Leadership & motivation',
      experience: '10 ans',
      location: 'Marrakech',
      tarif: '400 - 880 Dh',
      avatar: '/images/omar.jpg'
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Coaching Professionnel',
      style: 'Bilan de compétences',
      experience: '7 ans',
      location: 'En ligne',
      tarif: '270 - 700 Dh',
      avatar: '/images/leila.jpg'
    },
    {
      firstName: 'Youssef',
      lastName: 'Bennani',
      specialty: 'Coaching Professionnel',
      style: 'Transition pro',
      experience: '9 ans',
      location: 'Casablanca',
      tarif: '400 - 600 Dh',
      avatar: '/images/youssef.jpg'
    },
    {
      firstName: 'Fatima',
      lastName: 'Alaoui',
      specialty: 'Nutrition & Bien-être',
      style: 'Nutrition holistique',
      experience: '12 ans',
      location: 'Tanger',
      tarif: '340 - 600 Dh',
      avatar: '/images/fatima.jpg'
    },
    {
      firstName: 'Hicham',
      lastName: 'El Fassi',
      specialty: 'Nutrition & Bien-être',
      style: 'Sport & alimentation',
      experience: '5 ans',
      location: 'Agadir',
      tarif: '300 - 600 Dh',
      avatar: '/images/hicham.jpg'
    },
    {
      firstName: 'Nadia',
      lastName: 'Bennis',
      specialty: 'Nutrition & Bien-être',
      style: 'Régimes personnalisés',
      experience: '8 ans',
      location: 'En ligne',
      tarif: '200 - 500 Dh',
      avatar: '/images/nadia.jpg'
    },
    {
      firstName: 'Samir',
      lastName: 'Belhaj',
      specialty: 'Méditation & Pleine Conscience',
      style: 'Réduction du stress',
      experience: '20 ans',
      location: 'Fès',
      tarif: '900 - 1000 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Zahra',
      lastName: 'Idrissi',
      specialty: 'Méditation & Pleine Conscience',
      style: 'Méditation guidée',
      experience: '6 ans',
      location: 'En ligne',
      tarif: '300 - 600 Dh',
      avatar: '/images/zahra.jpg'
    },
    {
      firstName: 'Kamal',
      lastName: 'Rhouzi',
      specialty: 'Méditation & Pleine Conscience',
      style: 'Pleine conscience au travail',
      experience: '4 ans',
      location: 'Casablanca',
      tarif: '400 - 600 Dh',
      avatar: '/images/sopihie.jpeg'
    }
  ];

showAgendaModal = false;
selectedTeacherForAppointment: any = null;


  get filteredCoaches() {
    if (!this.selectedSpecialty) return this.coaches;
    return this.coaches.filter(coach => coach.specialty === this.selectedSpecialty);
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