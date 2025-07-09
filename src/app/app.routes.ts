import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './auth/register/register-patient.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component';
import { HealthDomainComponent } from './domains/health-domain/health-domain.component';


export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    title: 'Accueil - Téléconsultation'
  },
  { path: 'auth/register', component: RegisterPatientComponent },
  { path: 'auth/verify-email', component: VerifyEmailComponent },
   { path: 'domains/:id', component: HealthDomainComponent }


  


];