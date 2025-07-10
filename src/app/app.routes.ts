import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './auth/register/register-patient.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { HealthDomainComponent } from './domains/health-domain/health-domain.component';
import { LawDomainComponent } from './domains/law-domain/law-domain.component';
import { EstheticDomainComponent } from './domains/esthetic-domain/esthetic-domain.component';
import { DecoDomainComponent } from './domains/decor-domain/deco-domain.component';
import { BienetreDomainComponent } from './domains/bienetre-domain/bienetre-domain.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Accueil - Téléconsultation'
  },
  { 
    path: 'auth/register', 
    component: RegisterPatientComponent,
    title: 'Inscription Patient'
  },
  { 
    path: 'auth/verify-email', 
    component: VerifyEmailComponent,
    title: 'Vérification Email'
  },
  { 
    path: 'domains/sante', 
    component: HealthDomainComponent,
    title: 'Domaine Santé'
  },
  { 
    path: 'domains/juridique', 
    component: LawDomainComponent,
    title: 'Domaine Juridique'
  },
  { 
    path: 'domains/esthetique', 
    component: EstheticDomainComponent,
    title: 'Domaine Esthétique'
  },
  { 
    path: 'domains/decoration', 
    component: DecoDomainComponent,
    title: 'Décoration Intérieure'
  },
  { 
    path: 'domains/bien-etre', 
    component: BienetreDomainComponent,
    title: 'Bien-être & Coaching'
  },
  { 
    path: '**', 
    redirectTo: '',
    title: 'Page non trouvée'
  }
];