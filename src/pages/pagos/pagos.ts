import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';



@IonicPage()
@Component({
  selector: 'page-pagos',
  templateUrl: 'pagos.html',
})
export class PagosPage {



  constructor(
  public navCtrl: NavController,
  public navParams: NavParams,
  public restProvider: RestProvider) { 


  }




}
