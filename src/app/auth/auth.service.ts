// auth.service.ts
import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root' // permet à Angular de l'injecter automatiquement partout
})
export class AuthService {
  constructor(private auth: Auth) {}

  async register(email: string, password: string) {
    const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
    await sendEmailVerification(userCredential.user);
    return userCredential;
  
  }

}
