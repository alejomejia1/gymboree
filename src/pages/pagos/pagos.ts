import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AngularFireAuth } from 'angularfire2/auth';
import { FacturaPage } from '../factura/factura';
import { ValorPage } from '../valor/valor';
import { VencimientoPage } from '../vencimiento/vencimiento';
import { FechaPage } from '../fecha/fecha';

@IonicPage()
@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
})
export class PagosPage {

 alumno: Array<any>;


  constructor(
  public navParams: NavParams,
  public restProvider: RestProvider,
  private modal: ModalController,
  private auth: AngularFireAuth) { 

 this.getAlumno();
  }

   getAlumno() {
    this.restProvider.getAlumno(1)
    .then(data => {
      this.alumno = Object.assign(data.Pago);
      console.log(data);    
      console.log(this.alumno);
    
     })
  }

   signOut(){

    this.auth.auth.signOut();
  }

  openModal(){
   
   const myModal = this.modal.create(FacturaPage);
   myModal.present();
  }
  openValor(){
   const myModal = this.modal.create(ValorPage);
   myModal.present();
  }
  
  openVencimiento(){
   const myModal = this.modal.create(VencimientoPage);
   myModal.present();
  }

  openFecha(){
   const myModal = this.modal.create(FechaPage);
   myModal.present();
  }





}
