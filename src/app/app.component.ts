import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReservaPage } from '../pages/reserva/reserva';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, private afAuth: AngularFireAuth, private statusBar: StatusBar, private splashScreen: SplashScreen) {
   
    this.pages = [
      { title: 'Mis Datos', component: HomePage },
      { title: 'Mis Clases', component: ListPage },
      { title: 'Mis Reservas', component: ReservaPage }
    ];

      this.afAuth.authState.subscribe(auth => {
     if(!auth)
      this.rootPage = LoginPage;
    else
     ths.rootPage = HomePage;

    });



    
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  

}


}
