webpackJsonp([4],{

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(82);
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
    SignupPage.prototype.courseChange = function (event) {
        console.log('course:', event.value);
    };
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
            courseId: this.course._id,
            role: this.role
        };
        this.loading.dismiss();
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
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n    <ion-navbar color="donal">\n\n        <ion-title>Create Account</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    <div class="form">\n\n        <div class="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" /></div>\n\n\n\n        <ion-row class="account-form">\n\n            <ion-col>\n\n                <ion-list inset>\n\n\n\n                    <ion-item>\n\n                        <ion-label>\n\n                            <ion-icon name="mail"></ion-icon>\n\n                        </ion-label>\n\n                        <ion-input [(ngModel)]="email" placeholder="Email" type="email"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label>\n\n                            <ion-icon name="lock"></ion-icon>\n\n                        </ion-label>\n\n                        <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n\n                    </ion-item>\n\n\n\n                    <ion-item>\n\n                        <ion-label>Role</ion-label>\n\n                        <ion-select [(ngModel)]="role">\n\n                            <ion-option value="student">Student</ion-option>\n\n                            <ion-option value="lecturer">Lecturer</ion-option>\n\n                            <ion-option value="moderator">Moderator</ion-option>\n\n                            <ion-option value="administrator">Administrator</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n\n\n                    <ion-item-group margin-bottom>\n\n                        <ion-item>\n\n                            <select-search\n\n                                [(ngModel)]="course" \n\n                                title="Select Course" \n\n                                itemTextField="courseName" \n\n                                [items]="courses"\n\n                                [canSearch]="true" \n\n                                [multiple]="false" \n\n                                (onChange)="courseChange($event)">\n\n                            </select-search>\n\n                        </ion-item>\n\n                    </ion-item-group>\n\n                    <!-- <ion-item>\n\n                    <ion-label>Select Course</ion-label>\n\n                    <ion-select [(ngModel)]="courseId">\n\n                        <ion-option text-wrap *ngFor="let course of courses" value="{{course._id}}">{{course.courseName}}</ion-option>\n\n                    </ion-select>\n\n                 </ion-item> -->\n\n\n\n                </ion-list>\n\n\n\n                <button ion-button (click)="register()" class="continue-button">Register</button>\n\n\n\n            </ion-col>\n\n        </ion-row>\n\n    </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]) === "function" && _e || Object])
    ], SignupPage);
    return SignupPage;
    var _a, _b, _c, _d, _e;
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
		287,
		3
	],
	"../pages/login/login.module": [
		286,
		2
	],
	"../pages/signup/signup.module": [
		289,
		1
	],
	"../pages/timetableview/timetableview.module": [
		288,
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectSearchPage = (function () {
    function SelectSearchPage(navParams) {
        var _this = this;
        this.navParams = navParams;
        this.selectedItems = [];
        this.selectComponent = navParams.get('selectComponent');
        this.navController = navParams.get('navController');
        this.filteredItems = this.selectComponent.items;
        this.filterItems();
        if (this.selectComponent.value) {
            if (this.selectComponent.multiple) {
                this.selectComponent.value.forEach(function (item) {
                    _this.selectedItems.push(item);
                });
            }
            else {
                this.selectedItems.push(this.selectComponent.value);
            }
        }
    }
    SelectSearchPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.searchbarComponent) {
            // Focus after a delay because focus doesn't work without it.
            setTimeout(function () {
                _this.searchbarComponent.setFocus();
            }, 1000);
        }
    };
    SelectSearchPage.prototype.isItemSelected = function (item) {
        var _this = this;
        return this.selectedItems.find(function (selectedItem) {
            if (_this.selectComponent.itemValueField) {
                return item[_this.selectComponent.itemValueField] === selectedItem[_this.selectComponent.itemValueField];
            }
            return item === selectedItem;
        }) !== undefined;
    };
    SelectSearchPage.prototype.deleteSelectedItem = function (item) {
        var _this = this;
        var itemToDeleteIndex;
        this.selectedItems.forEach(function (selectedItem, itemIndex) {
            if (_this.selectComponent.itemValueField) {
                if (item[_this.selectComponent.itemValueField] === selectedItem[_this.selectComponent.itemValueField]) {
                    itemToDeleteIndex = itemIndex;
                }
            }
            else if (item === selectedItem) {
                itemToDeleteIndex = itemIndex;
            }
        });
        this.selectedItems.splice(itemToDeleteIndex, 1);
    };
    SelectSearchPage.prototype.addSelectedItem = function (item) {
        this.selectedItems.push(item);
    };
    SelectSearchPage.prototype.select = function (item) {
        if (this.selectComponent.multiple) {
            if (this.isItemSelected(item)) {
                this.deleteSelectedItem(item);
            }
            else {
                this.addSelectedItem(item);
            }
        }
        else {
            if (!this.isItemSelected(item)) {
                this.selectedItems = [];
                this.addSelectedItem(item);
                this.selectComponent.select(item);
            }
            this.close();
        }
    };
    SelectSearchPage.prototype.ok = function () {
        this.selectComponent.select(this.selectedItems.length ? this.selectedItems : null);
        this.close();
    };
    SelectSearchPage.prototype.close = function () {
        var _this = this;
        // Focused input interferes with the animation.
        // Blur it first, wait a bit and then close the page.
        if (this.searchbarComponent) {
            this.searchbarComponent._fireBlur();
        }
        setTimeout(function () {
            _this.navController.pop();
            if (!_this.selectComponent.hasSearchEvent) {
                _this.selectComponent.filterText = '';
            }
        });
    };
    SelectSearchPage.prototype.reset = function () {
        this.navController.pop();
        this.selectComponent.reset();
    };
    SelectSearchPage.prototype.filterItems = function () {
        var _this = this;
        if (this.selectComponent.hasSearchEvent) {
            if (this.selectComponent.isNullOrWhiteSpace(this.selectComponent.filterText)) {
                this.selectComponent.items = [];
            }
            else {
                // Delegate filtering to the event.
                this.selectComponent.emitSearch();
            }
        }
        else {
            // Default filtering.
            if (!this.selectComponent.filterText || !this.selectComponent.filterText.trim()) {
                this.filteredItems = this.selectComponent.items;
                return;
            }
            var filterText_1 = this.selectComponent.filterText.trim().toLowerCase();
            this.filteredItems = this.selectComponent.items.filter(function (item) {
                return item[_this.selectComponent.itemTextField].toLowerCase().indexOf(filterText_1) !== -1;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbarComponent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Searchbar */])
    ], SelectSearchPage.prototype, "searchbarComponent", void 0);
    SelectSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-search-page',template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\components\select-search\select-search-page.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{selectComponent.title}}</ion-title>\n\n    </ion-navbar>\n\n    <ion-toolbar *ngIf="selectComponent.canSearch">\n\n        <ion-searchbar\n\n            #searchbarComponent\n\n            [(ngModel)]="selectComponent.filterText"\n\n            (ionInput)="filterItems()"\n\n            [placeholder]="selectComponent.searchPlaceholder || \'Search\'">\n\n        </ion-searchbar>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content>\n\n    <div class="select-search-spinner" *ngIf="selectComponent.isSearching">\n\n        <div class="select-search-spinner-background"></div>\n\n        <ion-spinner></ion-spinner>\n\n    </div>\n\n    <ion-list text-wrap no-margin *ngIf="filteredItems.length">\n\n        <button ion-item detail-none *ngFor="let item of filteredItems" (click)="select(item)">\n\n            <ion-icon\n\n                [name]="isItemSelected(item) ? \'checkmark-circle\' : \'radio-button-off\'"\n\n                [color]="isItemSelected(item) ? \'primary\' : \'daek\'"\n\n                item-left>\n\n            </ion-icon>\n\n            <h2>{{selectComponent.formatItem(item)}}</h2>\n\n        </button>\n\n    </ion-list>\n\n    <div *ngIf="!filteredItems.length" margin>No items found.</div>\n\n</ion-content>\n\n<ion-footer *ngIf="selectComponent.canReset || selectComponent.multiple">\n\n    <ion-toolbar padding>\n\n        <ion-row>\n\n            <ion-col no-padding *ngIf="selectComponent.canReset"\n\n                [attr.col-6]="selectComponent.canReset && selectComponent.multiple ? \'\' : null"\n\n                [attr.col-12]="selectComponent.canReset && !selectComponent.multiple ? \'\' : null">\n\n                <button ion-button full no-margin (click)="reset()" [disabled]="!selectedItems.length">\n\n                    Clear\n\n                </button>\n\n            </ion-col>\n\n            <ion-col no-padding *ngIf="selectComponent.multiple"\n\n                [attr.col-6]="selectComponent.canReset && selectComponent.multiple ? \'\' : null"\n\n                [attr.col-12]="!selectComponent.canReset && selectComponent.multiple ? \'\' : null">\n\n                <button ion-button full no-margin (click)="ok()">\n\n                    OK\n\n                </button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\components\select-search\select-search-page.html"*/,
            host: {
                'class': 'select-search-page',
                '[class.select-search-page-can-reset]': 'selectComponent.canReset',
                '[class.select-search-page-multiple]': 'selectComponent.multiple'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], SelectSearchPage);
    return SelectSearchPage;
}());

//# sourceMappingURL=select-search-page.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-calender',template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\calender\calender.html"*/'<!--\n\n  Generated template for the CalenderPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>calender</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <div class="calendar-header">\n\n    <ion-row class="calendar-month">\n\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n\n    </ion-row>\n\n  </div>\n\n  <div class="calendar-body">\n\n    <ion-grid>\n\n      <ion-row class="calendar-weekday">\n\n        <ion-col>Su</ion-col>\n\n        <ion-col>Mo</ion-col>\n\n        <ion-col>Tu</ion-col>\n\n        <ion-col>We</ion-col>\n\n        <ion-col>Th</ion-col>\n\n        <ion-col>Fr</ion-col>\n\n        <ion-col>Sa</ion-col>\n\n      </ion-row>\n\n      <ion-row class="calendar-date">\n\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n\n        <ion-col col-1 *ngFor="let day of daysInThisMonth">\n\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n\n          <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n\n        </ion-col>\n\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\calender\calender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], CalenderPage);
    return CalenderPage;
}());

//# sourceMappingURL=calender.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
            selector: 'page-timetableview',template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\timetableview\timetableview.html"*/'<!--\n\n  Generated template for the TimetableviewPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>View Timetable</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-item *ngFor="let t of timetables" text-wrap>\n\n      {{t.courseName}}\n\n      <ion-list>\n\n        <ion-item *ngFor="let module of t.timetable" text-wrap>\n\n          {{ module.moduleName }}\n\n          <br> {{ module.lecturer }}\n\n          <br> {{ module.room }}\n\n          <br> {{ module.day }}\n\n          <br> {{ module.startTime }}\n\n          <br> {{ module.startTime }}\n\n          <br>\n\n        </ion-item>\n\n      </ion-list>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n  <ion-content>\n\n    <ion-card>\n\n    <ion-card-header>\n\n      Day of the week here\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      Information about the module, such as module name, location, lecturer etc.\n\n    </ion-card-content>\n\n  </ion-card>\n\n  </ion-content>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\timetableview\timetableview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], TimetableviewPage);
    return TimetableviewPage;
}());

//# sourceMappingURL=timetableview.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_timetableview_timetableview__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_timetables_timetables__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_select_search_select_search_module__ = __webpack_require__(284);
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
                __WEBPACK_IMPORTED_MODULE_15__components_select_search_select_search_module__["a" /* SelectSearchModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/calender/calender.module#CalenderPageModule', name: 'CalenderPage', segment: 'calender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/timetableview/timetableview.module#TimetableviewPageModule', name: 'TimetableviewPage', segment: 'timetableview', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
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
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
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

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_search__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_search_page__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SelectSearchModule = (function () {
    function SelectSearchModule() {
    }
    SelectSearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_search__["a" /* SelectSearch */],
                __WEBPACK_IMPORTED_MODULE_3__select_search_page__["a" /* SelectSearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__select_search__["a" /* SelectSearch */]),
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__select_search_page__["a" /* SelectSearchPage */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_search__["a" /* SelectSearch */],
                __WEBPACK_IMPORTED_MODULE_3__select_search_page__["a" /* SelectSearchPage */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__select_search__["a" /* SelectSearch */],
                __WEBPACK_IMPORTED_MODULE_3__select_search_page__["a" /* SelectSearchPage */]
            ]
        })
    ], SelectSearchModule);
    return SelectSearchModule;
}());

//# sourceMappingURL=select-search-module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_search_page__ = __webpack_require__(203);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SelectSearch = (function () {
    function SelectSearch(navController, ionForm, platform, ionItem) {
        this.navController = navController;
        this.ionForm = ionForm;
        this.platform = platform;
        this.ionItem = ionItem;
        this._items = [];
        this.filterText = '';
        this.value = null;
        this.canSearch = false;
        this.canReset = false;
        this.searchPlaceholder = '...';
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onSearch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.propagateChange = function (_) { };
    }
    SelectSearch_1 = SelectSearch;
    Object.defineProperty(SelectSearch.prototype, "items", {
        get: function () {
            return this._items;
        },
        set: function (items) {
            // The original reference of the array should be preserved to keep two-way data binding working between SelectSearchable and SelectSearchablePage.
            this._items.splice(0, this._items.length);
            // Add new items to the array.
            Array.prototype.push.apply(this._items, items);
        },
        enumerable: true,
        configurable: true
    });
    SelectSearch.prototype.isNullOrWhiteSpace = function (value) {
        if (value === null || value === undefined) {
            return true;
        }
        // Convert value to string in case if it's not.
        return value.toString().replace(/\s/g, '').length < 1;
    };
    SelectSearch.prototype.ngOnInit = function () {
        this.isIos = this.platform.is('ios');
        this.isMd = this.platform.is('android');
        this.hasSearchEvent = this.onSearch.observers.length > 0;
        this.ionForm.register(this);
        if (this.ionItem) {
            this.ionItem.setElementClass('item-select-search', true);
        }
    };
    SelectSearch.prototype.initFocus = function () { };
    SelectSearch.prototype._click = function (event) {
        if (event.detail === 0) {
            // Don't continue if the click event came from a form submit.
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        this.open();
    };
    SelectSearch.prototype.select = function (selectedItem) {
        this.value = selectedItem;
        this.emitChange();
    };
    SelectSearch.prototype.emitChange = function () {
        this.propagateChange(this.value);
        this.onChange.emit({
            component: this,
            value: this.value
        });
    };
    SelectSearch.prototype.emitSearch = function () {
        this.onSearch.emit({
            component: this,
            text: this.filterText
        });
    };
    SelectSearch.prototype.open = function () {
        this.navController.push(__WEBPACK_IMPORTED_MODULE_3__select_search_page__["a" /* SelectSearchPage */], {
            selectComponent: this,
            navController: this.navController
        });
    };
    SelectSearch.prototype.reset = function () {
        this.setValue(null);
        this.emitChange();
    };
    SelectSearch.prototype.formatItem = function (value) {
        if (this.itemTemplate) {
            return this.itemTemplate(value);
        }
        return value ? value[this.itemTextField] : null;
    };
    SelectSearch.prototype.formatValue = function () {
        var _this = this;
        if (!this.value) {
            return null;
        }
        if (this.multiple) {
            return this.value.map(function (item) { return _this.formatItem(item); }).join(', ');
        }
        else {
            return this.formatItem(this.value);
        }
    };
    SelectSearch.prototype.writeValue = function (value) {
        this.setValue(value);
    };
    SelectSearch.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    SelectSearch.prototype.registerOnTouched = function (fn) { };
    SelectSearch.prototype.setDisabledState = function (isDisabled) { };
    SelectSearch.prototype.ngOnDestroy = function () {
        this.ionForm.deregister(this);
    };
    SelectSearch.prototype.setValue = function (value) {
        var _this = this;
        this.value = value;
        // Get an item from the list for value.
        // We need this in case value contains only id, which is not sufficient for template rendering.
        if (this.value && !this.isNullOrWhiteSpace(this.value[this.itemValueField])) {
            var selectedItem = this.items.find(function (item) {
                return item[_this.itemValueField] === _this.value[_this.itemValueField];
            });
            if (selectedItem) {
                this.value = selectedItem;
            }
        }
    };
    SelectSearch.prototype.ngOnChanges = function (changes) {
        if (changes['items'] && this.items.length > 0) {
            this.setValue(this.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('items'),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectSearch.prototype, "items", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectSearch.prototype, "isSearching", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearch.prototype, "itemValueField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearch.prototype, "itemTextField", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectSearch.prototype, "canSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectSearch.prototype, "canReset", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearch.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SelectSearch.prototype, "searchPlaceholder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SelectSearch.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SelectSearch.prototype, "onSearch", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Function)
    ], SelectSearch.prototype, "itemTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectSearch.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [UIEvent]),
        __metadata("design:returntype", void 0)
    ], SelectSearch.prototype, "_click", null);
    SelectSearch = SelectSearch_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-search',template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\components\select-search\select-search.html"*/'<div class="select-search-label">{{title}}</div>\n<div class="select-search-value">{{formatValue()}}</div>\n<div class="select-search-icon">\n    <div class="select-search-icon-inner"></div>\n</div>\n<button aria-haspopup="true" ion-button="item-cover" class="item-cover"></button>\n'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\components\select-search\select-search.html"*/,
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
                    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return SelectSearch_1; }),
                    multi: true
                }],
            host: {
                'class': 'select-search',
                '[class.select-search-ios]': 'isIos',
                '[class.select-search-md]': 'isMd',
                '[class.select-search-can-reset]': 'canReset'
            }
        }),
        __param(3, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Optional */])()),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Form */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Item */]])
    ], SelectSearch);
    return SelectSearch;
    var SelectSearch_1;
}());

//# sourceMappingURL=select-search.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(82);
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
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="donal">\n\n    <ion-title>LoginPage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n \n\n<ion-content>\n\n  <div class="form">\n\n    <div class="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>\n\n \n\n\n\n    <ion-row class="login-form">\n\n        <ion-col>\n\n            <ion-list inset>\n\n \n\n              <ion-item>\n\n                <ion-label><ion-icon name="person"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="email" placeholder="Email" type="text"></ion-input>\n\n              </ion-item>\n\n \n\n              <ion-item>\n\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n\n                <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n\n              </ion-item>\n\n \n\n            </ion-list>\n\n \n\n            <button ion-button full (click)="login()" color="primary" class="login-button">Login</button>\n\n \n\n        </ion-col>\n\n    </ion-row>\n\n \n\n    <ion-row>\n\n        <ion-col>\n\n            <button ion-button (click)="launchSignup()" class="create-account">Create an Account</button>\n\n        </ion-col>\n\n    </ion-row>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__ = __webpack_require__(83);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\home\home.html"*/'<ion-header (load)="resize()" *ngFor="let course of courses">\n\n  <ion-navbar>\n\n    <ion-title text-wrap>\n\n      {{ course.courseName }}\n\n    </ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar>\n\n    <ion-segment padding [(ngModel)]="timetable">\n\n      <ion-segment-button value="monday">\n\n        Mon\n\n      </ion-segment-button>\n\n      <ion-segment-button value="tuesday">\n\n        Tue\n\n      </ion-segment-button>\n\n      <ion-segment-button value="wednesday">\n\n        Wed\n\n      </ion-segment-button>\n\n      <ion-segment-button value="thursday">\n\n        Thu\n\n      </ion-segment-button>\n\n      <ion-segment-button value="friday">\n\n        Fri\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content *ngFor="let course of courses">\n\n  <div [ngSwitch]="timetable">\n\n    <ion-list *ngSwitchCase="\'monday\'">\n\n      <ion-item-group *ngFor="let module of course.Monday" [hidden]="course.hide">\n\n        <ion-item-divider sticky>\n\n          <ion-label>\n\n            {{ module.startTime }}\n\n          </ion-label>\n\n        </ion-item-divider>\n\n  \n\n        <ion-item-sliding #slidingItem [hidden]="course.hide">\n\n  \n\n          <button ion-item (click)="toggleToolbar()">\n\n            <h3 text-wrap>{{ module.moduleName }}</h3>\n\n            <p>\n\n              {{ module.lecturer }}&mdash;\n\n              Room {{ module.room }}\n\n            </p>\n\n          </button>\n\n  \n\n        </ion-item-sliding>\n\n  \n\n      </ion-item-group>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'tuesday\'">\n\n        <ion-item-group *ngFor="let module of course.Tuesday" [hidden]="course.hide">\n\n            <ion-item-divider sticky>\n\n              <ion-label>\n\n                {{ module.startTime }}\n\n              </ion-label>\n\n            </ion-item-divider>\n\n      \n\n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n\n      \n\n              <button ion-item>\n\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n\n                <p>\n\n                    {{ module.lecturer }}&mdash;\n\n                    Room {{ module.room }}\n\n                </p>\n\n              </button>\n\n      \n\n            </ion-item-sliding>\n\n      \n\n          </ion-item-group>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'wednesday\'">\n\n        <ion-item-group *ngFor="let module of course.Wednesday" [hidden]="course.hide">\n\n            <ion-item-divider sticky>\n\n              <ion-label>\n\n                {{ module.startTime }}\n\n              </ion-label>\n\n            </ion-item-divider>\n\n      \n\n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n\n      \n\n              <button ion-item>\n\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n\n                <p>\n\n                    {{ module.lecturer }}&mdash;\n\n              Room {{ module.room }}\n\n                </p>\n\n              </button>\n\n      \n\n            </ion-item-sliding>\n\n      \n\n          </ion-item-group>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'thursday\'">\n\n        <ion-item-group *ngFor="let module of course.Thursday" [hidden]="course.hide">\n\n            <ion-item-divider sticky>\n\n              <ion-label>\n\n                {{ module.startTime }}\n\n              </ion-label>\n\n            </ion-item-divider>\n\n      \n\n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n\n      \n\n              <button ion-item>\n\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n\n                <p>\n\n                    {{ module.lecturer }}&mdash;\n\n                    Room {{ module.room }}\n\n                </p>\n\n              </button>\n\n      \n\n            </ion-item-sliding>\n\n      \n\n          </ion-item-group>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'friday\'">\n\n        <ion-item-group *ngFor="let module of course.Friday" [hidden]="course.hide">\n\n            <ion-item-divider sticky>\n\n              <ion-label>\n\n                {{ module.startTime }}\n\n              </ion-label>\n\n            </ion-item-divider>\n\n      \n\n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n\n      \n\n              <button ion-item>\n\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n\n                <p>\n\n                    {{ module.lecturer }}&mdash;\n\n              Room {{ module.room }}\n\n                </p>\n\n              </button>\n\n      \n\n            </ion-item-sliding>\n\n      \n\n          </ion-item-group>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"C:\Users\Donal\Desktop\Timetable App\TimetableApp\App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 83:
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

/***/ })

},[206]);
//# sourceMappingURL=main.js.map