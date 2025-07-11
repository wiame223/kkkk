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

  selectedSpecialty: string | null = null;

  get filteredEstheticians() {
    return this.selectedSpecialty
      ? this.estheticians.filter(e => e.specialty === this.selectedSpecialty)
      : this.estheticians;
  }

  estheticians = [
    // Soins Visage
    {
      firstName: 'Nadia',
      lastName: 'El Mansouri',
      specialty: 'Soins Visage',
      location: 'Casablanca - Institut de Beauté Nadia',
      mode: 'Téléconsultation',
      availableSlots: ['Lundi 10h', 'Mercredi 14h', 'Vendredi 9h'],
      avatar: '/images/nadia1.jpg'
    },
    {
      firstName: 'Leila',
      lastName: 'Benjelloun',
      specialty: 'Soins Visage',
      location: 'Rabat - Spa Leila',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 13h', 'Jeudi 10h'],
      avatar: '/images/sopihie.jpeg'
    },
    // Épilation
    {
      firstName: 'Imane',
      lastName: 'El Amrani',
      specialty: 'Épilation',
      location: 'Rabat - Institut Imane',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 9h', 'Jeudi 15h'],
      avatar: '/images/imane.jpg'
    },
    // Massage
    {
      firstName: 'Samira',
      lastName: 'Bennani',
      specialty: 'Massage',
      location: 'Tanger - Relax Center',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 15h', 'Jeudi 9h'],
      avatar: '/images/sopihie.jpeg'
    },
    // Beauté Mains/Pieds
    {
      firstName: 'Fatima',
      lastName: 'El Khamlichi',
      specialty: 'Beauté Mains/Pieds',
      location: 'Rabat - Nail Palace',
      mode: 'Téléconsultation',
      availableSlots: ['Mardi 11h', 'Vendredi 16h'],
      avatar: '/images/sopihie.jpeg'
    }
  ];

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }
}