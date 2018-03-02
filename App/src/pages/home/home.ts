import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TimetableviewPage } from '../timetableview/timetableview';
import { CalenderPage } from '../calender/calender';

import { TimetablesProvider } from '../../providers/timetables/timetables';
import { ModalController } from 'ionic-angular/components/modal/modal-controller';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  courses: any

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public timetable: TimetablesProvider) {
  }

  ionViewDidLoad(){
    this.timetable.getCourses().then((data) => {
      console.log(data);
      this.courses = data;
    });
  }

  viewTimetable(value){
    this.timetable.getTimetable(value).then((data) => {
         this.navCtrl.push(TimetableviewPage, data);
    }); 
  }

  viewCalender(){
         this.navCtrl.push(CalenderPage);
  }
}
