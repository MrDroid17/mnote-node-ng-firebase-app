import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public angularFireAuth: AngularFireAuth,
  private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then(user => {
      this.router.navigate(['dashboard']);
    });
  }
  logout() {
    this.angularFireAuth.auth.signOut();
  }

}
