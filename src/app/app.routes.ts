import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './auth/register/register-patient.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { HealthDomainComponent } from './domains/health-domain/health-domain.component';
import { LawDomainComponent } from './domains/law-domain/law-domain.component';
<<<<<<< HEAD
import { EstheticDomainComponent } from './domains/esthetic-domain/esthetic-domain.component';
import { DecoDomainComponent } from './domains/decor-domain/deco-domain.component';
import { BienetreDomainComponent } from './domains/bienetre-domain/bienetre-domain.component';
=======
import { PatientDashboardComponent } from './pages/patient-dashboard';
>>>>>>> c123e84ceaae8c2ceae506edea385d87f6a0be7d

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Accueil - Téléconsultation'
  },
<<<<<<< HEAD
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
=======
  { path: 'auth/register', component: RegisterPatientComponent },
  { path: 'auth/verify-email', component: VerifyEmailComponent },
    { path: 'domains/health-domain', component: HealthDomainComponent },
  { path: 'domains/law-domain', component: LawDomainComponent },
   {
  path: 'dashboard-patient',
  loadComponent: () => import('./pages/patient-dashboard').then(m => m.PatientDashboardComponent)
},

  { path: '', redirectTo: '/auth/verify-email', pathMatch: 'full' }

];

>>>>>>> c123e84ceaae8c2ceae506edea385d87f6a0be7d
