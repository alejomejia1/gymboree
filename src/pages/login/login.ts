import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

loginData = {
  email: '',
  password: ''
}
  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams,
  private afAuth: AngularFireAuth,
  private toastCtrl: ToastController
  ) { }

  login(){
 this.afAuth.auth.signInWithEmailAndPassword(this.loginData.email, 
 this.loginData.password)
    .then(auth => {
    // Do custom things with auth

  })

   .catch(err => {
      // Handle error
      let toast = this.toastCtrl.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }
  register(){
  this.navCtrl.push(RegisterPage, { email: this.loginData.email
    });
  }

}
