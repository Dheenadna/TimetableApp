import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditModuleDetailsPage } from '../edit-module-details/edit-module-details';

/**
 * Generated class for the ModuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-module-detail',
  templateUrl: 'module-detail.html',
})
export class ModuleDetailPage {

  module: any = this.navParams.get('module');
  day: any = this.navParams.get('day');

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log(this.module, this.day);
  }

  gotoEditPage() {
    this.navCtrl.push(EditModuleDetailsPage, 
      {
        module: this.module, 
        day: this.day
      });
      console.log(this.day);
  }

}
