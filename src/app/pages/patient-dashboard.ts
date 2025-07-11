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
  showLogoutConfirm = false;

  constructor(private router: Router) {}

  confirmLogout() {
    this.showLogoutConfirm = true;
  }

  cancelLogout() {
    this.showLogoutConfirm = false;
  }

  logout() {
    console.log("Déconnexion confirmée");
    this.showLogoutConfirm = false;
    this.router.navigateByUrl(''); // ou '/' selon ton routing
  }

  showSection(section: string) {
    this.activeSection = section;
  }
}
