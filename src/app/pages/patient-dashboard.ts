import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-dashboard.html',
  styleUrls: ['./patient-dashboard.css']
})
export class PatientDashboardComponent {
  activeSection: string = 'none';

   constructor(private router: Router) {}
  showSection(section: string) {
    this.activeSection = section;
  }
   logout() {
    // Optionnel : tu peux vider localStorage/sessionStorage ici si besoin
    this.router.navigate(['/home']);
  }
 

}

