import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

  ngOnInit() { }


  _loginWithGoogle() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(googleResponse => {
        // Successfully logged in
        console.log(googleResponse);
        // Add your logic here

      }).catch(err => {
        // Login error
        console.log(err);
      });
  }
}
