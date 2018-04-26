import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the AddModulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-module',
  templateUrl: 'add-module.html',
})
export class AddModulePage {

  moduleName: any;
  lectuerer: any;
  moduleType: any;
  room: any;
  startTime: any;
  endTime: any;
  day: any;
  duration: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddModulePage');
  }

  save(): void {
 
    let module = {
      moduleName: this.moduleName,
      lectuerer: this.lectuerer,
      room: this.room,
      startTime: this.startTime,
      endTime: this.endTime,
      moduleType: this.moduleType,
      day: this.day,
      duration: this.duration
    };
 
    this.viewCtrl.dismiss(module);
 
  }
 
  close(): void {
    this.viewCtrl.dismiss();
  }

}
