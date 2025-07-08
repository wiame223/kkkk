import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  template: `
    <div class="container py-5 text-center">
      <h2>Vérifiez votre adresse email</h2>
      <p>Un email de vérification vous a été envoyé.<br>Veuillez cliquer sur le lien dans cet email pour activer votre compte.</p>
      <button class="btn btn-primary mt-3" (click)="goToLogin()">Retour à la connexion</button>
    </div>
  `
})
export class VerifyEmailComponent {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']); // adapte selon ta route login
  }
}
