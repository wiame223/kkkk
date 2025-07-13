import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-esthetic-domain',
  templateUrl: './esthetic-domain.component.html',
  styleUrls: ['./esthetic-domain.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EstheticDomainComponent {
  specialties = [
    {
      name: 'Soins Visage',
      description: 'Nettoyage, peeling, hydrafacial et soins anti-âge.',
      icon: 'bi bi-droplet'
    },
    {
      name: 'Épilation',
      description: 'Épilation laser, à la cire et soins complémentaires.',
      icon: 'bi bi-scissors'
    },
    {
      name: 'Massage',
      description: 'Massages relaxants, drainants et thérapeutiques.',
      icon: 'bi bi-hand-thumbs-up'
    },
    {
      name: 'Beauté Mains/Pieds',
      description: 'Manucure, pédicure et pose de vernis semi-permanent.',
      icon: 'bi bi-hand-index'
    }
  ];

  selectedSpecialty: string = '';

  estheticians = [
    {
      firstName: 'Nadia',
      lastName: 'El Mansouri',
      specialty: 'Soins Visage',
      location: 'Casablanca - Institut de Beauté Nadia',
      mode: 'Présentiel',
      tarif: '300 - 700 Dh',
      avatar: '/images/nadia1.jpg'
    },
    {
      firstName: 'Leila',
      lastName: 'Benjelloun',
      specialty: 'Soins Visage',
      location: 'Rabat - Spa Leila',
      mode: 'Présentiel',
      tarif: '250 - 550 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Imane',
      lastName: 'El Amrani',
      specialty: 'Épilation',
      location: 'Rabat - Institut Imane',
      mode: 'Présentiel',
      tarif: '200 - 500 Dh',
      avatar: '/images/imane.jpg'
    },
    {
      firstName: 'Samira',
      lastName: 'Bennani',
      specialty: 'Massage',
      location: 'Tanger - Relax Center',
      mode: 'Présentiel',
      tarif: '150 - 200 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Fatima',
      lastName: 'El Khamlichi',
      specialty: 'Beauté Mains/Pieds',
      location: 'Rabat - Nail Palace',
      mode: 'Présentiel',
      tarif: '150 - 200 Dh',
      avatar: '/images/sopihie.jpeg'
    }
  ];

showAgendaModal = false;
selectedTeacherForAppointment: any = null;


  get filteredEstheticians() {
    if (!this.selectedSpecialty) return this.estheticians;
    return this.estheticians.filter(e => e.specialty === this.selectedSpecialty);
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

