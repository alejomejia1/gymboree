import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../models/user'; 
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
 
  user = {} as User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth, private alertCtrl: AlertController,) {
  }
 
 async register(user: User) {
 try {
 if(this.user.password !== this.user.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Your password and your re-entered password does not match each other.',
        buttons: ['OK']
      });
      alert.present();
      return;
    }
  const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
  console.log(result);

   if(result) {
    this.navCtrl.setRoot('ProfilePage');
}
}

 catch (e) {
    console.error(e);
  }
 }

}
