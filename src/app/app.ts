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
      await user.reload();
      if (user.emailVerified) {
        const currentPath = this.router.url;

        // Routes publiques : page d'accueil ou auth
        const publicPaths = ['/', '/auth/register', '/auth/verify-email'];

        if (!publicPaths.includes(currentPath)) {
          console.log('✅ Email vérifié. Navigation conservée sur :', currentPath);
          return;
        }

        // ⛔ Si déjà sur Home ou auth, on ne redirige pas
        if (currentPath === '/') {
          console.log('✅ Email vérifié, mais déjà sur / => on NE redirige PAS');
          return;
        }

        // ✅ Sinon redirection vers dashboard
        console.log('➡️ Redirection vers /dashboard-patient');
        this.router.navigate(['/dashboard-patient']);
      }
    }
  });
}
}