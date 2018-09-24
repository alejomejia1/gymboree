import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
   alumno: any;
   

   constructor(private auth: AngularFireAuth, public navCtrl: NavController, public restProvider: RestProvider
  ) {
  
   this.getAlumno();
  }



    signOut(){

    this.auth.auth.signOut();
  }

    getAlumno() {
    this.restProvider.getAlumno(1)
    .then(data => {
      this.alumno = data.Alumno;
      console.log(data);    
      console.log(this.alumno);
    
     })
  }

}
