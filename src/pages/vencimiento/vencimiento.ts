import { Component } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-vencimiento',
  templateUrl: 'vencimiento.html',
})
export class VencimientoPage {
  
  alumno: Array<any>;
  constructor(public restProvider: RestProvider, private view: ViewController, public navParams: NavParams) {

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


  closeModal(){
  this.view.dismiss();
  }


}
