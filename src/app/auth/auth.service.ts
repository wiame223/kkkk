import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword, User } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) {}

  async register(email: string, password: string): Promise<User> {
  console.log('register(): création utilisateur avec email:', email);
  const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
  try {
    console.log('register(): avant sendEmailVerification');
    await sendEmailVerification(userCredential.user);
    console.log('register(): email de vérification envoyé');
  } catch (error) {
    console.error('Erreur lors de l\'envoi du mail de vérification:', error);
    throw error;  // on renvoie l'erreur pour la gérer en amont
  }
  return userCredential.user;
}


  async resendVerificationEmail(email: string, password: string): Promise<void> {
    // Il faut se connecter pour renvoyer mail
    const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
    if (userCredential.user.emailVerified) {
      throw new Error("Email déjà vérifié");
    }
    await sendEmailVerification(userCredential.user);
    await this.auth.signOut(); // déconnexion après
  }

  async isEmailVerified(): Promise<boolean> {
    const user = this.auth.currentUser;
    if (user) {
      await user.reload();
      return user.emailVerified;
    }
    return false;
  }


}
