import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { TimetablesProvider } from "../../providers/timetables/timetables";
import { SelectSearch } from "../../components/select-search/select-search";

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
  courseId: any;
  email: any;
  courseName: any;
  password: any = "password";
  courses: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public timetablesProvider: TimetablesProvider
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

  ionViewDidLoad() {
    this.storage.get("user").then(value => {
      console.log(value);
      this.role = value.role;
      this.courseId = value.courseId;
      this.courseName = value.courseName;
      this.email = value.email;
    });
  }
}
