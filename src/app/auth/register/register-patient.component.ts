import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


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

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      birthDate: ['', Validators.required],
      birthCity: ['', Validators.required],
      gender: ['', Validators.required],
      note: [''],
      source: [''],
      insurance: [''],
      password: ['', [Validators.required, Validators.minLength(6)]], // ajoute champ mdp
    });
  }



 async onSubmit(): Promise<void> {
  console.log('Form submitted'); // <- Test

  if (this.registerForm.valid) {
    try {
      const { email, password } = this.registerForm.value;
      await this.authService.register(email, password);

      this.router.navigate(['/auth/verify-email']);
    } catch (error: any) {
      this.errorMessage = error.message;
    }
  } else {
    this.registerForm.markAllAsTouched();
  }
}
}

