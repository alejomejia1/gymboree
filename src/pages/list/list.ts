import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth) {
 
  }

  signOut(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    }
    );
    }
}
