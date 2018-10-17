import { Component } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@IonicPage()
@Component({
  selector: 'page-valor',
  templateUrl: 'valor.html',
})
export class ValorPage {
   
  alumno: Array<any>;

  constructor(private view: ViewController, public navParams: NavParams, public restProvider: RestProvider) {

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
