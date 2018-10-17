
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PagosPage } from '../pages/pagos/pagos';
import { ReservadoPage } from '../pages/reservado/reservado';
import { RegisterPage } from '../pages/register/register';
import { ReservaPage } from '../pages/reserva/reserva';
import { LoginPage } from '../pages/login/login';
import { FechaPage } from '../pages/fecha/fecha';
import { VencimientoPage } from '../pages/vencimiento/vencimiento';
import { ValorPage } from '../pages/valor/valor';
import { FacturaPage } from '../pages/factura/factura';
import { HttpClientModule } from '@angular/common/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Push } from '@ionic-native/push';
import { RestProvider } from '../providers/rest/rest';

var config = {
    apiKey: "AIzaSyDLO5ax7wtW9Y1A5XDZXJWCarmlsQSrPog",
    authDomain: "gymboree-2c78d.firebaseapp.com",
    databaseURL: "https://gymboree-2c78d.firebaseio.com",
    projectId: "gymboree-2c78d",
    storageBucket: "gymboree-2c78d.appspot.com",
    messagingSenderId: "497690585603"
  };

@NgModule({
  declarations: [
   MyApp,
   HomePage,
   PagosPage,
   LoginPage,
   ValorPage,
   FacturaPage,
   VencimientoPage,
   FechaPage,
   RegisterPage,
   ReservaPage,
   ReservadoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PagosPage,
    LoginPage,
    ValorPage,
    VencimientoPage,
    FechaPage,
    FacturaPage,
    RegisterPage,
    ReservaPage,
    ReservadoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Push,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
