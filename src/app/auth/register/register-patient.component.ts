import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {
  registerForm!: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],  // 9 chiffres exactement
      birthDate: ['', Validators.required],
      birthCity: ['', Validators.required],
      gender: ['', Validators.required],
      note: [''],
      source: ['', Validators.required],
      insurance: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit(): Promise<void> {
    console.log('Form submitted');
    if (this.registerForm.valid) {
      try {
        const { email, password } = this.registerForm.value;
        console.log('onSubmit(): appel AuthService.register avec', email);
        const user = await this.authService.register(email, password);
        console.log('Utilisateur créé:', user);
        // Redirection après inscription réussie
        this.router.navigate(['/auth/verify-email']);
      } catch (error: any) {
        console.error('Erreur dans onSubmit():', error);
        this.errorMessage = error.message || 'Une erreur est survenue';
      }
    } else {
      this.registerForm.markAllAsTouched();  // Marque tous les champs comme touchés pour afficher erreurs
      console.warn('Formulaire invalide');
    }
  }
}
