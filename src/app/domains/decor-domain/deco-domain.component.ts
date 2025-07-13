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
    { name: 'Décoration Résidentielle', description: 'Aménagement intérieur pour maisons et appartements', icon: 'bi bi-house-heart' },
    { name: 'Décoration Événementielle', description: 'Mariages, fêtes et cérémonies', icon: 'bi bi-balloon' },
    { name: 'Design Commercial', description: 'Boutiques, restaurants et espaces professionnels', icon: 'bi bi-shop-window' },
    { name: 'Staging Immobilier', description: 'Mise en valeur de biens immobiliers', icon: 'bi bi-house-up' }
  ];

  selectedSpecialty: string = '';

  decorators = [
    {
      firstName: 'Leila',
      lastName: 'Benjelloun',
      specialty: 'Décoration Résidentielle',
      style: 'Style maroco-moderne',
      experience: '8 ans',
      location: 'Casablanca',
      tarif: '400 - 800 DH',
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
      tarif: '300 - 600 DH',
      avatar: '/images/sopihie.jpeg',
      portfolio: '8 villas haut de gamme'
    },
    {
      firstName: 'Amina',
      lastName: 'Zahidi',
      specialty: 'Décoration Événementielle',
      style: 'Mariages traditionnels',
      experience: '10 ans',
      location: 'Marrakech',
      tarif: '500 - 900 DH',
      avatar: '/images/sopihie.jpeg',
      portfolio: '50+ événements'
    },
    {
      firstName: 'Youssef',
      lastName: 'Cherkaoui',
      specialty: 'Design Commercial',
      style: 'Espaces tendance',
      experience: '6 ans',
      location: 'Tanger',
      tarif: '700 - 1200 DH',
      avatar: '/images/sopihie.jpeg',
      portfolio: '15 commerces'
    },
    {
      firstName: 'Zahra',
      lastName: 'Bennis',
      specialty: 'Staging Immobilier',
      style: 'Mise en valeur optimale',
      experience: '7 ans',
      location: 'Agadir',
      tarif: '400 - 800 DH',
      avatar: '/images/sopihie.jpeg',
      portfolio: '30+ biens valorisés'
    }
  ];

  get filteredDecorators() {
    if (!this.selectedSpecialty || this.selectedSpecialty === '') {
      return this.decorators;
    }
    return this.decorators.filter(d => d.specialty === this.selectedSpecialty);
  }

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }

  resetFilter() {
    this.selectedSpecialty = '';
  }
}