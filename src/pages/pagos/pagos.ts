import { Component } from '@angular/core';
import { IonicPage, NavParams, ModalController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AngularFireAuth } from 'angularfire2/auth';
import { MispagosPage } from '../mispagos/mispagos';

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
    .then((data:any) => {
      this.alumno = Object.assign(data.Pago);
      console.log(data);    
      console.log(this.alumno);
    
     })
  }

   signOut(){

    this.auth.auth.signOut();
  }

  openMispagos(){
   const myModal = this.modal.create(MispagosPage);
   myModal.present();
  }

}
