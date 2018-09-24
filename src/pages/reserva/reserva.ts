import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {

  formularioUsuario: FormGroup;

  constructor(private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, private fb: FormBuilder, private alertCtrl: AlertController)
   {
     this.buildForm();
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
     ciudad:['',[Validators.required,Validators.maxLength(19)]],
     correo:['',[Validators.required,Validators.email]],
     reserva:['',Validators.required],
     horario:['',Validators.required],
     servicio:['',Validators.required],
     nivel:['',Validators.required],
   });

  }

  

 


}