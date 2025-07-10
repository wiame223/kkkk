import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {
  verifyForm: FormGroup;
  message = '';
  error = '';
  verified = false;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.verifyForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.checkVerification(); // 🔁 Appel automatique dès chargement du composant
  }

  async checkVerification() {
    try {
      const isVerified = await this.authService.isEmailVerified();
      if (isVerified) {
        this.verified = true;
        this.message = 'Votre email est vérifié. Redirection en cours...';
        setTimeout(() => this.router.navigate(['/dashboard']), 2000); // Redirection après 2 sec
      } else {
        this.error = 'Votre email n’est pas encore vérifié. Veuillez cliquer sur le lien envoyé.';
      }
    } catch (err: any) {
      this.error = err.message || 'Une erreur est survenue lors de la vérification.';
    }
  }

  async onSubmit() {
    this.message = '';
    this.error = '';
    if (this.verifyForm.valid) {
      try {
        const { email, password } = this.verifyForm.value;
        await this.authService.resendVerificationEmail(email, password);
        this.message = 'Email de vérification renvoyé avec succès.';
      } catch (err: any) {
        this.error = err.message;
      }
    }
  }
}
