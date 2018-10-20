import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ReservaPage } from '../reserva/reserva';
import { LoginPage } from '../login/login';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-reservado',
  templateUrl: 'reservado.html',
})
export class ReservadoPage {

  reserva: any;
  
  

  constructor(private auth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public restProvider: RestProvider) {
  this.getReserva();
  }
 

goPage() {
	this.navCtrl.push(ReservaPage);
}

  signOut(){

    this.auth.auth.signOut();
  }

  getReserva() {
    this.restProvider.getReserva(1)
    .then((data:any) => {
      this.reserva = Object.assign(data.reserva.Reserva, data.reserva.Servicio, data.reserva.Nivel);
      console.log(data);    
      console.log(this.reserva);
    
     })
  }



}
