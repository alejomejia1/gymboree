import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireObject } from 'angularfire2/database';
import { Reserva } from './../../models/reserva';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-reservado',
  templateUrl: 'reservado.html',
})
export class ReservadoPage {

  reservaData: Observable<any>;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, private toast: ToastController, public navCtrl: NavController) {
  }
 
 ionViewWillLoad() {
   this.afAuth.authState.subscribe(data => {
    if (data && data.email && data.uid) {
      this.toast.create({
       message: `Welcome to Gymbo-class`,
       duration: 2000
      });
      this.reservaData = this.afDatabase.object(`reserva/${data.uid}`).valueChanges()
    }
    else {
     this.toast.create({
      message: `Could not find authentication details.`,
      duration: 2000
     });
    }
   })
 }

goPage() {
	this.navCtrl.push('ReservaPage');
}

 signOut(){
    this.afAuth.auth.signOut().then(() => {
      this.navCtrl.setRoot('LoginPage');
    }
    );
    }

}
