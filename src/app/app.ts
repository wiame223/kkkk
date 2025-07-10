import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
       CommonModule,
    RouterModule,  
    ReactiveFormsModule
  ],
  template: `
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class appComponent {}
