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

  onSubmit(): void {
    console.log('Formulaire soumis');
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      console.log('✅ Données à envoyer au backend :', formData);

      // ⚠️ Ici tu peux appeler ton propre backend via HttpClient, ex :
      // this.http.post('/api/register', formData).subscribe(...)

      // Temporaire : redirection manuelle
      this.router.navigate(['/dashboard-patient']);
    }
  }

}