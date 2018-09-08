import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Profile } from './../../models/profile';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
  profileData: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams) {
  }

 ionViewWillLoad() {
   this.afAuth.authState.subscribe(data => {
    if (data && data.email && data.uid) {
      this.toast.create({
       message: `Welcome to Gymbo-class`,
       duration: 2000
      });

      this.profileData = this.afDatabase.object(`profile/${data.uid}`).valueChanges()
    }
    else {
     this.toast.create({
      message: `Could not find authentication details.`,
      duration: 2000
     });
    }
   })
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    }
    );
    }

}
