import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-education-domain',
  templateUrl: './education-domain.component.html',
  styleUrls: ['./education-domain.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EducationDomainComponent {
  specialties = [
    {
      name: 'Cours Particuliers',
      description: 'Soutien scolaire personnalisé toutes matières',
      icon: 'bi bi-book'
    },
    {
      name: 'Formation Professionnelle', 
      description: 'Formations certifiantes pour adultes',
      icon: 'bi bi-briefcase'
    },
    {
      name: 'Langues Étrangères',
      description: 'Cours de langues avec professeurs natifs',
      icon: 'bi bi-translate'
    },
    {
      name: 'Préparation Examens',
      description: 'Bac, concours et tests standardisés',
      icon: 'bi bi-file-text'
    }
  ];

  selectedSpecialty: string | null = null;

  teachers = [
    // Cours Particuliers
    {
      firstName: 'Karim',
      lastName: 'Benjelloun',
      specialty: 'Cours Particuliers',
      subject: 'Mathématiques',
      level: 'Collège/Lycée',
      mode: 'En ligne/Présentiel',
      availableSlots: ['Lundi 16h', 'Mercredi 10h', 'Samedi 14h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Cours Particuliers',
      subject: 'Français',
      level: 'Primaire/Collège',
      mode: 'Présentiel',
      availableSlots: ['Mardi 17h', 'Jeudi 16h', 'Vendredi 18h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Youssef',
      lastName: 'Alaoui',
      specialty: 'Cours Particuliers',
      subject: 'SVT',
      level: 'Lycée',
      mode: 'En ligne',
      availableSlots: ['Mercredi 14h', 'Samedi 10h'],
      avatar: '/images/sopihie.jpeg'
    },

    // Formation Professionnelle
    {
      firstName: 'Nadia',
      lastName: 'Bouzidi',
      specialty: 'Formation Professionnelle',
      subject: 'Comptabilité',
      level: 'Adultes',
      mode: 'En ligne/Présentiel',
      availableSlots: ['Lundi 9h-12h', 'Jeudi 14h-17h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Hicham',
      lastName: 'Toumi',
      specialty: 'Formation Professionnelle',
      subject: 'Informatique',
      level: 'Adultes',
      mode: 'Présentiel',
      availableSlots: ['Mardi 18h-21h', 'Samedi 9h-12h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Samira',
      lastName: 'Khalfi',
      specialty: 'Formation Professionnelle',
      subject: 'Marketing Digital',
      level: 'Adultes',
      mode: 'En ligne',
      availableSlots: ['Mercredi 19h-21h', 'Vendredi 19h-21h'],
      avatar: '/images/sopihie.jpeg'
    },

    // Langues Étrangères
    {
      firstName: 'Amina',
      lastName: 'El Fassi',
      specialty: 'Langues Étrangères', 
      subject: 'Anglais',
      level: 'Tous niveaux',
      mode: 'En ligne',
      availableSlots: ['Mardi 9h', 'Jeudi 15h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'David',
      lastName: 'Johnson',
      specialty: 'Langues Étrangères',
      subject: 'Anglais (natif)',
      level: 'Professionnels',
      mode: 'En ligne',
      availableSlots: ['Lundi 13h', 'Mercredi 11h', 'Vendredi 10h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Isabelle',
      lastName: 'Dupont',
      specialty: 'Langues Étrangères',
      subject: 'Français (natif)',
      level: 'Tous niveaux',
      mode: 'En ligne/Présentiel',
      availableSlots: ['Mardi 14h', 'Jeudi 10h', 'Samedi 16h'],
      avatar: '/images/sopihie.jpeg'
    },

    // Préparation Examens
    {
      firstName: 'Mehdi',
      lastName: 'Cherkaoui',
      specialty: 'Préparation Examens',
      subject: 'Sciences Physiques',
      level: 'Baccalauréat',
      mode: 'Présentiel',
      availableSlots: ['Lundi 14h', 'Vendredi 16h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Fatima',
      lastName: 'Zahra',
      specialty: 'Préparation Examens',
      subject: 'Philosophie',
      level: 'Baccalauréat',
      mode: 'En ligne',
      availableSlots: ['Mercredi 15h', 'Dimanche 11h'],
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Omar',
      lastName: 'Belhaj',
      specialty: 'Préparation Examens',
      subject: 'Maths SUP',
      level: 'Classes Préparatoires',
      mode: 'En ligne/Présentiel',
      availableSlots: ['Mardi 20h', 'Samedi 9h'],
      avatar: '/images/sopihie.jpeg'
    }
  ];

  get filteredTeachers() {
    return this.selectedSpecialty
      ? this.teachers.filter(t => t.specialty === this.selectedSpecialty)
      : this.teachers;
  }

  selectSpecialty(name: string) {
    this.selectedSpecialty = name;
  }
}