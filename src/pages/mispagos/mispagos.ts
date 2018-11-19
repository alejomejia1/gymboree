import { Component } from '@angular/core';
import { IonicPage, AlertController, NavParams, ViewController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@IonicPage()
@Component({
  selector: 'page-mispagos',
  templateUrl: 'mispagos.html',
})
export class MispagosPage {

alumno: Array<any>;

tablestyle = 'bootstrap';

constructor(public restProvider: RestProvider, private view: ViewController, public navParams: NavParams, private alertCtrl: AlertController) {
  this.getAlumno();
}

getAlumno(){
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

switchStyle() {
 if(this.tablestyle == 'dark'){
  this.tablestyle = 'bootstrap';
 } else{
   this.tablestyle = 'dark';
 }
}


}
