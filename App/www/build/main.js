webpackJsonp([4],{

/***/ 102:
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
            selector: 'page-calender',template:/*ion-inline-start:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\calender\calender.html"*/'<!--\n\n  Generated template for the CalenderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>calender</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="calendar-header">\n\n    <ion-row class="calendar-month">\n\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="calendar-body">\n\n    <ion-grid>\n\n      <ion-row class="calendar-weekday">\n\n        <ion-col>Su</ion-col>\n\n        <ion-col>Mo</ion-col>\n\n        <ion-col>Tu</ion-col>\n\n        <ion-col>We</ion-col>\n\n        <ion-col>Th</ion-col>\n\n        <ion-col>Fr</ion-col>\n\n        <ion-col>Sa</ion-col>\n\n      </ion-row>\n\n      <ion-row class="calendar-date">\n\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n\n        <ion-col col-1 *ngFor="let day of daysInThisMonth">\n\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n\n          <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n\n        </ion-col>\n\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\calender\calender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CalenderPage);
    return CalenderPage;
}());

//# sourceMappingURL=calender.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="secondary">\n\n    <ion-title>LoginPage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n \n\n<ion-content>\n\n \n\n    <ion-row class="login-form">\n\n        <ion-col>\n\n            <ion-list inset>\n\n \n\n              <ion-item>\n\n                <ion-label><ion-icon name="person"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="email" placeholder="email" type="text"></ion-input>\n\n              </ion-item>\n\n \n\n              <ion-item>\n\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="password" placeholder="password" type="password"></ion-input>\n\n              </ion-item>\n\n \n\n            </ion-list>\n\n \n\n            <button ion-button full (click)="login()" color="primary" class="login-button">Login</button>\n\n \n\n        </ion-col>\n\n    </ion-row>\n\n \n\n    <ion-row>\n\n        <ion-col>\n\n            <button ion-button (click)="launchSignup()" class="create-account">Create an Account</button>\n\n        </ion-col>\n\n    </ion-row>\n\n \n\n</ion-content>'/*ion-inline-end:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
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
            selector: 'page-timetableview',template:/*ion-inline-start:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\timetableview\timetableview.html"*/'<!--\n\n  Generated template for the TimetableviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>View Timetable</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let t of timetables" text-wrap>\n\n      {{t.courseName}}\n\n      <ion-list>\n\n        <ion-item *ngFor="let module of t.timetable" text-wrap>\n\n          {{ module.moduleName }}\n\n          <br> {{ module.lecturer }}\n\n          <br> {{ module.room }}\n\n          <br> {{ module.day }}\n\n          <br> {{ module.startTime }}\n\n          <br> {{ module.startTime }}\n\n          <br>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n\n\n\n\n  <!--<ion-card>\n\n    <ion-card-header>\n\n      Day of the week here\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Information about the module, such as module name, location, lecturer etc.\n\n    </ion-card-content>\n\n  </ion-card>-->\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Monday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Database Management Systems. Room 994. 10 - 11. Deirdre.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Monday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Mobile Apps Dev. Room 995. 12 - 14. Damien.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Monday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Monday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Tuesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Database Management Systems. Room 994. 10 - 11. Deirdre.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Tuesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Mobile Apps Dev. Room 995. 12 - 14. Damien.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Tuesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Tuesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Wednesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Database Management Systems. Room 994. 10 - 11. Deirdre.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Wednesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Mobile Apps Dev. Room 995. 12 - 14. Damien.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Wednesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Wednesday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Thursday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Database Management Systems. Room 994. 10 - 11. Deirdre.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Thursday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Mobile Apps Dev. Room 995. 12 - 14. Damien.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Thursday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Thursday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Friday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Database Management Systems. Room 994. 10 - 11. Deirdre.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Friday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Mobile Apps Dev. Room 995. 12 - 14. Damien.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Friday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Friday\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Graph Theory. Room 470. 15 - 16. Ian.\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\timetableview\timetableview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], TimetableviewPage);
    return TimetableviewPage;
}());

//# sourceMappingURL=timetableview.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/calender/calender.module": [
		283,
		3
	],
	"../pages/login/login.module": [
		284,
		2
	],
	"../pages/signup/signup.module": [
		285,
		1
	],
	"../pages/timetableview/timetableview.module": [
		286,
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
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
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
    function TimetablesProvider(http) {
        this.http = http;
        this.data = null;
    }
    TimetablesProvider.prototype.getCourses = function () {
        var _this = this;
        if (this.data) {
            return Promise.resolve(this.data);
        }
        return new Promise(function (resolve) {
            _this.http.get('http://donalburke.me/api/courses')
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(_this.data);
            });
        });
    };
    TimetablesProvider.prototype.getTimetable = function (value) {
        var _this = this;
        return new Promise(function (resolve) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append("Content-Type", "application/json");
            value = { _id: value };
            _this.http
                .post("http://donalburke.me/api/timetable", JSON.stringify(value), {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.data = data;
                resolve(data);
            });
        });
    };
    TimetablesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], TimetablesProvider);
    return TimetablesProvider;
}());

//# sourceMappingURL=timetables.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>SignupPage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_timetableview_timetableview__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_timetables_timetables__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(201);
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
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calender/calender.module#CalenderPageModule', name: 'CalenderPage', segment: 'calender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timetableview/timetableview.module#TimetableviewPageModule', name: 'TimetableviewPage', segment: 'timetableview', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_timetables_timetables__["a" /* TimetablesProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(103);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timetableview_timetableview__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calender_calender__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_timetables_timetables__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__ = __webpack_require__(78);
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
    function HomePage(navCtrl, modalCtrl, timetable, alerCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.timetable = timetable;
        this.alerCtrl = alerCtrl;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.timetable.getCourses().then(function (data) {
            console.log(data);
            _this.courses = data;
        });
    };
    HomePage.prototype.viewTimetable = function (value) {
        var _this = this;
        this.timetable.getTimetable(value).then(function (data) {
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__timetableview_timetableview__["a" /* TimetableviewPage */], data);
        });
    };
    HomePage.prototype.viewCalender = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__calender_calender__["a" /* CalenderPage */]);
    };
    HomePage.prototype.doAlert = function () {
        var alert = this.alerCtrl.create({
            title: 'Next Class',
            message: 'Your next class is Database Management Systems with Deirdre in 15 Mins',
            buttons: ['Ok']
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Select course\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-item>\n\n    <ion-label>Course(s)</ion-label>\n\n    <ion-select #C (ionChange)="viewTimetable(C.value)">\n\n      <ion-option *ngFor="let course of courses" value="{{course._id}}">{{course.courseName}}</ion-option>\n\n    </ion-select>\n\n  </ion-item>\n\n  <button ion-button block outline (click)="viewCalender()">Calender View</button>\n\n\n\n<ion-list>\n\n\n\n <button ion-button block color="dark" (click)="doAlert()">Show Next Class</button>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Username</ion-label>\n\n    <ion-input type="text"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Password</ion-label>\n\n    <ion-input type="password"></ion-input>\n\n  </ion-item>\n\n\n\n\n\n</ion-list>\n\n\n\n<button ion-button color="light" round>Login</button>\n\n</ion-content>'/*ion-inline-end:"C:\Users\naqia\Desktop\ionic\TimetableApp\App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular_components_modal_modal_controller__["a" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_timetables_timetables__["a" /* TimetablesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(200);
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
                    resolve(res);
                }, function (err) {
                    reject(err);
                });
            });
        });
    };
    //
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
                resolve(data);
                resolve(res.json());
            }, function (err) {
                reject(err);
            });
        });
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map