import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, Content, Segment } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { MenuController } from "ionic-angular";

import { TimetablesProvider } from "../../providers/timetables/timetables";
import { ModalController } from "ionic-angular/components/modal/modal-controller";
import { AuthProvider } from "../../providers/auth/auth";

import { AlertController, LoadingController } from "ionic-angular";
import { EditModuleDetailsPage } from "../edit-module-details/edit-module-details";
import { AddModulePage } from "../add-module/add-module";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild(Content) content: Content;
  @ViewChild(Segment) segment: Segment;

  courses: any;
  timetable: any;
  shownGroup: any = null;
  loading: any;

  constructor(
    public navCtrl: NavController,
    public authService: AuthProvider,
    public storage: Storage,
    public modalCtrl: ModalController,
    public timetableProvider: TimetablesProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public loadingCtrl: LoadingController
  ) {
    let today = new Date().getDay();
    switch (today) {
      case 1: {
        this.timetable = "monday";
        break;
      }
      case 2: {
        this.timetable = "tuesday";
        break;
      }
      case 3: {
        this.timetable = "wednesday";
        break;
      }
      case 4: {
        this.timetable = "thursday";
        break;
      }
      case 5: {
        this.timetable = "friday";
        break;
      }
      default: {
        //statements;
        break;
      }
    }

    this.loadTimetable();
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  }

  isGroupShown(group) {
    return this.shownGroup === group;
  }

  ionViewWillEnter() {
    this.loadTimetable();
  }

  deleteModule(module) {
    if (module) {
      console.log(module);
      this.showLoader();

      this.timetableProvider.deleteModule(module, this.segment.value).then(
        result => {
          this.loading.dismiss();
          // this.courses = result;
          console.log(result);
          console.log("module deleted");
          this.loadTimetable();
        },
        err => {
          this.loading.dismiss();
          console.log("not allowed");
        }
      );
    }
  }

  addModule(module) {
    let modal = this.modalCtrl.create(AddModulePage);

    modal.onDidDismiss(module => {
      if (module) {
        console.log(module);
        this.showLoader();

        this.timetableProvider.createModule(module).then(
          result => {
            this.loading.dismiss();
            // this.courses = result;
            console.log(result);
            console.log("module created");
            this.loadTimetable();
          },
          err => {
            this.loading.dismiss();
            console.log("not allowed");
          }
        );
      }
    });

    modal.present();

    // let prompt = this.alertCtrl.create({
    //   title: 'Add Module',
    //   message: 'Add your module below:',
    //   inputs: [
    //     {
    //       name: 'moduleName',
    //       placeholder: 'Enter module name'
    //     },
    //     {
    //       name: 'room',
    //       placeholder: 'Enter room number'
    //     },
    //     {
    //       name: 'lecturer',
    //       placeholder: 'Enter lecturer name'
    //     },
    //     {
    //       name: 'day',
    //       placeholder: 'Enter day'
    //     },
    //     {
    //       name: 'startTime',
    //       placeholder: 'Enter module start time'
    //     },
    //     {
    //       name: 'endTime',
    //       placeholder: 'Enter module end time'
    //     },
    //     {
    //       name: 'duration',
    //       placeholder: 'Enter module duration'
    //     },
    //     {
    //       name: 'moduleType',
    //       placeholder: 'Type (L: lecture, P: lab)'
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel'
    //     },
    //     {
    //       text: 'Save',
    //       handler: module => {

    //             if(module){
    //                 console.log(module);
    //                 this.showLoader();

    //                 this.timetableProvider.createModule(module).then((result) => {
    //                     this.loading.dismiss();
    //                     // this.courses = result;
    //                     console.log(result);
    //                     console.log("module created");
    //                     this.loadTimetable();
    //                 }, (err) => {
    //                     this.loading.dismiss();
    //                     console.log("not allowed");
    //                 });
    //             }

    //       }
    //     }
    //   ]
    // });

    // prompt.present();
  }

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: "Authenticating..."
    });

    this.loading.present();
  }

  editModule(module) {
    this.navCtrl.push(EditModuleDetailsPage, {
      module: module,
      day: this.segment.value
    });
  }

  resize() {
    this.content.resize();
  }

  loadTimetable() {
    this.storage.get("user").then(value => {
      console.log(value.courseId);
      this.timetableProvider.getTimetable(value.courseId).then(data => {
        this.courses = data;
        console.log(data);
      });
    });
  }

  ionViewDidLoad() {}
}
