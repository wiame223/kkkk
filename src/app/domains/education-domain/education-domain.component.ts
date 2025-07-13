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

  selectedSpecialty: string = '';

  teachers = [
    {
      firstName: 'Karim',
      lastName: 'Benjelloun',
      specialty: 'Cours Particuliers',
      subject: 'Mathématiques',
      level: 'Collège/Lycée',
      mode: 'En ligne/Présentiel',
      experience: '7 ans',
      location: 'Casablanca',
      tarif: '200 - 700 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Cours Particuliers',
      subject: 'Français',
      level: 'Primaire/Collège',
      mode: 'Présentiel',
      experience: '5 ans',
      location: 'Rabat',
      tarif: '290 - 600 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Youssef',
      lastName: 'Alaoui',
      specialty: 'Formation Professionnelle',
      subject: 'Comptabilité',
      level: 'Adultes',
      mode: 'En ligne',
      experience: '8 ans',
      location: 'Marrakech',
      tarif: '400 - 800 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Nadia',
      lastName: 'Bouzidi',
      specialty: 'Langues Étrangères',
      subject: 'Anglais',
      level: 'Tous niveaux',
      mode: 'En ligne',
      experience: '6 ans',
      location: 'En ligne',
      tarif: '400 - 600 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'David',
      lastName: 'Johnson',
      specialty: 'Langues Étrangères',
      subject: 'Anglais (natif)',
      level: 'Professionnels',
      mode: 'En ligne',
      experience: '10 ans',
      location: 'En ligne',
      tarif: '450 - 900 Dh',
      avatar: '/images/sopihie.jpeg'
    },
    {
      firstName: 'Fatima',
      lastName: 'Zohra',
      specialty: 'Préparation Examens',
      subject: 'Philosophie',
      level: 'Baccalauréat',
      mode: 'En ligne',
      experience: '7 ans',
      location: 'Casablanca',
      tarif: '300 - 600 Dh',
      avatar: '/images/sopihie.jpeg'
    }
  ];

  showAgendaModal = false;
selectedTeacherForAppointment: any = null;


   get filteredTeachers() {
    if (!this.selectedSpecialty) return this.teachers;
    return this.teachers.filter(teacher => teacher.specialty === this.selectedSpecialty);
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