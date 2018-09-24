import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 
 registerData = {
    email: '',
    password: '',
    passwordRetyped: ''
 }

  constructor(
  public navCtrl: NavController, 
  public navParams: NavParams, 
  private afAuth: AngularFireAuth, 
  private alertCtrl: AlertController,) {
 
   this.registerData.email = this.navParams.get('email');
  }
 
 register() {
    if(this.registerData.password !== this.registerData.passwordRetyped) {
      let alert = this.alertCtrl.create({
       title: 'Error',
        message: 'Your password and your re-entered password does not match each other.',
      buttons: ['OK']
      });
      alert.present();
      return;
    }

    // Firebase Signup Code
    this.afAuth.auth.createUserWithEmailAndPassword(this.registerData.email, this.registerData.password)
    .then(auth => {
      // Could do something with the Auth-Response
      console.log(auth);
    })

     .catch(err => {
      // Handle error
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
  }

}
