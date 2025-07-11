import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appComponent } from './app/app';
import { routes } from './app/app.routes';

bootstrapApplication(appComponent, 
 {
  providers: [
     

    provideRouter(routes)
  ]
}).catch(err => console.error(err));