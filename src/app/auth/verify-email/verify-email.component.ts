import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // pour *ngIf
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  standalone: true,           // <-- Ajoute cette ligne si tu utilises standalone components
  imports: [CommonModule, ReactiveFormsModule],  // <-- importe les modules nécessaires ici
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent {
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

  async checkVerification() {
    try {
      const isVerified = await this.authService.isEmailVerified();
      if (isVerified) {
        this.verified = true;
        setTimeout(() => this.router.navigate(['/dashboard']), 2000);
      } else {
        this.error = 'Votre email n\'est pas encore vérifié. Veuillez cliquer sur le lien dans l\'email.';
      }
    } catch (err: any) {
      this.error = err.message;
    }
  }
}
