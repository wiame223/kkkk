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
    { name: 'Cardiologie', description: 'Spécialistes du cœur et des vaisseaux sanguins.', icon: 'bi bi-heart-pulse' },
    { name: 'Dermatologie', description: 'Soins pour la peau, les cheveux et les ongles.', icon: 'bi bi-droplet-half' },
    { name: 'Pédiatrie', description: 'Médecine pour les nourrissons et les enfants.', icon: 'bi bi-emoji-smile' },
    { name: 'Psychiatrie', description: 'Santé mentale et troubles du comportement.', icon: 'bi bi-brain' },
  ];

  selectedSpecialty: string = '';

  doctors = [
    {
      firstName: 'Khalid',
      lastName: 'El Yamani',
      specialty: 'Cardiologie',
      location: 'Rabat - Clinique Ibn Sina',
      mode: 'Présentiel',
      tarif: '800 Dh',
      avatar: '/images/khalid.jpeg',
    },
    {
      firstName: 'Omar',
      lastName: 'Chaoui',
      specialty: 'Cardiologie',
      location: 'Casablanca - Hôpital Cheikh Khalifa',
      mode: 'Présentiel + Téléconsultation',
      tarif: '450 - 900 Dh',
      avatar: '/images/omar.jpeg',
    },
    {
      firstName: 'Yassin',
      lastName: 'Benjelloun',
      specialty: 'Cardiologie',
      location: 'Tanger - Centre Cardiologique',
      mode: 'Téléconsultation',
      tarif: '350 Dh',
      avatar: '/images/yassin.jpeg',
    },
    {
      firstName: 'Sofia',
      lastName: 'El Mesbahi',
      specialty: 'Dermatologie',
      location: 'Fès - Centre Médical Fès',
      mode: 'Téléconsultation',
      tarif: '300 Dh',
      avatar: '/images/sofia.jpeg',
    },
    {
      firstName: 'Fatima',
      lastName: 'Zahra',
      specialty: 'Dermatologie',
      location: 'Marrakech - Clinique Atlas',
      mode: 'Présentiel',
      tarif: '700 Dh',
      avatar: '/images/fatima.jpeg',
    },
    {
      firstName: 'Mehdi',
      lastName: 'Alaoui',
      specialty: 'Dermatologie',
      location: 'Agadir - Centre Dermatologique',
      mode: 'Présentiel',
      tarif: '650 Dh',
      avatar: '/images/mehdi-derm.jpeg',
    },
    {
      firstName: 'Nezha',
      lastName: 'Elhattab',
      specialty: 'Pédiatrie',
      location: 'Casablanca - Clinique ABC',
      mode: 'Présentiel + Téléconsultation',
      tarif: '300 - 600 Dh',
      avatar: '/images/nezha.jpeg',
    },
    {
      firstName: 'Amina',
      lastName: 'Bouzidi',
      specialty: 'Pédiatrie',
      location: 'Oujda - Centre Médical Oriental',
      mode: 'Téléconsultation',
      tarif: '300 Dh',
      avatar: '/images/amina.jpeg',
    },
    {
      firstName: 'Karim',
      lastName: 'El Fassi',
      specialty: 'Pédiatrie',
      location: 'Rabat - Hôpital Enfants',
      mode: 'Présentiel',
      tarif: '800 Dh',
      avatar: '/images/karim-ped.jpeg',
    },
    {
      firstName: 'Samira',
      lastName: 'Labraiouig',
      specialty: 'Psychiatrie',
      location: 'Casablanca - Cabinet Psychiatrique',
      mode: 'Présentiel + Téléconsultation',
      tarif: '300 - 1000 Dh',
      avatar: '/images/samira.jpeg',
    },
    {
      firstName: 'Karim',
      lastName: 'Benkirane',
      specialty: 'Psychiatrie',
      location: 'Tétouan - Centre de Santé Mentale',
      mode: 'Téléconsultation',
      tarif: '250 Dh',
      avatar: '/images/karim.jpeg',
    },
    {
      firstName: 'Leila',
      lastName: 'Mansouri',
      specialty: 'Psychiatrie',
      location: 'Marrakech - Institut Psychiatrique',
      mode: 'Présentiel',
      tarif: '600  Dh',
      avatar: '/images/leila-psy.jpeg',
    },
  ];

showAgendaModal = false;
selectedTeacherForAppointment: any = null;

  get filteredDoctors() {
    return this.selectedSpecialty
      ? this.doctors.filter((d) => d.specialty === this.selectedSpecialty)
      : this.doctors;
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
