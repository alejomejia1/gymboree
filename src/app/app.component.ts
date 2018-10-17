import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { PagosPage } from '../pages/pagos/pagos';
import { ReservadoPage } from '../pages/reservado/reservado';
import { LoginPage } from '../pages/login/login';
import { AngularFireAuth } from 'angularfire2/auth';


import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;

  rootPage: any = HomePage;

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private push: Push, private auth: AngularFireAuth) {

   this.auth.authState.subscribe(auth => {
   if(!auth)
     this.rootPage = LoginPage;
   else 
     this.rootPage = HomePage;   
  });
 
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();
    });

   }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToPagos(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PagosPage);
  }goToReservado(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReservadoPage);
  }
  
  openPage(page) {
    this.nav.setRoot(page.component);
  }

  signOut(){
   this.auth.auth.signOut();
  }


  pushSetup(){
  const options: PushOptions = {
   android: {
     senderID: '497690585603'
   },
   ios: {
       alert: 'true',
       badge: true,
       sound: 'false'
   } 
};

const pushObject: PushObject = this.push.init(options);


pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

pushObject.on('registration').subscribe((registration: any) => console.log('Device registered', registration));

pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));

  }


}
