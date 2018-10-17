import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-fecha',
  templateUrl: 'fecha.html',
})
export class FechaPage {

  alumno: Array<any>;

  constructor( public navParams: NavParams, private view: ViewController, public restProvider: RestProvider) {
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


  closeModal(){
  this.view.dismiss();
  }

}
