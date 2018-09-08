import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Reserva } from '../../models/reserva';
import { AngularFireDatabase } from 'angularfire2/database';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {

  reserva = {} as Reserva;
  formularioUsuario: FormGroup;

  constructor(private afAuth: AngularFireAuth, private afDatabase: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private alertCtrl: AlertController)
   {
     this.buildForm();
  }

  addTransaction() {
   this.afAuth.authState.take(1).subscribe(auth => {
       this.afDatabase.object(`reserva/${auth.uid}`).set(this.reserva)
         .then(() => this.navCtrl.setRoot('ReservadoPage'));
     })
  }

  saveData(){
    console.log(this.formularioUsuario.value);
    const alert = this.alertCtrl.create({
      title: "Datos enviados",
      message: "La reserva fue añadida.",
      buttons: ['Ok']
    });
    alert.present()
    this.buildForm();
  }

  buildForm(){

   this.formularioUsuario = this.fb.group({
     nombre:['',[Validators.required,Validators.maxLength(30)]],
     ciudad:['',[Validators.required,Validators.maxLength(19)]],
     direccion:['',[Validators.required,Validators.minLength(5)]],
     correo:['',[Validators.required,Validators.email]],
     celular:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
     niño:['',[Validators.required,Validators.maxLength(30)]],
     edad:['',Validators.required],
     reserva:['',Validators.required]
   });

  }

  listoo(){
  this.navCtrl.push('ReservadoPage');
  }


}