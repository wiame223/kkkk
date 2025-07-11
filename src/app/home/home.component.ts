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
  showDomains = false;

  domains = [
    {
      id: 'health-domain',
      name: 'Santé',
      icon: 'fa fa-heartbeat',
      description: 'Médecins généralistes et spécialistes pour vos besoins de santé',
      image: '/images/team.jpg'
    },
    {
      id: 'law-domain',
      name: 'Droit',
      icon: 'fa fa-balance-scale',
      description: 'Avocats et juristes pour vos questions légales',
      image: '/images/khalid.jpg'
    },
    {
      id: 'esthetic-domain',
      name: 'Esthétique',
      icon: 'fa fa-scissors',
      description: 'Professionnels de beauté et bien-être',
      image: '/images/team.jpg'
    },
    {
      id: 'education-domain',
      name: 'Éducation',
      icon: 'fa fa-graduation-cap',
      description: 'Professeurs, coachs scolaires et accompagnement pédagogique.',
      image: '/images/domaines/education.jpg'
    },
    {
      id: 'bienetre-domain',
      name: 'Bien-être',
      icon: 'fa fa-leaf',
      description: 'Sophrologues, naturopathes, hypnothérapeutes, etc.',
      image: '/images/domaines/bien-etre.jpg'
    },
    {
      id: 'decor-domain',
      name: 'Architecture d\'intérieur',
      icon: 'fa fa-home',
      description: 'Experts en design et aménagement intérieur pour vos espaces de vie',
      image: '/images/architecture-interieur.jpg'
    }
  ];

  testimonials = [
    {
      text: 'J\'ai trouvé un excellent dermatologue en quelques minutes.',
      name: 'Sophie Martin',
      role: 'Patient',
      avatar: '/images/sopihie.jpeg'
    },
    {
      text: 'Cette plateforme me permet de gérer facilement mon planning.',
      name: 'Dr. El Yamani Khalid',
      role: 'Médecin généraliste',
      avatar: '/images/khalid.jpeg'
    },
    {
      text: 'Messagerie sécurisée très utile pour échanger avec mes patients.',
      name: 'Dr. Nezha Elhattab Elibrahimi',
      role: 'Pédiatre',
      avatar: '/images/nezha.jpeg'
    }
  ];

  constructor(private router: Router) {}


  toggleDomains() {
    this.showDomains = !this.showDomains;
  }

 navigateToDomain(domainId: string): void {
  this.router.navigate(['/domains', domainId]);
  this.showDomains = false;
}


}