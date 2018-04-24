webpackJsonp([6],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
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
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = (function () {
    function AccountPage(navCtrl, navParams, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('user').then(function (value) {
            _this.role = value.role;
            _this.courseId = value.courseId;
            _this.courseName = value.courseName;
            _this.email = value.email;
        });
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="donal">\n      <button ion-button menuToggle left>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(109);
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
            selector: 'page-login',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="donal">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n \n<ion-content>\n  <div class="form">\n    <div class="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg"/></div>\n \n    <ion-row class="login-form">\n        <ion-col>\n            <ion-list inset>\n \n              <ion-item>\n                <ion-label><ion-icon name="person"></ion-icon></ion-label>\n                <ion-input [(ngModel)]="email" placeholder="Email" type="text"></ion-input>\n              </ion-item>\n \n              <ion-item>\n                <ion-label><ion-icon name="lock"></ion-icon></ion-label>\n                <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n              </ion-item>\n \n            </ion-list>\n \n            <button ion-button full (click)="login()" color="primary" class="login-button">Login</button>\n \n        </ion-col>\n    </ion-row>\n \n    <ion-row>\n        <ion-col>\n            <button ion-button (click)="launchSignup()" class="create-account">Create an Account</button>\n        </ion-col>\n    </ion-row>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuleDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
 * Generated class for the ModuleDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModuleDetailPage = (function () {
    function ModuleDetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.module = this.navParams.data;
    }
    ModuleDetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ModuleDetailPage');
    };
    ModuleDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-module-detail',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/module-detail/module-detail.html"*/'<!--\n  Generated template for the ModuleDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="donal">\n    <ion-title>Details</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div *ngIf="module">\n        <h4>{{module.moduleName}}</h4>\n        <h6>Room: {{module.room}}</h6>\n        <h6>\n          From: {{module.startTime}} - {{module.endTime}}\n        </h6>\n        <h6>Lecturer:  {{module.lecturer}}</h6>\n        <h6>Type: {{module.moduleType}}</h6>\n        <h6> Duration: {{module.duration}}</h6>\n      </div>\n</ion-content>\n'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/module-detail/module-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ModuleDetailPage);
    return ModuleDetailPage;
}());

//# sourceMappingURL=module-detail.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(48);
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
            courseName: this.course.courseName,
            role: this.role
        };
        console.log(details);
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
            selector: 'page-signup',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar color="donal">\n        <ion-title>Create Account</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <div class="form">\n        <div class="thumbnail"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/169963/hat.svg" /></div>\n\n        <ion-row class="account-form">\n            <ion-col>\n                <ion-list inset>\n\n                    <ion-item>\n                        <ion-label>\n                            <ion-icon name="mail"></ion-icon>\n                        </ion-label>\n                        <ion-input [(ngModel)]="email" placeholder="Email" type="email"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>\n                            <ion-icon name="lock"></ion-icon>\n                        </ion-label>\n                        <ion-input [(ngModel)]="password" placeholder="Password" type="password"></ion-input>\n                    </ion-item>\n\n                    <ion-item>\n                        <ion-label>Role</ion-label>\n                        <ion-select [(ngModel)]="role">\n                            <ion-option value="student">Student</ion-option>\n                            <ion-option value="lecturer">Lecturer</ion-option>\n                            <ion-option value="moderator">Moderator</ion-option>\n                            <ion-option value="administrator">Administrator</ion-option>\n                        </ion-select>\n                    </ion-item>\n\n                    <ion-item-group margin-bottom>\n                        <ion-item>\n                            <select-search\n                                [(ngModel)]="course" \n                                title="Select Course" \n                                itemTextField="courseName" \n                                [items]="courses"\n                                [canSearch]="true" \n                                [multiple]="false" \n                                (onChange)="courseChange($event)">\n                            </select-search>\n                        </ion-item>\n                    </ion-item-group>\n                    <!-- <ion-item>\n                    <ion-label>Select Course</ion-label>\n                    <ion-select [(ngModel)]="courseId">\n                        <ion-option text-wrap *ngFor="let course of courses" value="{{course._id}}">{{course.courseName}}</ion-option>\n                    </ion-select>\n                 </ion-item> -->\n\n                </ion-list>\n\n                <button ion-button (click)="register()" class="continue-button">Register</button>\n\n            </ion-col>\n        </ion-row>\n    </div>\n</ion-content>'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 119:
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
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		289,
		5
	],
	"../pages/calender/calender.module": [
		288,
		4
	],
	"../pages/login/login.module": [
		290,
		3
	],
	"../pages/module-detail/module-detail.module": [
		291,
		2
	],
	"../pages/signup/signup.module": [
		293,
		1
	],
	"../pages/timetableview/timetableview.module": [
		292,
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Searchbar */])
    ], SelectSearchPage.prototype, "searchbarComponent", void 0);
    SelectSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'select-search-page',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/components/select-search/select-search-page.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{selectComponent.title}}</ion-title>\n    </ion-navbar>\n    <ion-toolbar *ngIf="selectComponent.canSearch">\n        <ion-searchbar\n            #searchbarComponent\n            [(ngModel)]="selectComponent.filterText"\n            (ionInput)="filterItems()"\n            [placeholder]="selectComponent.searchPlaceholder || \'Search\'">\n        </ion-searchbar>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <div class="select-search-spinner" *ngIf="selectComponent.isSearching">\n        <div class="select-search-spinner-background"></div>\n        <ion-spinner></ion-spinner>\n    </div>\n    <ion-list text-wrap no-margin *ngIf="filteredItems.length">\n        <button ion-item detail-none *ngFor="let item of filteredItems" (click)="select(item)">\n            <ion-icon\n                [name]="isItemSelected(item) ? \'checkmark-circle\' : \'radio-button-off\'"\n                [color]="isItemSelected(item) ? \'primary\' : \'daek\'"\n                item-left>\n            </ion-icon>\n            <h2>{{selectComponent.formatItem(item)}}</h2>\n        </button>\n    </ion-list>\n    <div *ngIf="!filteredItems.length" margin>No items found.</div>\n</ion-content>\n<ion-footer *ngIf="selectComponent.canReset || selectComponent.multiple">\n    <ion-toolbar padding>\n        <ion-row>\n            <ion-col no-padding *ngIf="selectComponent.canReset"\n                [attr.col-6]="selectComponent.canReset && selectComponent.multiple ? \'\' : null"\n                [attr.col-12]="selectComponent.canReset && !selectComponent.multiple ? \'\' : null">\n                <button ion-button full no-margin (click)="reset()" [disabled]="!selectedItems.length">\n                    Clear\n                </button>\n            </ion-col>\n            <ion-col no-padding *ngIf="selectComponent.multiple"\n                [attr.col-6]="selectComponent.canReset && selectComponent.multiple ? \'\' : null"\n                [attr.col-12]="!selectComponent.canReset && selectComponent.multiple ? \'\' : null">\n                <button ion-button full no-margin (click)="ok()">\n                    OK\n                </button>\n            </ion-col>\n        </ion-row>\n    </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/components/select-search/select-search-page.html"*/,
            host: {
                'class': 'select-search-page',
                '[class.select-search-page-can-reset]': 'selectComponent.canReset',
                '[class.select-search-page-multiple]': 'selectComponent.multiple'
            }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], SelectSearchPage);
    return SelectSearchPage;
}());

//# sourceMappingURL=select-search-page.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalenderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-calender',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/calender/calender.html"*/'<!--\n  Generated template for the CalenderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>calender</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="calendar-header">\n    <ion-row class="calendar-month">\n      <ion-col col-2 (click)="goToLastMonth()"><ion-icon name="arrow-back"></ion-icon></ion-col>\n      <ion-col col-8>{{currentMonth}} {{currentYear}}</ion-col>\n      <ion-col col-2 (click)="goToNextMonth()"><ion-icon name="arrow-forward"></ion-icon></ion-col>\n    </ion-row>\n  </div>\n  <div class="calendar-body">\n    <ion-grid>\n      <ion-row class="calendar-weekday">\n        <ion-col>Su</ion-col>\n        <ion-col>Mo</ion-col>\n        <ion-col>Tu</ion-col>\n        <ion-col>We</ion-col>\n        <ion-col>Th</ion-col>\n        <ion-col>Fr</ion-col>\n        <ion-col>Sa</ion-col>\n      </ion-row>\n      <ion-row class="calendar-date">\n        <ion-col col-1 *ngFor="let lastDay of daysInLastMonth" class="last-month">{{lastDay}}</ion-col>\n        <ion-col col-1 *ngFor="let day of daysInThisMonth">\n          <span class="currentDate" *ngIf="currentDate === day; else otherDate">{{day}}</span>\n          <ng-template #otherDate class="otherDate">{{day}}</ng-template>\n        </ion-col>\n        <ion-col col-1 *ngFor="let nextDay of daysInNextMonth" class="next-month">{{nextDay}}</ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/calender/calender.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], CalenderPage);
    return CalenderPage;
}());

//# sourceMappingURL=calender.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetableviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
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
            selector: 'page-timetableview',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/timetableview/timetableview.html"*/'<!--\n  Generated template for the TimetableviewPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>View Timetable</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let t of timetables" text-wrap>\n      {{t.courseName}}\n      <ion-list>\n        <ion-item *ngFor="let module of t.timetable" text-wrap>\n          {{ module.moduleName }}\n          <br> {{ module.lecturer }}\n          <br> {{ module.room }}\n          <br> {{ module.day }}\n          <br> {{ module.startTime }}\n          <br> {{ module.startTime }}\n          <br>\n        </ion-item>\n      </ion-list>\n    </ion-item>\n  </ion-list>\n\n  <ion-content>\n    <ion-card>\n    <ion-card-header>\n      Day of the week here\n    </ion-card-header>\n    <ion-card-content>\n      Information about the module, such as module name, location, lecturer etc.\n    </ion-card-content>\n  </ion-card>\n  </ion-content>\n\n\n'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/timetableview/timetableview.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], TimetableviewPage);
    return TimetableviewPage;
}());

//# sourceMappingURL=timetableview.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_timetableview_timetableview__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_timetables_timetables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_account_account__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_module_detail_module_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_select_search_select_search_module__ = __webpack_require__(286);
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
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_timetableview_timetableview__["a" /* TimetableviewPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_module_detail_module_detail__["a" /* ModuleDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__["a" /* CalenderPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_select_search_select_search_module__["a" /* SelectSearchModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/calender/calender.module#CalenderPageModule', name: 'CalenderPage', segment: 'calender', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/module-detail/module-detail.module#ModuleDetailPageModule', name: 'ModuleDetailPage', segment: 'module-detail', priority: 'low', defaultHistory: [] },
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
                __WEBPACK_IMPORTED_MODULE_14__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_module_detail_module_detail__["a" /* ModuleDetailPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_calender_calender__["a" /* CalenderPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_timetables_timetables__["a" /* TimetablesProvider */],
                __WEBPACK_IMPORTED_MODULE_11__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* Storage */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_account_account__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService) {
        this.authService = authService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.logout = function () {
        this.authService.logout();
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */]);
    };
    MyApp.prototype.gotoAccountPage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_6__pages_account_account__["a" /* AccountPage */]);
    };
    MyApp.prototype.gotoHomePage = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/app/app.html"*/'<ion-menu [content]="mycontent">\n    <ion-header>\n        <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button menuClose ion-item (click)="gotoHomePage()">\n                <ion-icon item-start name="calendar-outline"></ion-icon>\n                Timetable\n            </button>\n            <button menuClose ion-item (click)="gotoAccountPage()">\n                <ion-icon item-start name="contact-outline"></ion-icon>\n                Account\n            </button>\n            <button menuClose ion-item (click)="logout()">\n                <ion-icon item-start name="log-out-outline"></ion-icon>\n                Logout\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n<ion-nav #mycontent [root]="rootPage"></ion-nav>'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_7__providers_auth_auth__["a" /* AuthProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_search__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_search_page__ = __webpack_require__(205);
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

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__select_search_page__ = __webpack_require__(205);
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
            selector: 'select-search',template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/components/select-search/select-search.html"*/'<div class="select-search-label">{{title}}</div>\n<div class="select-search-value">{{formatValue()}}</div>\n<div class="select-search-icon">\n    <div class="select-search-icon-inner"></div>\n</div>\n<button aria-haspopup="true" ion-button="item-cover" class="item-cover"></button>\n'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/components/select-search/select-search.html"*/,
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* Form */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Item */]])
    ], SelectSearch);
    return SelectSearch;
    var SelectSearch_1;
}());

//# sourceMappingURL=select-search.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(162);
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
    AuthProvider.prototype.updateUser = function (details) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.storage.get('token').then(function (value) {
                _this.token = value;
                var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/json');
                headers.append('Authorization', _this.token);
                _this.http.post('https://donalburke.me/api/auth/updateUser', JSON.stringify(details), { headers: headers })
                    .subscribe(function (res) {
                    var data = res.json();
                    // this.token = data.token;
                    // this.storage.set('token', data.token);
                    _this.storage.set('user', data.user);
                    resolve(data);
                }, function (err) {
                    reject(err);
                });
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

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__module_detail_module_detail__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(32);
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
    function HomePage(navCtrl, authService, storage, modalCtrl, timetableProvider, alerCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.storage = storage;
        this.modalCtrl = modalCtrl;
        this.timetableProvider = timetableProvider;
        this.alerCtrl = alerCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
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
    HomePage.prototype.ionViewWillEnter = function () {
    };
    HomePage.prototype.showModuleDetails = function (module) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__module_detail_module_detail__["a" /* ModuleDetailPage */], module);
    };
    HomePage.prototype.resize = function () {
        this.content.resize();
    };
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Content */])
    ], HomePage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Segment */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Segment */])
    ], HomePage.prototype, "segment", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-home",template:/*ion-inline-start:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="donal">\n      <button ion-button menuToggle left>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>\n      Timetable\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar>\n    <ion-segment padding [(ngModel)]="timetable">\n      <ion-segment-button (ionSelect)="resize()" value="monday">\n        Mon\n      </ion-segment-button>\n      <ion-segment-button (ionSelect)="resize()" value="tuesday">\n        Tue\n      </ion-segment-button>\n      <ion-segment-button (ionSelect)="resize()" value="wednesday">\n        Wed\n      </ion-segment-button>\n      <ion-segment-button (ionSelect)="resize()" value="thursday">\n        Thu\n      </ion-segment-button>\n      <ion-segment-button (ionSelect)="resize()" value="friday">\n        Fri\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content *ngFor="let course of courses">\n  <div [ngSwitch]="timetable">\n    <ion-list *ngSwitchCase="\'monday\'">\n      <ion-item-group *ngFor="let module of course.Monday" [hidden]="course.hide">\n        <ion-item-divider sticky>\n          <ion-label>\n            {{ module.startTime }}\n          </ion-label>\n        </ion-item-divider>\n  \n        <ion-item-sliding #slidingItem [hidden]="course.hide">\n  \n          <button ion-item (click)="showModuleDetails(module)">\n            <h3 text-wrap>{{ module.moduleName }}</h3>\n            <p>\n              {{ module.lecturer }}&mdash;\n              Room {{ module.room }}\n            </p>\n          </button>\n          \n          <ion-item-options>\n              <button ion-button color="danger" (click)="deleteModule(todo)">\n                <ion-icon name="trash"></ion-icon>\n                Edit\n              </button>\n            </ion-item-options>\n        </ion-item-sliding>\n  \n      </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'tuesday\'">\n        <ion-item-group *ngFor="let module of course.Tuesday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item (click)="showModuleDetails(module)">\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n                    Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'wednesday\'">\n        <ion-item-group *ngFor="let module of course.Wednesday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item (click)="showModuleDetails(module)">\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n              Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'thursday\'">\n        <ion-item-group *ngFor="let module of course.Thursday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item (click)="showModuleDetails(module)">\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n                    Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'friday\'">\n        <ion-item-group *ngFor="let module of course.Friday" [hidden]="course.hide">\n            <ion-item-divider sticky>\n              <ion-label>\n                {{ module.startTime }}\n              </ion-label>\n            </ion-item-divider>\n      \n            <ion-item-sliding #slidingItem [hidden]="course.hide">\n      \n              <button ion-item (click)="showModuleDetails(module)">\n                <h3 text-wrap>{{ module.moduleName }}</h3>\n                <p>\n                    {{ module.lecturer }}&mdash;\n              Room {{ module.room }}\n                </p>\n              </button>\n      \n            </ion-item-sliding>\n      \n          </ion-item-group>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/donal/Desktop/APP/TimetableApp/App/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["a" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular_components_modal_modal_controller__["a" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_timetables_timetables__["a" /* TimetablesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* MenuController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimetablesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(162);
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

},[208]);
//# sourceMappingURL=main.js.map