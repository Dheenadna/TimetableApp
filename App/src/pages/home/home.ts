import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { TimetableviewPage } from '../timetableview/timetableview';
import { CalenderPage } from '../calender/calender';

import { TimetablesProvider } from '../../providers/timetables/timetables';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses: any
  email: any = this.navParams.data
  courseId: any

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public timetable: TimetablesProvider, public alerCtrl: AlertController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.timetable.getCourseId(this.email).then((data) => {
      console.log("Email: " + this.email);
      console.log(data);
      this.courseId = data;
      this.timetable.getTimetable(this.courseId).then((data) => {
        this.courses = data;
      });
    });
  }
}
