import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

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
  fileError: string = '';
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      birthDate: ['', Validators.required],
      birthCity: ['', Validators.required],
      gender: ['', Validators.required],
      note: [''],
      source: ['', Validators.required],
      insurance: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      this.fileError = 'Aucun fichier sélectionné.';
      this.selectedFile = null;
      return;
    }

    const file = input.files[0];
    const allowedTypes = ['application/pdf', 'image/jpeg', 'image/png'];

    if (!allowedTypes.includes(file.type)) {
      this.fileError = 'Format invalide. Veuillez télécharger un fichier PDF, JPG ou PNG.';
      this.selectedFile = null;
      return;
    }

    this.fileError = '';
    this.selectedFile = file;
  }

  onSubmit(): void {
  if (this.registerForm.valid) {
    const formData = new FormData();

    // Ajout des données du formulaire (conversion explicite)
    Object.entries(this.registerForm.value).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    // Ajout du fichier s’il existe
    if (this.selectedFile) {
      formData.append('file', this.selectedFile);
    }

    console.log('✅ Données prêtes à être envoyées au backend :', formData);

    // TODO : appel API backend ici

    this.router.navigate(['/dashboard-patient']);
  } else {
    if (!this.selectedFile) {
      this.fileError = 'La carte professionnelle est requise.';
    }
  }
}
}