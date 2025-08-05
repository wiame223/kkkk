import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appComponent } from './app/app';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http'; 

bootstrapApplication(appComponent, 
 {
  providers: [
     

    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));