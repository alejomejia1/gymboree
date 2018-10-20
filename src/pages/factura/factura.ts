import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-factura',
  templateUrl: 'factura.html',
})
export class FacturaPage {

  alumno: Array<any>;

  constructor(private navParams: NavParams, public restProvider: RestProvider, private view: ViewController) {

  this.getAlumno();
  }

  getAlumno() {
    this.restProvider.getAlumno(1).then((data:any) => {
    this.alumno = Object.assign(data.Pago);
    console.log(data);    
    console.log(this.alumno);
   })
  }


  closeModal(){
  this.view.dismiss();
  }

}
