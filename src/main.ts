import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appComponent } from './app/app';
import { routes } from './app/app.routes';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAuGatN1GHCG5qZZIJULCKXgoJtDerdxzk",
  authDomain: "j2ee-project-935e9.firebaseapp.com",
  projectId: "j2ee-project-935e9",
  storageBucket: "j2ee-project-935e9.appspot.com",
  messagingSenderId: "635289259299",
  appId: "1:635289259299:web:cfbdf60029a5908d2ed096"
  // complète avec les infos dans ta console Firebase
};

bootstrapApplication(appComponent, 
 {
  providers: [
     provideFirebaseApp(() => initializeApp(firebaseConfig)),
     provideAuth(() => getAuth()),

    provideRouter(routes)
  ]
}).catch(err => console.error(err));