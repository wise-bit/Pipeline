import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = '';
  password = '';

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  // abcdefg + @gmail.com
  async login() {
    const { username, password } = this;
    // alert(username);
    try {
      const res = await this.afAuth.signInWithEmailAndPassword(username + '@socializer.com', password);
    } catch (err) {
      console.dir(err);
      if (err.code === 'auth/user-not-found') {
        console.log('user not found!');
      }
    }
  }

}
