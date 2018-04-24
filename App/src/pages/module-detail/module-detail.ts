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

  module: any = this.navParams.data;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

  }

  gotoEditPage() {
    this.navCtrl.push(EditModuleDetailsPage, this.module);
  }

}
