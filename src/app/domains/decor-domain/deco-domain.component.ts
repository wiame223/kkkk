import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-deco-domain',
  templateUrl: './deco-domain.component.html',
  styleUrls: ['./deco-domain.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class DecoDomainComponent {
  specialties = [
    {
      name: 'Décoration Résidentielle',
      description: 'Aménagement intérieur pour maisons et appartements',
      icon: 'bi bi-house-heart'
    },
    {
      name: 'Décoration Événementielle', 
      description: 'Mariages, fêtes et cérémonies',
      icon: 'bi bi-balloon'
    },
    {
      name: 'Design Commercial',
      description: 'Boutiques, restaurants et espaces professionnels',
      icon: 'bi bi-shop-window'
    },
    {
      name: 'Staging Immobilier',
      description: 'Mise en valeur de biens immobiliers',
      icon: 'bi bi-house-up'
    }
  ];

  selectedSpecialty: string | null = null;

  decorators = [
    // Décoration Résidentielle
    {
      firstName: 'Leila',
      lastName: 'Benjelloun',
      specialty: 'Décoration Résidentielle',
      style: 'Style maroco-moderne',
      experience: '8 ans',
      location: 'Casablanca',
      availableSlots: ['Lun 10h-12h', 'Mer 14h-16h', 'Ven 9h-11h'],
      avatar: '/images/leila1.jpg',
      portfolio: '12 projets résidentiels'
    },
    {
      firstName: 'Mehdi',
      lastName: 'El Fassi',
      specialty: 'Décoration Résidentielle',
      style: 'Minimaliste contemporain',
      experience: '5 ans',
      location: 'Rabat',
      availableSlots: ['Mar 15h-17h', 'Jeu 10h-12h'],
      avatar: '/images/sopihie.jpeg',
      portfolio: '8 villas haut de gamme'
    },

    // Décoration Événementielle
    {
      firstName: 'Amina',
      lastName: 'Zahidi',
      specialty: 'Décoration Événementielle',
      style: 'Mariages traditionnels',
      experience: '10 ans',
      location: 'Marrakech',
      availableSlots: ['Lun 14h-17h', 'Mer 9h-12h'],
      avatar: '/images/sopihie.jpeg',
      portfolio: '50+ événements'
    },

    // Design Commercial
    {
      firstName: 'Youssef',
      lastName: 'Cherkaoui',
      specialty: 'Design Commercial',
      style: 'Espaces tendance',
      experience: '6 ans',
      location: 'Tanger',
      availableSlots: ['Mar 9h-12h', 'Sam 10h-13h'],
      avatar: '/images/sopihie.jpeg',
      portfolio: '15 commerces'
    },

    // Staging Immobilier
    {
      firstName: 'Zahra',
      lastName: 'Bennis',
      specialty: 'Staging Immobilier',
      style: 'Mise en valeur optimale',
      experience: '7 ans',
      location: 'Agadir',
      availableSlots: ['Jeu 14h-18h', 'Ven 10h-15h'],
      avatar: '/images/sopihie.jpeg',
      portfolio: '30+ biens valorisés'
    }
  ];

  get filteredDecorators() {
    return this.selectedSpecialty
      ? this.decorators.filter(d => d.specialty === this.selectedSpecialty)
      : this.decorators;
  }

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }
}