import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService, LoginRequest } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
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

      // Appeler le service d'authentification
      const loginRequest: LoginRequest = { email, password };
      
      this.authService.login(loginRequest).subscribe({
        next: (response) => {
          console.log('Login successful:', response);
          // Stocker le token si nécessaire
          localStorage.setItem('token', response.token);
          localStorage.setItem('userRole', profile);
          
          // Redirection vers dashboard en fonction du profil choisi
          switch (profile) {
            case 'admin':
              this.router.navigate(['/dashboard-admin']);
              break;
            case 'patient':
              this.router.navigate(['/dashboard-patient']);
              break;
            case 'praticien':
              this.router.navigate(['/dashboard-praticien']);
              break;
            default:
              this.router.navigate(['/']);
              break;
          }
        },
        error: (error) => {
          console.error('Login failed:', error);
          // Gérer les erreurs d'authentification ici
          alert('Échec de la connexion. Veuillez vérifier vos identifiants.');
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
}
