import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  template: `<router-outlet></router-outlet>`,
  styles: []
})
export class appComponent implements OnInit {
  constructor(private auth: Auth, private router: Router) {}

  ngOnInit(): void {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        await user.reload(); // recharge les infos (sinon emailVerified reste false)
        if (user.emailVerified) {
          console.log("✅ Email vérifié, redirection vers dashboard-patient");
          this.router.navigate(['/dashboard-patient']);
        } else {
          console.log("❌ Email NON vérifié");
        }
      }
    });
  }
}
