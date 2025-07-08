import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [CommonModule, RouterModule] 
})

export class HomeComponent {
  constructor(private router: Router) {}

  domains = [
    {
      id: 1,
      name: 'Santé',
      icon: 'fa fa-heartbeat',
      description: 'Médecins généralistes et spécialistes pour vos besoins de santé'
    },
    {
      id: 2,
      name: 'Droit',
      icon: 'fa fa-balance-scale',
      description: 'Avocats et juristes pour vos questions légales'
    },
    {
      id: 3,
      name: 'Esthétique',
      icon: 'fa fa-magic',
      description: 'Experts beauté et bien-être'
    }
    // Ajoute d'autres domaines si nécessaire
  ];

  testimonials = [
    {
      text: 'J\'ai trouvé un excellent dermatologue en quelques minutes.',
      name: 'Sophie Martin',
      role: 'Patient',
      avatar: 'assets/images/avatar1.jpg'
    },
    {
      text: 'Je peux gérer mon planning facilement grâce à la plateforme.',
      name: 'Dr. Ahmed Benali',
      role: 'Médecin généraliste',
      avatar: 'assets/images/avatar2.jpg'
    },
    {
      text: 'La messagerie est idéale pour garder le lien avec mes patients.',
      name: 'Dr. Fatima Zahra',
      role: 'Pédiatre',
      avatar: 'assets/images/avatar3.jpg'
    }
  ];

  navigateToDomain(domainId: number): void {
    this.router.navigate(['/domain', domainId]);
  }
}
