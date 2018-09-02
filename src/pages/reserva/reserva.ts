import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from 'angularfire2/database/interfaces';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';  
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-reserva',
  templateUrl: 'reserva.html',
})
export class ReservaPage {
  
  formularioUsuario:FormGroup;
  data: Observable<any[]>;
  ref: AngularFireList<any>;

  reservas = [
    {value: 0, name: 'Fiesta De Cumpleaños'},
    {value: 1, name: 'Clase Gratuita'}
  ];

  transaction = {
  nombre: '',
  nombre_nino: '',
  nacimiento: '',
  ciudad: '',
  direccion: '',
  correo: '',
  celular: '',
  reserva: 0,
  fecha_reserva: ''
 }

 @ViewChild('valueBarsCanvas') valueBarCanvas;
 valueBarsChart: any;

 charData = null;
 
  constructor(public navCtrl: NavController,
              private db: AngularFireDatabase, 
              private toastCtrl: ToastController, 
              public fb: FormBuilder
  ) { 
   this.buildForm();
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
        nombre_nino: '',
        nacimiento: '',
        ciudad: '',
        direccion: '',
        correo: '',
        celular: '',
        reserva: 0,
        fecha_reserva: ''
     };

     let toast = this.toastCtrl.create({
       message: 'Nueva reserva añadida',
       duration: 3000
     });
     toast.present();
   });
  }

  createCharts(data) { }

  updateCharts(data){ }

  saveData(){
    console.log(this.formularioUsuario.value);
  }

  buildForm() {
   
    this.formularioUsuario = this.fb.group({
      nombre:['',[Validators.required, Validators.maxLength(30)]],
      nombre_nino:['',[Validators.required, Validators.maxLength(30)]],
      nacimiento:['', Validators.required],
      ciudad:['', Validators.required],
      direccion:['', [Validators.required, Validators.maxLength(100)]],
      correo:['', Validators.email],
      celular:['',[Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
      reserva:[0, Validators.required],
      fecha_reserva:['', Validators.required]

    }); 

   }

 
}
