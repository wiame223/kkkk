import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-practitioner-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './practitioner-register.component.html',
  styleUrls: ['./practitioner-register.component.css']
})
export class PractitionerRegisterComponent {
  registerForm: FormGroup;
  specialties = ['Médecin', 'Dentiste', 'Avocat', 'Architecte']; // Adaptez selon vos besoins
  isLoading = false;
  errorMessage: string | null = null; // Propriété pour les messages d'erreur globaux
  successMessage: string | null = null;
selectedFile: File | null = null;
fileError: string | null = null;

onFileSelected(event: Event) {
  const fileInput = event.target as HTMLInputElement;
  if (fileInput.files && fileInput.files.length > 0) {
    const file = fileInput.files[0];
    const validTypes = ['application/pdf', 'image/jpeg', 'image/png'];
    if (!validTypes.includes(file.type)) {
      this.fileError = 'Format de fichier non valide. Veuillez choisir un PDF, JPG ou PNG.';
      this.selectedFile = null;
    } else {
      this.fileError = null;
      this.selectedFile = file;
    }
  }
}

 constructor(
  private fb: FormBuilder,
  private router: Router
) {
  this.registerForm = this.fb.group({
    lastName: ['', Validators.required],
    firstName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    specialty: ['', Validators.required],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{9}$/)]],
    gender: ['', Validators.required],
    source: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
}

  onSubmit() {
    this.errorMessage = null; // Réinitialise le message d'erreur
    this.successMessage = null;

    if (this.registerForm.valid) {
      this.isLoading = true;
      
      // Simule un appel API
      setTimeout(() => {
        this.isLoading = false;
        this.successMessage = 'Inscription réussie! Redirection en cours...';
        
        // Redirection après 2 secondes
        setTimeout(() => {
          this.router.navigate(['/dashboard-praticien']);
        }, 2000);
      }, 1500);
    } else {
      this.errorMessage = 'Veuillez corriger les erreurs dans le formulaire.';
      this.markFormGroupTouched(this.registerForm);
    }
  }

  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();
      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  get f() { return this.registerForm.controls; }
}