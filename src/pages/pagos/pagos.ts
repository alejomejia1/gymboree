import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
})
export class PagosPage {

 alumno: Array<any>;


  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public restProvider: RestProvider) { 

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




}
