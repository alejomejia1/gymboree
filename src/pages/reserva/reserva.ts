import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';  


@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {
  
  data: Observable<any[]>;
  ref: AngularFireList<any>;

  reservas = [
    {value: 0, name: 'Fiesta De Cumpleaños'},
    {value: 1, name: 'Clase Gratuita'}
  ];

  transaction = {
  nombre: '',
  nacimiento: '',
  ciudad: '',
  celular: '',
  reserva: 1 
 }

 @ViewChild('valueBarsCanvas') valueBarCanvas;
 valueBarsChart: any;

 charData = null;
 
  constructor(public navCtrl: NavController, private db: AngularFireDatabase, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    this.ref = this.db.list('reservas', ref => ref.orderByChild('reserva'));

    this.ref.valueChanges().subscribe(result => {
      if (this.charData) {
        this.updateCharts(result);
      } else {
        this.createCharts(result);
      }
    });
  }

  addTransaction() {
   this.ref.push(this.transaction).then(() => {
     this.transaction = {
        nombre: '',
        nacimiento: '',
        ciudad: '',
        celular: '',
        reserva: 0
     };

     let toast = this.toastCtrl.create({
       message: 'Nueva reserva añadida',
       duration: 3000
     });
     toast.present();
   });
  }

  createCharts(data) {

  }

  updateCharts(data){

  }
 
}
