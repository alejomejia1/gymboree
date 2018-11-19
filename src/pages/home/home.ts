import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
import { Observable } from 'rxjs/observable';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  
   alumno:  Observable<any>;
   

   constructor(private auth: AngularFireAuth, public navCtrl: NavController, public restProvider: RestProvider, private screenOrientation: ScreenOrientation
  ) {
  
   this.getAlumno();
  }

  signOut(){

    this.auth.auth.signOut();
  }

  getAlumno() {
    this.restProvider.getAlumno(1)
    .then((data:any) => {
    this.alumno = Object.assign(data.Alumno);
    console.log(data);    
    console.log(this.alumno);
    
   })
  }
  
  lock(){
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
  }


}
