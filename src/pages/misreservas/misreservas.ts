import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-misreservas',
  templateUrl: 'misreservas.html',
})
export class MisreservasPage {

  reserva: any;

  tablestyle = 'bootstrap';

  constructor(public restProvider: RestProvider, private view: ViewController, public navParams: NavParams, private alertCtrl: AlertController) {
  this.getReserva();
  }

 closeModal(){
 this.view.dismiss();
 }

 getReserva() {
    this.restProvider.getReserva(1)
    .then((data:any) => {
      this.reserva = Object.assign(data.reserva.Reserva, data.reserva.Servicio, data.reserva.Nivel);
      console.log(data);    
      console.log(this.reserva); 
     })
  }

 switchStyle() {
 if(this.tablestyle == 'dark'){
  this.tablestyle = 'bootstrap';
 } else{
   this.tablestyle = 'dark';
 }
}



}
