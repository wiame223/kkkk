import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      profile: ['', Validators.required],  // <- contrôle profil ajouté
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { profile, email, password } = this.loginForm.value;
      console.log('Profil:', profile);
      console.log('Email:', email);
      console.log('Mot de passe:', password);

      // TODO: appeler un service d'authentification ici

      // Simuler redirection vers dashboard en fonction du profil choisi
      switch (profile) {
        case 'admin':
          this.router.navigate(['/admin-dashboard']);
          break;
        case 'patient':
          this.router.navigate(['/patient-dashboard']);
          break;
        case 'praticien':
          this.router.navigate(['/praticien-dashboard']);
          break;
        default:
          this.router.navigate(['/']);
          break;
      }
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
