import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './auth/register/register-patient.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { HealthDomainComponent } from './domains/health-domain/health-domain.component';
import { LawDomainComponent } from './domains/law-domain/law-domain.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Accueil - Téléconsultation'
  },
  { path: 'auth/register', component: RegisterPatientComponent },
  { path: 'auth/verify-email', component: VerifyEmailComponent },
    { path: 'domains/health-domain', component: HealthDomainComponent },
  { path: 'domains/law-domain', component: LawDomainComponent },
  // autres domaines...
  { path: '**', redirectTo: 'domains/health-domain' }  // route fallback
];

