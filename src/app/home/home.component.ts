import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  domains = [
    {
      id: 1,
      name: 'Santé',
      icon: 'fa fa-heartbeat',
      description: 'Médecins généralistes et spécialistes pour vos besoins de santé',
      image: '/images/team.jpg'
    },
    {
      id: 2,
      name: 'Droit',
      icon: 'fa fa-balance-scale',
      description: 'Avocats et juristes pour vos questions légales',
      image: '/images/khalid.jpg'
    },
    {
      id: 3,
      name: 'Esthétique',
      icon: 'fa fa-scissors',
      description: 'Professionnels de beauté et bien-être',
      image: '/images/team.jpg'
    }
  ];

  testimonials = [
    {
      text: 'J\'ai trouvé un excellent dermatologue en quelques minutes. La consultation en ligne était très pratique.',
      name: 'Sophie Martin',
      role: 'Patient',
      avatar: '/images/sopihie.jpeg'
    },
    {
      text: 'En tant que médecin, cette plateforme me permet de gérer facilement mon planning et mes consultations.',
      name: 'Dr. El Yamani Khalid',
      role: 'Médecin généraliste',
      avatar: '/images/khalid.jpeg'
    },
    {
      text: 'La messagerie sécurisée est très utile pour échanger avec mes patients avant et après les rendez-vous',
      name: 'Dr. Nezha Elhattab Elibrahimi',
      role: 'Pédiatre',
      avatar: '/images/nezha.jpeg'
    }
  ];

  constructor(private router: Router) {}

  navigateToDomain(domainId: number): void {
    this.router.navigate(['/domain', domainId]);
  }
}