import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterClientComponent } from './auth/register/register-client.component';
import { HealthDomainComponent } from './domains/health-domain/health-domain.component';
import { LawDomainComponent } from './domains/law-domain/law-domain.component';
import { ClientDashboardComponent } from './pages/client-dashboard';
import { DecoDomainComponent } from './domains/decor-domain/deco-domain.component';
import { EducationDomainComponent } from './domains/education-domain/education-domain.component';
import { BienetreDomainComponent } from './domains/bienetre-domain/bienetre-domain.component';
import { EstheticDomainComponent } from './domains/esthetic-domain/esthetic-domain.component';
import { PractitionerRegisterComponent } from './auth/register/practitioner-register.component';
import { LoginComponent } from './auth/login/login';
import { PraticienDashboardComponent } from './pages/praticien-dashboard';
import { AdminDashboardComponent } from './pages/admin-dashboard';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Accueil - Téléconsultation'
  },
  { path: 'auth/register', loadComponent: () => import('./auth/register/register-client.component').then(m => m.RegisterClientComponent) },

    { path: 'domains/health-domain', component: HealthDomainComponent },
  { path: 'domains/law-domain', component: LawDomainComponent },
  { path: 'domains/decor-domain', component: DecoDomainComponent },
  { path: 'domains/education-domain', component: EducationDomainComponent },
  { path: 'domains/bienetre-domain', component: BienetreDomainComponent },
  { path: 'domains/esthetic-domain', component: EstheticDomainComponent },
  { path : 'auth/login' , component: LoginComponent},
 {
  path: 'dashboard-client',
  loadComponent: () => import('./pages/client-dashboard').then(m => m.ClientDashboardComponent)
},

{
  path: 'dashboard-praticien',
  loadComponent: () => import('./pages/praticien-dashboard').then(m => m.PraticienDashboardComponent)
},

{
  path: 'dashboard-admin',
  loadComponent: () => import('./pages/admin-dashboard').then(m => m.AdminDashboardComponent)
},

{
  path: 'register-practitioner',
  loadComponent: () => import('./auth/register/practitioner-register.component').then(m => m.PractitionerRegisterComponent)
}

];

