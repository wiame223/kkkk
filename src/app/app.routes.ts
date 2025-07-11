import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './auth/register/register-patient.component';
import { HealthDomainComponent } from './domains/health-domain/health-domain.component';
import { LawDomainComponent } from './domains/law-domain/law-domain.component';
import { PatientDashboardComponent } from './pages/patient-dashboard';
import { DecoDomainComponent } from './domains/decor-domain/deco-domain.component';
import { EducationDomainComponent } from './domains/education-domain/education-domain.component';
import { BienetreDomainComponent } from './domains/bienetre-domain/bienetre-domain.component';
import { EstheticDomainComponent } from './domains/esthetic-domain/esthetic-domain.component';
import { PractitionerRegisterComponent } from './auth/register/practitioner-register.component';
import { LoginComponent } from './auth/login/login';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Accueil - Téléconsultation'
  },
  { path: 'auth/register', loadComponent: () => import('./auth/register/register-patient.component').then(m => m.RegisterPatientComponent) },

    { path: 'domains/health-domain', component: HealthDomainComponent },
  { path: 'domains/law-domain', component: LawDomainComponent },
  { path: 'domains/decor-domain', component: DecoDomainComponent },
  { path: 'domains/education-domain', component: EducationDomainComponent },
  { path: 'domains/bienetre-domain', component: BienetreDomainComponent },
  { path: 'domains/esthetic-domain', component: EstheticDomainComponent },
  { path : 'auth/login' , component: LoginComponent},
 {
  path: 'dashboard-patient',
  loadComponent: () => import('./pages/patient-dashboard').then(m => m.PatientDashboardComponent)
},

{
  path: 'register-practitioner',
  loadComponent: () => import('./auth/register/practitioner-register.component').then(m => m.PractitionerRegisterComponent)
}

];

