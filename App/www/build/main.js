webpackJsonp([4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, authService, timetable, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.timetable = timetable;
        this.loadingCtrl = loadingCtrl;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.timetable.getCourses().then(function (data) {
            console.log(data);
            _this.courses = data;
        });
    };
    SignupPage.prototype.register = function () {
        var _this = this;
        this.showLoader();
        var details = {
            email: this.email,
            password: this.password,
            courseId: this.courseId,
            role: this.role
        };
        this.authService.createAccount(details).then(function (result) {
            _this.loading.dismiss();
            console.log(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.loading.dismiss();
        });
    };
    SignupPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  \n   <ion-navbar color="donal">\n     <ion-title>Create Account</ion-title>\n   </ion-navbar>\n  \n </ion-header>\n  \n  \n <ion-content padding>\n    <div class="form">\n        <div class="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>\n     \n     <ion-row class="account-form">\n         <ion-col>\n             <ion-list inset>\n  \n                 <ion-item>\n                     <ion-label><ion-icon name="mail"></ion-icon></ion-label>\n                     <ion-input [(ngModel)]="email" placeholder="Email" type="email"></ion-input>\n                 </ion-item>\n  \n                 <ion-item>\n                     <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                     <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n                 </ion-item>\n  \n                 <ion-item>\n                     <ion-label>Role</ion-label>\n                     <ion-select [(ngModel)]="role">\n                         <ion-option value="student">Student</ion-option>\n                         <ion-option value="lecturer">Lecturer</ion-option>\n                         <ion-option value="moderator">Moderator</ion-option>\n                         <ion-option value="administrator">Administrator</ion-option>\n                     </ion-select>\n                 </ion-item>\n\n                 <ion-item>\n                    <ion-label>Select Course</ion-label>\n                    <ion-select [(ngModel)]="courseId">\n                        <ion-option text-wrap *ngFor="let course of courses" value="{{course._id}}">{{course.courseName}}</ion-option>\n                    </ion-select>\n                 </ion-item>\n  \n             </ion-list>\n  \n             <button ion-button (click)="register()" class="continue-button">Register</button>\n  \n         </ion-col>\n     </ion-row>\n    </div>\n </ion-content>'/*ion-inline-end:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calender/calender.module": [
		283,
		3
	],
	"../pages/login/login.module": [
		286,
		2
	],
	"../pages/signup/signup.module": [
		285,
		1
	],
	"../pages/timetableview/timetableview.module": [
		284,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CalenderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CalenderPage = (function () {
    function CalenderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalenderPage.prototype.getDaysOfMonth = function () {
        this.daysInThisMonth = new Array();
        this.daysInLastMonth = new Array();
        this.daysInNextMonth = new Array();
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        if (this.date.getMonth() === new Date().getMonth()) {
            this.currentDate = new Date().getDate();
        }
        else {
            this.currentDate = 999;
        }
        var firstDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay();
        var prevNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth(), 0).getDate();
        for (var i = prevNumOfDays - (firstDayThisMonth - 1); i <= prevNumOfDays; i++) {
            this.daysInLastMonth.push(i);
        }
        var thisNumOfDays = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDate();
        for (i = 0; i < thisNumOfDays; i++) {
            this.daysInThisMonth.push(i + 1);
        }
        var lastDayThisMonth = new Date(this.date.getFullYear(), this.date.getMonth() + 1, 0).getDay();
        for (i = 0; i < (6 - lastDayThisMonth); i++) {
            this.daysInNextMonth.push(i + 1);
        }
        var totalDays = this.daysInLastMonth.length + this.daysInThisMonth.length + this.daysInNextMonth.length;
        if (totalDays < 36) {
            for (i = (7 - lastDayThisMonth); i < ((7 - lastDayThisMonth) + 7); i++) {
                this.daysInNextMonth.push(i);
            }
        }
    };
    CalenderPage.prototype.goToLastMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth(), 0);
        this.getDaysOfMonth();
    };
    CalenderPage.prototype.goToNextMonth = function () {
        this.date = new Date(this.date.getFullYear(), this.date.getMonth() + 2, 0);
        this.getDaysOfMonth();
    };
    CalenderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CalenderPage');
        this.date = new Date();
        this.monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.getDaysOfMonth();
    };
    CalenderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calender',template:/*ion-inline-start:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/calender/calender.html"*/'<!--\n  Generated template for the CalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>calender</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="calendar-header">\n    <ion-row class="calendar-month">\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n  <div class="calendar-body">\n    <ion-grid>\n      <ion-row class="calendar-weekday">\n        <ion-col>Su</ion-col>\n        <ion-col>Mo</ion-col>\n        <ion-col>Tu</ion-col>\n        <ion-col>We</ion-col>\n        <ion-col>Th</ion-col>\n        <ion-col>Fr</ion-col>\n        <ion-col>Sa</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n        <ion-col col-1 *ngFor="let day of daysInThisMonth">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n        </ion-col>\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/calender/calender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CalenderPage);
    return CalenderPage;
}());

//# sourceMappingURL=calender.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TimetableviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TimetableviewPage = (function () {
    function TimetableviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.timetables = this.navParams.data;
    }
    TimetableviewPage.prototype.ionViewDidLoad = function () {
        console.log(this.timetables);
    };
    TimetableviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-timetableview',template:/*ion-inline-start:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/timetableview/timetableview.html"*/'<!--\n  Generated template for the TimetableviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>View Timetable</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let t of timetables" text-wrap>\n      {{t.courseName}}\n      <ion-list>\n        <ion-item *ngFor="let module of t.timetable" text-wrap>\n          {{ module.moduleName }}\n          <br> {{ module.lecturer }}\n          <br> {{ module.room }}\n          <br> {{ module.day }}\n          <br> {{ module.startTime }}\n          <br> {{ module.startTime }}\n          <br>\n        </ion-item>\n      </ion-list>\n    </ion-item>\n  </ion-list>\n\n  <ion-content>\n    <ion-card>\n    <ion-card-header>\n      Day of the week here\n    </ion-card-header>\n    <ion-card-content>\n      Information about the module, such as module name, location, lecturer etc.\n    </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n\n'/*ion-inline-end:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/timetableview/timetableview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TimetableviewPage);
    return TimetableviewPage;
}());

//# sourceMappingURL=timetableview.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_timetableview_timetableview__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_timetables_timetables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_timetableview_timetableview__["a" /* TimetableviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__["a" /* CalenderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calender/calender.module#CalenderPageModule', name: 'CalenderPage', segment: 'calender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timetableview/timetableview.module#TimetableviewPageModule', name: 'TimetableviewPage', segment: 'timetableview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_timetableview_timetableview__["a" /* TimetableviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__["a" /* CalenderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_timetables_timetables__["a" /* TimetablesProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* Storage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello AuthProvider Provider');
    }
    //checks authentication
    AuthProvider.prototype.checkAuthentication = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //Load token if exists
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Authorization', _this.token);
                _this.http.get('https://donalburke.me/api/auth/protected', { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    _this.storage.set('user', data);
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    AuthProvider.prototype.createAccount = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://donalburke.me/api/auth/register', JSON.stringify(details), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                _this.storage.set('user', data.user);
                resolve(data);
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.login = function (credentials) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post('https://donalburke.me/api/auth/login', JSON.stringify(credentials), { headers: headers })
                .subscribe(function (res) {
                var data = res.json();
                _this.token = data.token;
                _this.storage.set('token', data.token);
                _this.storage.set('user', data.user);
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider.prototype.logout = function () {
        this.storage.set('token', '');
        this.storage.set('user', '');
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad LoginPage');
        this.showLoader();
        //Check if already authenticated
        this.authService.checkAuthentication().then(function (res) {
            console.log("Already authorized");
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            console.log("Not already authorized");
            _this.loading.dismiss();
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.showLoader();
        var credentials = {
            email: this.email,
            password: this.password
        };
        this.authService.login(credentials).then(function (result) {
            _this.loading.dismiss();
            console.log(result);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }, function (err) {
            _this.loading.dismiss();
            console.log(err);
        });
    };
    LoginPage.prototype.launchSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="donal">\n    <ion-title>LoginPage</ion-title>\n  </ion-navbar>\n\n</ion-header>\n \n<ion-content>\n  <div class="form">\n    <div class="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>\n \n\n    <ion-row class="login-form">\n        <ion-col>\n            <ion-list inset>\n \n              <ion-item>\n                <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                <ion-input [(ngModel)]="email" placeholder="Email" type="text"></ion-input>\n              </ion-item>\n \n              <ion-item>\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n              </ion-item>\n \n            </ion-list>\n \n            <button ion-button full (click)="login()" color="primary" class="login-button">Login</button>\n \n        </ion-col>\n    </ion-row>\n \n    <ion-row>\n        <ion-col>\n            <button ion-button (click)="launchSignup()" class="create-account">Create an Account</button>\n        </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the TimetablesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var TimetablesProvider = (function () {
    function TimetablesProvider(http, authService) {
        this.http = http;
        this.authService = authService;
        this.data = null;
    }
    TimetablesProvider.prototype.getCourses = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://donalburke.me/api/courses/')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    TimetablesProvider.prototype.getTimetable = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/json');
            headers.append('Authorization', _this.authService.token);
            id = { _id: id };
            _this.http.post('https://donalburke.me/api/courses/', JSON.stringify(id), { headers: headers })
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
                _this.data = res;
                console.log(res);
                return _this.data;
            }, function (err) {
                reject(err);
            });
        });
    };
    TimetablesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]])
    ], TimetablesProvider);
    return TimetablesProvider;
}());

//# sourceMappingURL=timetables.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HomePage = (function () {
    function HomePage(navCtrl, authService, storage, modalCtrl, timetableProvider, alerCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.timetableProvider = timetableProvider;
        this.alerCtrl = alerCtrl;
        this.navParams = navParams;
        var today = new Date().getDay();
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
    }
    HomePage.prototype.ionViewWillEnter = function () { };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get("user").then(function (value) {
            console.log(value.courseId);
            _this.timetableProvider.getTimetable(value.courseId).then(function (data) {
                _this.courses = data;
                console.log(data);
            });
        });
    };
    HomePage.prototype.logout = function () {
        this.authService.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]) === "function" && _a || Object)
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/home/home.html"*/'<ion-header (load)="resize()" *ngFor="let course of courses">\n  <ion-navbar>\n    <ion-title text-wrap>\n      {{ course.courseName }}\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment padding [(ngModel)]="timetable">\n      <ion-segment-button value="monday">\n        Mon\n      </ion-segment-button>\n      <ion-segment-button value="tuesday">\n        Tue\n      </ion-segment-button>\n      <ion-segment-button value="wednesday">\n        Wed\n      </ion-segment-button>\n      <ion-segment-button value="thursday">\n        Thu\n      </ion-segment-button>\n      <ion-segment-button value="friday">\n        Fri\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor="let course of courses">\n  <div [ngSwitch]="timetable">\n    <ion-list *ngSwitchCase="\'monday\'">\n      <ion-item-group *ngFor="let module of course.Monday" [hidden]="course.hide">\n        <ion-item-divider sticky>\n          <ion-label>\n            {{ module.startTime }}\n          </ion-label>\n        </ion-item-divider>\n  \n        <ion-item-sliding #slidingItem [hidden]="course.hide">\n  \n          <button ion-item (click)="toggleToolbar()">\n            <h3 text-wrap>{{ module.moduleName }}</h3>\n            <p>\n              {{ module.lecturer }}&mdash;\n              Room {{ module.room }}\n            </p>\n          </button>\n  \n        </ion-item-sliding>\n  \n      </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'tuesday\'">\n        <ion-item-group *ngFor="let module of course.Tuesday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item>\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n                    Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'wednesday\'">\n        <ion-item-group *ngFor="let module of course.Wednesday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item>\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n              Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'thursday\'">\n        <ion-item-group *ngFor="let module of course.Thursday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item>\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n                    Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'friday\'">\n        <ion-item-group *ngFor="let module of course.Friday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item>\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n              Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/donal/Desktop/Group Project/TimetableApp/App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _h || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d, _e, _f, _g, _h;
}());

//# sourceMappingURL=home.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map