import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { TimetablesProvider } from '../../providers/timetables/timetables';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';
import { LoginPage } from '../login/login'

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses: any
  courseId: any

  constructor(public navCtrl: NavController, public storage: Storage, public modalCtrl: ModalController, public timetable: TimetablesProvider, public alerCtrl: AlertController, public navParams: NavParams) {
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

  logout() {
    this.storage.remove('token');
    this.storage.remove('user')
    this.navCtrl.push(LoginPage);
  }

}
