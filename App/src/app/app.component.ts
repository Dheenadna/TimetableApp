import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Content } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { AccountPage } from '../pages/account/account';
import { AuthProvider } from '../providers/auth/auth';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public authService: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  logout() {
    this.authService.logout();
    this.nav.setRoot(LoginPage);
  }

  gotoAccountPage() {
    this.nav.setRoot(AccountPage);
  }

  gotoHomePage() {
    this.nav.setRoot(HomePage);
  }

}
