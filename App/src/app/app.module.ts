import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TimetableviewPage } from '../pages/timetableview/timetableview';
import { TimetablesProvider } from '../providers/timetables/timetables';
import { CalenderPage } from '../pages/calender/calender';
import { HttpModule } from '@angular/http';
import { AuthProvider } from '../providers/auth/auth';
import {LoginPage} from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
import {Storage} from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TimetableviewPage,
    CalenderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    TimetableviewPage,
    CalenderPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TimetablesProvider,
    AuthProvider,
    Storage
  ]
})
export class AppModule {}
