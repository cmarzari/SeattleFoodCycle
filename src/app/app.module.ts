import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { MakeProfilePage } from '../pages/make-profile/make-profile';
import { WelcomePage } from '../pages/welcome/welcome';
import { FoodhomePage } from '../pages/foodhome/foodhome';
import { ShelterhomePage } from '../pages/shelterhome/shelterhome';
import { DriverhomePage } from '../pages/driverhome/driverhome';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from 'angularfire2/database';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    MakeProfilePage,
    WelcomePage,
    FoodhomePage,
    ShelterhomePage,
    DriverhomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    SignupPage,
    MakeProfilePage,
    WelcomePage,
    FoodhomePage,
    ShelterhomePage,
    DriverhomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
