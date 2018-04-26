import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TimetablesProvider } from "../../providers/timetables/timetables";

import { HomePage } from '../home/home';

/**
 * Generated class for the EditModuleDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-module-details',
  templateUrl: 'edit-module-details.html',
})
export class EditModuleDetailsPage {

  moduleForm: FormGroup;

  module: any = this.navParams.get('module');
  day: any = this.navParams.get('day');

  moduleName: string;
  lecturer: string;
  room: string;
  startTime: string;
  endTime: string;
  moduleType: string;
  duration: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder, public timetableProvider: TimetablesProvider) {
    this.moduleName = this.module.moduleName;
    this.lecturer = this.module.lecturer;
    this.room = this.module.room;
    this.startTime = this.module.startTime;
    this.endTime = this.module.endTime;
    this.moduleType = this.module.moduleType;
    this.duration = this.module.duration;

    this.moduleForm = formBuilder.group({
      moduleName: ['', Validators.required],
      lecturer: ['', Validators.required],
      room: ['', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      moduleType: ['', Validators.required],
      duration: ['', Validators.required]
    });
  }

  saveModule(moduleName, lecturer, room, startTime, endTime, moduleType, duration) {
    console.log(this.moduleForm.value);
    this.timetableProvider.updateModule(this.day, this.moduleForm.value, this.module._id).then(data => {
      console.log(data);
      this.navCtrl.popToRoot();
    });
  }
}
