import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ReservadoPage } from '../pages/reservado/reservado';



import { Push, PushObject, PushOptions } from '@ionic-native/push';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'LoginPage';

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private push: Push) {

   
   this.pages = [
      { title: 'Mis Datos', component: HomePage },
      { title: 'Mis Clases', component: ListPage },
      { title: 'Mis Reservas', component: ReservadoPage }
    ];

   
    platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();
    });

   }
  
  openPage(page) {
    this.nav.setRoot(page.component);
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
