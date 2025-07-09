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
    }
  ];
}
