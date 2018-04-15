import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { TimetablesProvider } from '../../providers/timetables/timetables';
import { HomePage } from '../home/home';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  
  loading: any;
  role: string;
  email: string;
  password: string;
  courseId: string;
  courses: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public authService: AuthProvider, public timetable: TimetablesProvider, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    this.timetable.getCourses().then((data) => {
      console.log(data);
      this.courses = data;
    });
  }

  register(){
    this.showLoader();

    let details = {
        email: this.email,
        password: this.password,
        courseId: this.courseId,
        role: this.role
    };

    this.authService.createAccount(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
        this.loading.dismiss();
    });

  }

  showLoader(){
    
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
    
  }

}
