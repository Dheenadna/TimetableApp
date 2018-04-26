import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { TimetablesProvider } from "../../providers/timetables/timetables";
import { SelectSearch } from "../../components/select-search/select-search";
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-account",
  templateUrl: "account.html"
})
export class AccountPage {
  role: any;
  _id: any;
  courseId: any;
  email: any;
  courseName: any;
  courses: any;
  course: any;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public timetablesProvider: TimetablesProvider,
    public authProvider: AuthProvider,
    public loadingCtrl: LoadingController
  ) {
    this.getCourses();
  }

  courseChange(event: { component: SelectSearch; value: any }) {
    console.log("course:", event.value);
  }

  getCourses() {
    this.timetablesProvider.getCourses().then(data => {
      console.log(data);
      this.courses = data;
    });
  }

  updateAccount(){
    this.showLoader();

    let details = {
        _id: this._id,
        email: this.email,
        courseId: this.course._id,
        courseName: this.course.courseName,
        role: this.role
    };

    console.log(details);

    this.authProvider.updateUser(details).then((result) => {
      this.loading.dismiss();
      console.log(result);
    }, (err) => {
        this.loading.dismiss();
    });

  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: "Updating..."
    });

    this.loading.present();
  }
  
  ionViewDidLoad() {
    this.storage.get("user").then(value => {
      console.log(value);
      this._id = value._id;
      this.role = value.role;
      this.courseId = value.courseId;
      this.courseName = value.courseName;
      this.email = value.email;
    });
  }
}
