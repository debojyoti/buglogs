import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpCallsService } from './http-calls.service';
import { auth } from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthManagerService {

  constructor(
    private afAuth: AngularFireAuth,
    private httpCallsService: HttpCallsService
  ) { }

  public loginWithGoogle() {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(googleResponse => {
        this.afAuth.auth.currentUser.getIdToken()
          .then(idToken => {
            this.httpCallsService.exchangeAuthTokenFromFirebase(idToken)
              .then(finalAuthtResponse => {
                // Store it
                this.updateAuthData(finalAuthtResponse);
                resolve(true);
              })
          })
      }).catch(err => {
        // Login error
        console.log(err);
        reject(err);
      });
    })
  }

  private updateAuthData(data) {
    localStorage.setItem('auth', JSON.stringify(data));
  }
}
