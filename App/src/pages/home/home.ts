import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams  } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { TimetablesProvider } from '../../providers/timetables/timetables';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { LoginPage } from '../login/login'
import { AuthProvider } from '../../providers/auth/auth'

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  @ViewChild(Content) content: Content;
  courses: any

  constructor(public navCtrl: NavController, public authService: AuthProvider, public storage: Storage, public modalCtrl: ModalController, public timetable: TimetablesProvider, public alerCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.storage.get('user').then((value) => {
      console.log(value.courseId);
      this.timetable.getTimetable(value.courseId).then((data) => {
        this.courses = data;
        console.log(data);
      });
    });
  }

  resize() {
    this.content.resize();
  }

  logout(){
    this.authService.logout();
    this.navCtrl.setRoot(LoginPage);
  }

}
