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
  { path: 'auth/register', component: RegisterPatientComponent },
  { path: 'auth/verify-email', component: VerifyEmailComponent },
    { path: 'domains/health-domain', component: HealthDomainComponent },
  { path: 'domains/law-domain', component: LawDomainComponent },
   { path: 'domains/esthetic-domain', component: EstheticDomainComponent },
   { path: 'domains/deco-domain', component: DecoDomainComponent},
   { path: 'domains/bienetre-domain', component: BienetreDomainComponent},
   



   

   
  // autres domaines...
  { path: '**', redirectTo: 'domains/health-domain' }  
 , { path: '**', redirectTo: 'domains/esthetic-domain' } ,
 { path: '**', redirectTo: 'domains/deco-domain' },
 { path: '**', redirectTo: 'domains/bienetre-domain' },
 

  
  // route fallback
];

