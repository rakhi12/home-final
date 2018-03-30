webpackJsonp([26],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__payment_payment__ = __webpack_require__(177);
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
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConfirmPage = (function () {
    function ConfirmPage(navCtrl, navParams, dataprovider, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataprovider = dataprovider;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.param = navParams.get("providerID");
        this.param1 = localStorage.getItem("userData2");
        this.param2 = this.param1.User;
        console.log(this.param1);
        console.log(this.param2);
        this.getLocation();
    }
    ConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConfirmPage');
    };
    ConfirmPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ConfirmPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ConfirmPage.prototype.getLocation = function () {
        var _this = this;
        var locdata = JSON.parse(localStorage.getItem("userData2"));
        console.log(locdata);
        // console.log(localStorage.getItem("userData2"));
        var url = this.dataprovider.base_url + 'users/userinfo';
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            uid: this.param
        };
        var serialize = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialize, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    // this.start = 'mumbai';
                    _this.end = data.data.User.address;
                    console.log(_this.end);
                    //  this.start = 'chennai';
                    _this.start = locdata.User.address;
                    console.log(_this.start);
                    // console.log(localStorage.getItem('address'));
                    var directionsService = new google.maps.DirectionsService;
                    var directionsDisplay = new google.maps.DirectionsRenderer;
                    var map = new google.maps.Map(document.getElementById('map'), {
                        zoom: 7,
                        center: { lat: 41.85, lng: -87.65 }
                    });
                    directionsDisplay.setMap(map);
                    directionsService.route({
                        origin: _this.start,
                        destination: _this.end,
                        travelMode: 'DRIVING'
                    }, function (response, status) {
                        if (status === 'OK') {
                            directionsDisplay.setDirections(response);
                        }
                        else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    ConfirmPage.prototype.payment = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__payment_payment__["a" /* PaymentPage */]);
    };
    return ConfirmPage;
}());
ConfirmPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-confirm',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\confirm\confirm.html"*/'<!--\n  Generated template for the ConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>CONFIRM</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n\n\n<div id="map"></div>\n\n<button  ion-button block round color="theme" (click)="payment()" >NEXT</button>\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\confirm\confirm.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ConfirmPage);

//# sourceMappingURL=confirm.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongratulationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_projects__ = __webpack_require__(77);
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
 * Generated class for the CongratulationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CongratulationsPage = (function () {
    function CongratulationsPage(navCtrl, navParams, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        //this.user_id = localStorage.getItem("userData");
    }
    CongratulationsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CongratulationsPage');
    };
    CongratulationsPage.prototype.gotohome = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__projects_projects__["a" /* ProjectsPage */]);
    };
    return CongratulationsPage;
}());
CongratulationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-congratulations',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\congratulations\congratulations.html"*/'<!--\n  Generated template for the CongratulationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>congratulations</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="spacer"></div>\n\n\n<div class="box">\n\n\n\n<div class="check">\n<img src="assets/imgs/check1.png"/>\n</div>\n<h1> Congratulations!</h1>\n<p class="cong">Your payment has been processed successfully and your job is now ACTIVE</p>\n</div>\n	<button ion-button block round color="theme" class="top_lr" (click)="gotohome()">Back to job</button> \n \n	\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\congratulations\congratulations.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], CongratulationsPage);

//# sourceMappingURL=congratulations.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var LocationPage = (function () {
    function LocationPage(navCtrl, dataprovider, diagnostic, toastCtrl, loadingCtrl, app, navParams, http, alertCtrl, geolocation, fb, googlePlus, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.dataprovider = dataprovider;
        this.diagnostic = diagnostic;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.navParams = navParams;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.nativeGeocoder = nativeGeocoder;
        this.longitude1 = '';
        this.lattitude1 = '';
        this.fbdata = localStorage.getItem('fbData');
        this.googledata = localStorage.getItem('googleData');
        this.simpledata = localStorage.getItem('userData2');
        this.id = localStorage.getItem("userData");
        localStorage.removeItem('setActiveTab');
        this.cross = false;
        // console.log(JSON.parse(localStorage.getItem('userData')));
    }
    LocationPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    LocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LocationPage');
    };
    LocationPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                    console.log(self.autocompleteItems);
                });
            }
        });
    };
    LocationPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    LocationPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    LocationPage.prototype.chooseItem = function (item) {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        this.autocompleteItems = [];
        this.autocomplete.query = item.description;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.autocomplete.query + '&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
        Loader.present().then(function () {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data.results[0].geometry.location);
                _this.lat = data.results[0].geometry.location.lat;
                _this.long = data.results[0].geometry.location.lng;
                _this.autocomplete.location = data.results[0].geometry.location;
                _this.cross = true;
                var latLng = new google.maps.LatLng(_this.lat, _this.long);
                var mapOptions = {
                    draggable: true,
                    center: latLng,
                    zoom: 15,
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                };
                _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                var marker = new google.maps.Marker({
                    position: latLng,
                    draggable: true,
                    map: _this.map,
                });
                google.maps.event.addListener(marker, 'dragend', (function (markers) {
                    var latLng = markers.latLng;
                    _this.currentLatitude = latLng.lat();
                    _this.currentLongitude = latLng.lng();
                    console.log(_this.currentLatitude);
                    console.log(_this.currentLongitude);
                    var latLong = new google.maps.LatLng(_this.currentLatitude, _this.currentLongitude);
                    _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                        console.log(results);
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                _this.autocomplete.query = results[1].formatted_address;
                                _this.cross = true;
                                console.log("srishti");
                                console.log(_this.autocomplete.query);
                            }
                        }
                    }));
                }));
                Loader.dismiss();
            });
        });
    };
    LocationPage.prototype.crossclear = function () {
        this.autocomplete.query = '';
    };
    LocationPage.prototype.home = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    LocationPage.prototype.search = function (frm) {
        console.log('hh');
        console.log(this.long);
        console.log(this.lat);
        if (this.lat != null && this.long != null) {
            localStorage.setItem('lat', this.lat);
            localStorage.setItem('long', this.long);
            localStorage.setItem('location', this.autocomplete.query);
            localStorage.removeItem('provider_already_selected');
            localStorage.removeItem('providerType');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            //this.navCtrl.push(TabsPage);
        }
        else {
            this.showToast('There is an error');
        }
    };
    LocationPage.prototype.getCurrentLocation = function () {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            // alert('Is available? ' + isAvailable);
            if (isAvailable === true) {
                console.log('My current location');
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log(resp);
                    console.log(resp.coords.latitude);
                    console.log(resp.coords.longitude);
                    _this.lat = resp.coords.latitude;
                    _this.long = resp.coords.longitude;
                    localStorage.setItem('lat', _this.lat);
                    localStorage.setItem('long', _this.long);
                    var latLng = new google.maps.LatLng(_this.lat, _this.long);
                    var mapOptions = {
                        draggable: true,
                        center: latLng,
                        zoom: 15,
                        mapTypeId: google.maps.MapTypeId.ROADMAP,
                    };
                    _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
                    var marker = new google.maps.Marker({
                        position: latLng,
                        draggable: true,
                        map: _this.map,
                    });
                    var latLong = new google.maps.LatLng(_this.lat, _this.long);
                    _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                _this.autocomplete.query = results[1].formatted_address;
                                _this.cross = true;
                                console.log("srishti");
                                console.log(_this.autocomplete.query);
                            }
                        }
                    }));
                    google.maps.event.addListener(marker, 'dragend', (function (markers) {
                        var latLng = markers.latLng;
                        _this.lat = latLng.lat();
                        _this.long = latLng.lng();
                        var latLongdrag = new google.maps.LatLng(_this.lat, _this.long);
                        _this.geocoder.geocode({ 'latLng': latLongdrag }, (function (resultsdrag, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (resultsdrag[1]) {
                                    _this.autocomplete.query = resultsdrag[1].formatted_address;
                                    _this.cross = true;
                                }
                            }
                        }));
                    }));
                    /*	var postdata = {
                            uid: this.id,
                            lat: this.lattitude1,
                  long: this.longitude1
                        };
                        let headers = new Headers();
                        headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
                        let options = new RequestOptions({ headers: headers });
                        var url = this.dataprovider.base_url + 'users/userChooseCurrentLocation';
                        var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
                            content: ' ',
                        });
                        var Serialized = this.serializeObj(postdata);
                        Loader.present().then(() => {
                        this.http.post(url, Serialized, options).map(res => res.json())
                            .subscribe(data => {
                                Loader.dismiss();
                    console.log(data);
                                if (data.status === true ) {
                      
                    //  alert(data.data.User.address);
                    localStorage.setItem('location',data.data.User.address);
                    //this.navCtrl.push(TabsPage);
                                }
                            }, err => {
                                console.log("Error");
                                Loader.dismiss();
                                console.log("Error!:", err);
                            });
                         })*/
                }).catch(function (error) {
                    console.log('Error getting location', error);
                    _this.showToast('There is an error for getting location');
                });
            }
            else {
                _this.showToast('Please turn on your location');
            }
        }).catch(function (e) {
            alert(JSON.stringify(e));
        });
    };
    LocationPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
    };
    return LocationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], LocationPage.prototype, "mapElement", void 0);
LocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-location',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\location\location.html"*/'<!--\n  Generated template for the LocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LOCATION</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<form #heroForm="ngForm" novalidate class="signup_form">\n<ion-list class="loclist">\n <ion-icon class="clzicn" *ngIf="cross" (click)="crossclear()" name="close"></ion-icon> \n  <ion-item>\n    <ion-label stacked class="plzz_sms">Please enter below the location of the work you are offering to potential service providers</ion-label>\n	 \n    <ion-input class="location_sss" type="text" name="query" [(ngModel)]="autocomplete.query" (input)="updateSearch()" #query="ngModel" required></ion-input>\n    <!--#query="ngModel"-->\n\n    \n  </ion-item>\n<ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">{{ item.description }} </ion-item>\n  \n\n</ion-list>\n\n \n\n<button ion-button block round class="current btns" (click)="getCurrentLocation()">USE MY CURRENT LOCATION</button>\n<button ion-button round type="submit" color="theme" class="btnsnxt" [disabled]="!heroForm.form.valid" (click)="search(heroForm)">NEXT</button>\n\n</form>\n\n<div #map id="map"></div>\n\n\n  \n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\location\location.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__["a" /* Diagnostic */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_10__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], LocationPage);

//# sourceMappingURL=location.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__servicerepair_servicerepair__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(6);
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
 * Generated class for the CategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoryPage = (function () {
    function CategoryPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.catinfo = {};
        this.catid = navParams.get('catId');
        this.getSubCats();
    }
    CategoryPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CategoryPage');
    };
    CategoryPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    CategoryPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    CategoryPage.prototype.getSubCats = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'subCategories/subcatbyid';
        var postdata = {
            cat_id: this.catid
        };
        var serialized_all = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialized_all, options).map(function (res) { return res.json(); })
                .subscribe(function (datas) {
                Loader.dismiss();
                console.log(datas);
                if (datas.isSuccess == true) {
                    _this.catinfo = datas.cat.Category;
                    _this.subcategories = datas.data;
                }
                else {
                    _this.showToast(datas.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    CategoryPage.prototype.servicerepair = function (subcatid, catId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__servicerepair_servicerepair__["a" /* ServicerepairPage */], { subcatid: subcatid, catId: catId });
    };
    return CategoryPage;
}());
CategoryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-category',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\category\category.html"*/'<!--\n  Generated template for the CategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{catinfo.name}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<ion-list class="box" *ngFor="let subcat of subcategories">\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="{{subcat.SubCategory.image}}">\n    </ion-avatar>\n    <h2 (click)="servicerepair(subcat.SubCategory.id,catinfo.id)">{{subcat.SubCategory.name}}</h2>\n    \n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\category\category.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], CategoryPage);

//# sourceMappingURL=category.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicerepairPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutservice_aboutservice__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__address_address__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(20);
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
 * Generated class for the ServicerepairPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicerepairPage = (function () {
    function ServicerepairPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app, builder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.builder = builder;
        this.subcat = '';
        this.data = '';
        this.myForm = builder.group({
            worksites: builder.array([])
        });
        this.cat = navParams.get("catId");
        this.subCat = navParams.get("subcatid");
        this.aboutservice();
    }
    ServicerepairPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicerepairPage');
    };
    ServicerepairPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ServicerepairPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ServicerepairPage.prototype.updateCheckedOptions = function (location, isChecked) {
        var worksites = this.myForm.controls.worksites;
        if (isChecked) {
            worksites.push(new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](location.name));
            console.log(worksites.value);
            localStorage.removeItem('serviceItems');
            localStorage.setItem('serviceItems', JSON.stringify(worksites.value));
        }
        else {
            var index = worksites.controls.findIndex(function (x) { return x.value == location.name; });
            console.log(index);
            worksites.removeAt(index);
            console.log(worksites.value);
            localStorage.removeItem('serviceItems');
            localStorage.setItem('serviceItems', JSON.stringify(worksites.value));
        }
    };
    ServicerepairPage.prototype.aboutservice = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'services/allservice';
        var postdata = {
            catid: this.cat,
            subcatid: this.subCat
        };
        //alert(JSON.stringify(postdata));
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            var serializ = _this.serializeObj(postdata);
            _this.http.post(url, serializ, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSuccess == 'true') {
                    _this.services = data.data.Service;
                    _this.subcat = data.data.SubCat.SubCategory;
                }
                else {
                    _this.services = data.data.Service;
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    ServicerepairPage.prototype.addToCart = function () {
        var already_provider = localStorage.getItem('provider_already_selected');
        if (already_provider == null) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__aboutservice_aboutservice__["a" /* AboutservicePage */]);
        }
        else {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__address_address__["a" /* AddressPage */]);
        }
    };
    return ServicerepairPage;
}());
ServicerepairPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-servicerepair',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\servicerepair\servicerepair.html"*/'<!--\n  Generated template for the ServicerepairPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{subcat?.name}}</ion-title>\n\n  \n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content  >\n\n<div class="imgbx">\n<img src="{{subcat?.image}}"/>\n</div>\n<div class="nodata" *ngIf="!services?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n<form *ngIf="services?.length" #heroForm="ngForm"novalidate class="chklist" padding>\n<ion-list>\n<p>{{subcat?.name}}</p>\n   <ion-item *ngFor="let service of services">\n\n        \n       <ion-label>\n                        {{service.Service.name}}\n                   </ion-label>\n                     <ion-checkbox (ionChange)="updateCheckedOptions(service.Service, $event.checked)"></ion-checkbox>\n  \n\n     \n   </ion-item>\n </ion-list>\n<button ion-button block round type="submit" color="theme" (click)="addToCart()">Next</button>\n</form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\servicerepair\servicerepair.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
], ServicerepairPage);

//# sourceMappingURL=servicerepair.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacypolicyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
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
 * Generated class for the PrivacypolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PrivacypolicyPage = (function () {
    function PrivacypolicyPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = {};
        this.policy();
    }
    PrivacypolicyPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    PrivacypolicyPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PrivacypolicyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PrivacypolicyPage');
    };
    PrivacypolicyPage.prototype.policy = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'staticpages/view';
        var postdata = {
            page: 'policy'
        };
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.status === true) {
                    _this.data = data;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    PrivacypolicyPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return PrivacypolicyPage;
}());
PrivacypolicyPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-privacypolicy',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\privacypolicy\privacypolicy.html"*/'<!--\n  Generated template for the PrivacypolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>PRIVACY POLICY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="policy">\n<h1>PRIVACY POLICY</h1>\n	<p>{{data.desc}}</p>\n</div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\privacypolicy\privacypolicy.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], PrivacypolicyPage);

//# sourceMappingURL=privacypolicy.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__termscondition_termscondition__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var SignupPage = (function () {
    function SignupPage(navCtrl, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app, facebook, fb, googlePlus, diagnostic, geolocation, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.facebook = facebook;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.searchQuery = '';
        this.userfbdata = '';
        this.data = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            postal: '',
            city: '',
            address: '',
            password: '',
            cpassword: '',
            country: 'Kenya',
            sel_country: '',
        };
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.country();
        this.buttonClicked = false;
        this.buttonClickedprofession = false;
    }
    SignupPage.prototype.ngOnInit = function () {
        this.geocoder = new google.maps.Geocoder();
    };
    SignupPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    SignupPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SignupPage.prototype.country = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'countries/countries';
        //	var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
        //		content: ' ',
        //	});
        //	Loader.present().then(() => {
        this.http.get(url, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //			Loader.dismiss();
            console.log(data);
            if (data.status === true) {
                // this.items=data.data;
                _this.countries = data.data;
                console.log(data.data);
                //	this.showToast(data.response);
            }
        }, function (err) {
            console.log("Error");
            //		Loader.dismiss();
            console.log("Error!:", err);
        });
        // })
    };
    SignupPage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // this.country();
        var _this = this;
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(ev.target.value);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.countries.filter(function (item) {
                console.log(item);
                _this.buttonClicked = true;
                return (item.Country.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.buttonClicked = false;
        }
    };
    SignupPage.prototype.mcqAnswer = function (questionID) {
        console.log(questionID);
        this.data.country = this.data.sel_country;
        console.log(this.data);
        this.buttonClicked = false;
    };
    SignupPage.prototype.signUp = function (signup2) {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (isAvailable === true) {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log(resp);
                    console.log(resp.coords.latitude);
                    console.log(resp.coords.longitude);
                    _this.lat = resp.coords.latitude;
                    _this.long = resp.coords.longitude;
                    localStorage.setItem('lat', _this.lat);
                    localStorage.setItem('long', _this.long);
                    var latLong = new google.maps.LatLng(_this.lat, _this.long);
                    _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                localStorage.setItem('location', results[1].formatted_address);
                                var token = localStorage.getItem('tokenId');
                                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                                var options_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                var url = _this.dataprovider.base_url + 'users/registration';
                                var postdata = {
                                    firstname: signup2.value.firstname,
                                    lastname: signup2.value.lastname,
                                    role: 'user',
                                    status: 1,
                                    email: signup2.value.email,
                                    phone: signup2.value.phone,
                                    country: signup2.value.country,
                                    city: signup2.value.city,
                                    address: signup2.value.address,
                                    postalcode: signup2.value.postal,
                                    password: signup2.value.password,
                                    push_token: token
                                };
                                console.log(" postdata" + JSON.stringify(postdata));
                                var Loader = _this.loadingCtrl.create({
                                    content: ' ',
                                });
                                if (signup2.value.terms == false) {
                                    var toast = _this.toastCtrl.create({
                                        message: "Please accept terms and conditions",
                                        duration: 5000,
                                        position: 'middle'
                                    });
                                    toast.present();
                                }
                                else {
                                    if (signup2.value.password != signup2.value.cpassword) {
                                        _this.showToast('Both passwords are not matching!');
                                    }
                                    else {
                                        Loader.present().then(function () {
                                            var Serialized = _this.serializeObj(postdata);
                                            _this.http.post(url, Serialized, options_1).map(function (res) { return res.json(); })
                                                .subscribe(function (data) {
                                                Loader.dismiss();
                                                if (data.status === true) {
                                                    localStorage.setItem("userData", data.data.User.id);
                                                    console.log(data.data.User.id);
                                                    localStorage.setItem("userData2", JSON.stringify(data.data));
                                                    // localStorage.setItem("user_image",imgUrl+data.data.profile_picture);
                                                    // localStorage.setItem("wallet", data.data.wallet);
                                                    _this.showToast(data.msg);
                                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
                                                }
                                                else {
                                                    _this.showToast(data.msg);
                                                }
                                            }, function (err) {
                                                console.log("Error");
                                                Loader.dismiss();
                                                console.log("Error!:", err);
                                            });
                                        });
                                    }
                                }
                            }
                        }
                    }));
                }).catch(function (error) {
                    console.log('Error getting location', error);
                    _this.showToast('There is an error for getting location');
                });
            }
            else {
                _this.showToast('Please turn on your location');
            }
        }).catch(function (e) {
            alert(JSON.stringify(e));
        });
    };
    SignupPage.prototype.facebookLogin = function () {
        var _this = this;
        alert("into ron fb");
        var permissions = new Array();
        var nav = this.navCtrl;
        //the permissions your facebook app needs from the user
        permissions = ['public_profile', 'user_friends', 'email'];
        this.fb.login(permissions)
            .then(function (response) {
            // alert("response");
            // alert(response);
            alert(JSON.stringify(response));
            var userId = response.authResponse.userID;
            var params = new Array();
            //Getting name and gender properties
            _this.fb.api("/me?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name,picture", params)
                .then(function (fduser) {
                // alert("user");
                // alert(user);
                alert("rony" + JSON.stringify(fduser));
                fduser.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                //now we have the users info, let's save it in the NativeStorage
                var postdata = {
                    email: fduser.email,
                    name: fduser.name,
                    fbId: fduser.id,
                    image: fduser.picture,
                    phone: '',
                    role: 'user',
                };
                alert(JSON.stringify(postdata));
                //console.log(postdata);
                // alert("kkk");
                var serialized_all = _this.serializeObj(postdata);
                var url = _this.dataprovider.base_url + 'users/fblogin';
                alert("hisjjsfjjasf");
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                _this.http.post(url, serialized_all, options)
                    .map(function (res) { return res.json(); })
                    .subscribe(function (response) {
                    console.log(response);
                    alert(JSON.stringify(response));
                    var res1 = JSON.stringify(response);
                    var sta = JSON.parse(res1);
                    // alert(response);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__location_location__["a" /* LocationPage */]);
                    if (response.status == true) {
                        localStorage.setItem("userData", response.data.User.id);
                        //  localStorage.setItem("fbuserData", response.data.User.id);
                        alert(response.data.User.id);
                        localStorage.setItem("fbData", response.data.User);
                        var toast = _this.toastCtrl.create({
                            message: response.data.user.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                    else {
                        var toast = _this.toastCtrl.create({
                            message: response.data.user.msg,
                            duration: 3000,
                            position: 'middle'
                        });
                        toast.present();
                    }
                }, function (err) {
                    // alert("bb");
                    // alert(err);
                });
            });
        })
            .catch(function (e) { return console.log('Error logging into Facebook', e); });
    };
    SignupPage.prototype.google_plus = function () {
        var _this = this;
        alert("naveen");
        this.googlePlus.login({})
            .then(function (res) {
            console.log(res);
            alert("naveen1");
            alert(JSON.stringify(res));
            //  alert(res.displayName);
            //  alert(JSON.stringify(res.idToken));
            // this.name_google = res.displayName;
            //  alert('googlename');
            //  alert(JSON.stringify(this.name_google));
            // firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
            // .then( success => {
            //      alert("Firebase success: " + JSON.stringify(success));
            //      this.google_data = success;
            var data_google = {
                //username : res.displayName,
                // name : this.name_google,
                google_id: res.userId,
                // image : res.imageURL,
                email: res.email,
                firstname: res.givenName,
                lastname: res.familyName
            };
            alert('google data');
            alert(JSON.stringify(data_google));
            var serialized_all = _this.serializeObj(data_google);
            var url = _this.dataprovider.base_url + 'users/googlelogin';
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
            var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
            // var url: string =  this.dataprovider.base_url + this.dataprovider.GOOGLE_API;
            var serialized_google = _this.serializeObj(data_google);
            console.log(serialized_google);
            _this.http.post(url, serialized_google, options).map(function (res) { return res.json(); }).subscribe(function (datarestgoogle) {
                _this.Loading.dismiss();
                alert('api');
                alert(JSON.stringify(datarestgoogle));
                // alert(datarestgoogle);
                if (datarestgoogle.status == true) {
                    alert(JSON.stringify(datarestgoogle));
                    localStorage.setItem('userData', datarestgoogle.data.User.id);
                    //  localStorage.setItem('googleuserData',datarestgoogle.data.User.id);
                    localStorage.setItem('googleData', datarestgoogle.data.user);
                    var toast = _this.toastCtrl.create({
                        message: datarestgoogle.msg,
                        duration: 3000
                    });
                    toast.present();
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__location_location__["a" /* LocationPage */]);
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: datarestgoogle.msg,
                        duration: 3000
                    });
                    toast.present();
                    _this.googlePlus.logout()
                        .then(function (response) {
                        localStorage.removeItem("GOOGLEUSERID");
                        localStorage.clear();
                    });
                }
            });
        }, function (error) {
            _this.Loading.dismiss();
            alert('error');
            alert(JSON.stringify(error));
        });
        // }
        // , error => {
        //  this.Loading.dismiss();
        //  alert('error');
        //   alert(JSON.stringify(error));
        // });
    };
    SignupPage.prototype.to_signin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    SignupPage.prototype.tc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__termscondition_termscondition__["a" /* TermsconditionPage */]);
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\signup\signup.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title class="header-title">SIGN UP</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n	<ion-slides pager>\n		<ion-slide>\n			<img src="assets/imgs/slide-one.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-two.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-three.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-four.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-five.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n	</ion-slides><!-- Slide End Here -->\n	<div class="page-bottom" padding>\n		\n		<div class="form-sec">\n			<form #heroForm="ngForm"novalidate class="signup_form">\n				<ion-list>\n					<ion-item>\n						<ion-label floating>First Name</ion-label>\n						<ion-input  [(ngModel)]="data.firstname" name="firstname" type="text" id="firstname" required #firstname="ngModel"></ion-input>\n\n						<div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)" class="alert alert-danger">\n						<div [hidden]="!firstname.errors.required" class="alert alert-danger">\n							First name is required\n						</div>\n						</div>\n					</ion-item>\n					\n					<ion-item>\n						<ion-label floating>Last Name</ion-label>\n						<ion-input  [(ngModel)]="data.lastname" name="lastname" type="text" id="lastname" required #lastname="ngModel"></ion-input>\n\n						<div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)" class="alert alert-danger">\n						<div [hidden]="!lastname.errors.required" class="alert alert-danger">\n							Last name is required\n						</div>\n						</div>\n					</ion-item>\n					\n					<ion-item>\n						<ion-label floating>Email Address</ion-label>\n						<ion-input  [(ngModel)]="data.email" name="email" type="email" id="email" required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' #email="ngModel"></ion-input>\n    \n						<div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n						<div [hidden]="!email.errors.required" class="alert alert-danger">\n							Email is required\n							</div>\n							<div [hidden]="!email.errors.pattern" class="alert alert-danger">\n							In-valid email\n							</div>\n						</div>\n					</ion-item>\n					\n					<ion-item>\n						<ion-label floating>Mobile Number</ion-label>\n						<ion-input  [(ngModel)]="data.phone" name="phone" type="text" id="phone" maxlength="12" required pattern=\'[0-9]*\' #phone="ngModel"></ion-input>\n  \n						<div *ngIf="phone.errors && (phone.dirty || phone.touched)" class="alert alert-danger">\n						<div [hidden]="!phone.errors.required" class="alert alert-danger">\n							Phone number is required\n							</div>\n							<div [hidden]="!phone.errors.pattern" class="alert alert-danger">\n							In-valid phone number\n							</div>\n						</div>\n					</ion-item>\n					<ion-item>\n						<ion-label floating>Postal Address</ion-label>\n						<ion-input  [(ngModel)]="data.postal" name="postal" type="text" id="postal" required #postal="ngModel"></ion-input>\n						<div *ngIf="postal.errors && (postal.dirty || postal.touched)" class="alert alert-danger">\n						<div [hidden]="!postal.errors.required" class="alert alert-danger">\n							Postal code is required\n						</div>\n						</div>\n					</ion-item>\n					<ion-item>\n						<ion-label floating>City/Town</ion-label>\n						<ion-input  [(ngModel)]="data.city" name="city" type="text" id="city" required #city="ngModel"></ion-input>\n                        <div *ngIf="city.errors && (city.dirty || city.touched)" class="alert alert-danger">\n						<div [hidden]="!city.errors.required" class="alert alert-danger">\n							City/Town is required\n						</div>\n						</div>\n                       \n					</ion-item>\n					<!--<ion-item>\n						<ion-label floating>Country</ion-label>\n						<ion-select [(ngModel)]="data.country" name="country" id="country" required  #country="ngModel">\n						<ion-option *ngFor="let name of countries" value="{{name.Country.country_name}}">{{name.Country.country_name}}</ion-option>\n						</ion-select>\n					\n						<div *ngIf="country.errors && (country.dirty || country.touched)" class="alert alert-danger">\n						<div [hidden]="!country.errors.required" class="alert alert-danger">\n							Country is required\n						</div>\n						</div>\n					</ion-item>-->\n                      \n					  <div class="search_field">\n                   <ion-label style="color:#999;font-size: 1.6rem;margin-top: 35px;">Country</ion-label>	\n					 <ion-searchbar style="padding: 3px 0px;" placeholder="Country" (ionInput)="getItems($event)" autocorrect="off" [(ngModel)]="data.country" name="country" id="country" required #country="ngModel"></ion-searchbar>			\n					\n                    <ion-list *ngIf="buttonClicked" radio-group [(ngModel)]="data.sel_country" name="sel_country">\n\n                    <ion-item *ngFor="let item of items">\n                    <ion-label>{{item.Country.country_name}}</ion-label>\n                    <ion-radio (ionSelect)="mcqAnswer(item.Country.country_name)" value="{{item.Country.country_name}}" ></ion-radio>\n                    </ion-item>\n\n                    </ion-list>   \n			\n					<ion-label class="alert alert-danger" color="danger" no-margin>\n						<div *ngIf="country.errors && (country.dirty || country.touched)" class="alert alert-danger">\n						<div [hidden]="!country.errors.required" class="alert alert-danger">\n							Country is required\n						</div>\n						</div>\n					 </ion-label> \n					  </div>\n					  \n					  \n					<ion-item>\n						<ion-label floating>Physical Address</ion-label>\n						<ion-input  [(ngModel)]="data.address" name="address" type="text" id="address" required #address="ngModel"></ion-input>\n   \n						<div *ngIf="address.errors && (address.dirty || address.touched)" class="alert alert-danger">\n						<div [hidden]="!address.errors.required" class="alert alert-danger">\n							Physical Address is required\n						</div>\n						</div>\n					</ion-item>\n\n					<ion-item>\n						<ion-label floating>Password</ion-label>\n						<ion-input  [(ngModel)]="data.password" name="password" type="password" id="password" required minlength="6" maxlength="50"  #password="ngModel"></ion-input>\n    \n						<div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n						<div [hidden]="!password.errors.required" class="alert alert-danger">\n							Password is required\n							</div>\n					    <div [hidden]="!password.errors.minlength" class="alert alert-danger">\n							Minimum length should be 6\n							</div>\n						</div>\n					</ion-item>\n					\n					<ion-item>\n						<ion-label floating>Confirm Password</ion-label>\n						<ion-input  [(ngModel)]="data.cpassword" name="cpassword" type="password" id="cpassword" validateEqual="password" required #cpassword="ngModel"></ion-input>\n    \n						<div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" class="alert alert-danger">\n						<div [hidden]="!cpassword.errors.required" class="alert alert-danger">\n							Confirm password is required\n							</div>\n						</div>\n					</ion-item>\n					\n				<div class="check_box">\n				<ion-grid no-padding>\n				<ion-row>\n				<ion-col col-1>\n                <ion-checkbox checked="false" [(ngModel)]="data.terms" name="terms" id="terms"></ion-checkbox>\n				</ion-col>\n				<ion-col col-11>\n                <ion-label>I agree to <span class="tnc" (click)="tc()"> the terms and conditions</span></ion-label>\n				</ion-col>\n				</ion-row>\n				</ion-grid>\n           </div>\n					\n					<ion-item class="butn">\n						<button class="signn" ion-button (click)="to_signin()">Sign In</button>\n						\n					</ion-item>\n				</ion-list>\n\n				<button ion-button block type="submit" color="theme" [disabled]="!heroForm.form.valid" (click)="signUp(heroForm)">Sign Up</button>\n			</form>\n		</div>\n		<div class="bottom-sec">\n			<h5><span>Or sign in with</span></h5>\n			<div class="button-sec">\n				<button ion-button (click)="facebookLogin()"><ion-icon name="logo-facebook"></ion-icon> Facebook</button>\n				<button ion-button (click)="google_plus()"><ion-icon name="logo-googleplus"></ion-icon> Google</button>\n			</div>\n		</div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\signup\signup.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_services__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servicerepair_servicerepair__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_category__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__ = __webpack_require__(68);
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
    function HomePage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app, nativeGeocoder, geolocation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.nativeGeocoder = nativeGeocoder;
        this.geolocation = geolocation;
        this.servicecat = '';
        this.data = '';
        this.lat = localStorage.getItem('lat');
        this.long = localStorage.getItem('long');
        this.searchlocation = localStorage.getItem('location');
        this.services();
        this.getcats();
    }
    HomePage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.geocoder = new google.maps.Geocoder();
        this.autocompleteItems = [];
        this.autocomplete = {
            query: ''
        };
    };
    HomePage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    HomePage.prototype.backlocation = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */]);
    };
    HomePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HomePage.prototype.allservices = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__services_services__["a" /* ServicesPage */], { lat: this.lat, long: this.long });
    };
    HomePage.prototype.aboutservice = function (subcatid, catId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__servicerepair_servicerepair__["a" /* ServicerepairPage */], { subcatid: subcatid, catId: catId });
    };
    HomePage.prototype.seeservice = function (catId) {
        console.log(catId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__category_category__["a" /* CategoryPage */], { catId: catId });
    };
    // servicesbycategory(){
    // 	this.navCtrl.push(HomePage);
    // }
    HomePage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.autocomplete.query == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.autocomplete.query,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                    console.log(self.autocompleteItems);
                });
            }
        });
    };
    HomePage.prototype.choose = function (item) {
        console.log(item);
        this.autocompleteItems = [];
        localStorage.removeItem('location');
        this.autocomplete.query = item.description;
        console.log(this.autocomplete.query);
        localStorage.setItem('location', item.description);
    };
    HomePage.prototype.chooseItem = function (item) {
        var _this = this;
        console.log(item);
        console.log('rk');
        this.autocompleteItems = [];
        console.log(this.autocomplete.query);
        // this.autocomplete.query = item.description;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.autocomplete.query + '&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data.results[0].geometry.location);
            _this.lat = data.results[0].geometry.location.lat;
            _this.long = data.results[0].geometry.location.lng;
            _this.autocomplete.location = data.results[0].geometry.location;
            console.log(location);
            localStorage.removeItem('lat');
            localStorage.removeItem('long');
            console.log(_this.lat + '-' + _this.long);
            localStorage.setItem('lat', _this.lat);
            localStorage.setItem('long', _this.long);
            localStorage.removeItem('provider_already_selected');
            localStorage.removeItem('providerType');
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
        });
    };
    /*search()
  {
    console.log(this.lat+'-'+this.long);
     localStorage.setItem('lat',this.lat);
     localStorage.setItem('long',this.long);
     localStorage.setItem('location',this.autocomplete.query);
     this.navCtrl.push(TabsPage);
     //this.navCtrl.push(TabsPage);
     
  }*/
    HomePage.prototype.services = function () {
        var _this = this;
        //this.navCtrl.push(ServicesPage);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'services/searchservice';
        var postdata = {
            lat: this.lat,
            long: this.long
        };
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            var Serialized = _this.serializeObj(postdata);
            _this.http.post(url, Serialized, options).map(function (res) { return res.json(); })
                .subscribe(function (datas) {
                Loader.dismiss();
                console.log(datas);
                if (datas.isSuccess == 'true') {
                    _this.cats = datas.data;
                    console.log('hhh');
                    console.log(_this.cats);
                }
                else {
                    _this.showToast(datas.msg);
                    _this.cats = datas.data;
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    HomePage.prototype.getcats = function () {
        var _this = this;
        //this.navCtrl.push(ServicesPage);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'services/searchservice';
        var postdata = {
            lat: this.lat,
            long: this.long
        };
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            var Serialized = _this.serializeObj(postdata);
            _this.http.post(url, Serialized, options).map(function (res) { return res.json(); })
                .subscribe(function (datas) {
                Loader.dismiss();
                console.log(datas);
                if (datas.isSuccess == 'true') {
                    _this.catssln = datas.data.length;
                    console.log(_this.catssln);
                    _this.catss = datas.data;
                    console.log('hhh');
                }
                else {
                    _this.showToast(datas.msg);
                    _this.catssln = '0';
                    console.log(_this.catssln);
                    _this.catss = datas.data;
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    HomePage.prototype.servicesbycategory = function (data) {
        var _this = this;
        console.log(data.value.Search);
        console.log(data.value.servicecat);
        console.log(data.value.service);
        if (!data.value.servicecat && !data.value.Search && !data.value.service) {
            this.showToast('Please fill all fields');
        }
        else if (!data.value.servicecat) {
            this.showToast('Please select service category');
        }
        else if (!data.value.Search) {
            this.showToast('Please enter service search radius in km');
        }
        else if (!data.value.service) {
            this.showToast('Please select provider type');
        }
        else {
            localStorage.setItem('provider_already_selected', data.value.service);
            localStorage.removeItem('providerType');
            //this.navCtrl.push(ServicesPage);
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var url = this.dataprovider.base_url + 'services/searchservicebytype';
            var postdata = { lat: this.lat,
                long: this.long,
                cat_id: data.value.servicecat,
                provider_type: data.value.service,
                distance: data.value.Search
            };
            console.log("postdata");
            console.log(postdata);
            var serialized_data = this.serializeObj(postdata);
            var Loader = this.loadingCtrl.create({
                content: ' ',
            });
            Loader.present().then(function () {
                _this.http.post(url, serialized_data, options_1).map(function (res) { return res.json(); })
                    .subscribe(function (datas) {
                    Loader.dismiss();
                    console.log(datas);
                    if (datas.isSuccess == 'true') {
                        _this.cats = datas.data;
                        console.log(_this.cats);
                    }
                    else {
                        _this.cats = datas.data;
                        _this.showToast(datas.msg);
                    }
                }, function (err) {
                    console.log("Error");
                    Loader.dismiss();
                    console.log("Error!:", err);
                });
            });
        }
    };
    HomePage.prototype.location = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__location_location__["a" /* LocationPage */]);
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar color="theme" hideBackButton padding class="pading_zro">\n  \n\n   <ion-buttons class="box" >\n   \n     <ion-grid style="padding-left: 0px;">\n            <ion-row>\n                <ion-col col-7 style="padding-left: 0px;">\n   <div class="wrt_lft" >\n    <h2>Current work location  </h2>\n</div>\n    </ion-col>\n\n    <ion-col col-5>\n	<button  class="loctn" ion-button color="dark" (click)="backlocation()">CHANGE <br /> LOCATION</button>\n      \n      \n    </ion-col> \n   \n  </ion-row>\n</ion-grid>\n   \n   \n     <form #heroForm1="ngForm" novalidate class="signup_form"> \n      <!-- <form #heroForm="ngForm" > -->\n      \n      <div class="heading">\n        <!--<h1>Change location</h1>-->\n		<h3>{{searchlocation}}</h3>\n      </div>\n\n</form>\n\n\n     <!--<div class="srchbox">\n     <div class="imgbox imgset"><img src="assets/imgs/search2.png"/></div>\n     <div class="inputbox"><input type="text" name="" placeholder="Search For Services"></div>\n    </div>-->\n\n    <form #heroForm="ngForm" novalidate class="signup_form"> \n\n    <ion-input class="txtbx change" required placeholder= "Enter search radius in km" name="Search" [(ngModel)]="data.Search" type="number" id="number" required minlength="6" #Search="ngModel"></ion-input>\n    \n   <ion-item>\n     <ion-label>Service Category</ion-label> \n   <ion-select [(ngModel)]="data.servicecat" name="servicecat" id="servicecat" required placeholder="Service Category"  #servicecat="ngModel">\n       \n<!--       <ion-label>Service Category</ion-label> -->\n\n      \n       <ion-option *ngFor="let name of catss" value="{{name.Category.id}}">{{name.Category.name}}</ion-option>\n   </ion-select>\n  </ion-item>\n\n  \n    <ion-item>\n        <ion-label>Type of service provider</ion-label> -->\n   <ion-select [(ngModel)]="data.service" name="service" id="service" required placeholder="Type of service provider"  #service="ngModel">\n      <ion-option value="individual"> Individual  </ion-option>\n      <ion-option value="company"> Company </ion-option>\n      <ion-option value="both"> Individuals and companies </ion-option>\n   </ion-select>\n    </ion-item>\n     <!-- </form>  -->\n     <button ion-button block round class="current btns" (click)=	servicesbycategory(heroForm) type="submit" >SEARCH</button>\n   \n    </form>\n   </ion-buttons>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <div class="nodata" *ngIf="!cats?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n\n\n  <div class="repairsbx" *ngFor="let cat of cats">\n  \n  <h1>{{cat.Category.name}}</h1>\n  <span (click)="seeservice(cat.Category.id)">See All</span>\n\n  <ion-scroll scrollX="true" scrollY="true">\n\n        <ion-card *ngFor="let catsub of cat.Category.SubCategory">\n            <ion-card-content (click)="aboutservice(catsub.id,cat.Category.id)">\n                <img src="{{catsub.image}}"/>\n                 <h1 >{{catsub.name}}</h1>\n            </ion-card-content> \n        </ion-card>\n    </ion-scroll>\n\n  </div>\n  \n    <div class="servicesbx" *ngIf="cats?.length">\n    <h1>All Services</h1>\n    <!--<img (click)="allservices()" src="assets/imgs/services.jpg"/>-->\n	<div class="gren_bckgrnd">\n	<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>\n	<button ion-button round class="clck_herre" (click)=	servicesbycategory(heroForm) type="submit" >CLICK HERE TO SEARCH</button>\n	<h5 class="redd_mree">Read more at <a href="">www.Yakazi.com</a></h5>\n	</div>\n  </div>\n</ion-content>\n<style>\n.notshw .alert-radio-icon{\ndisplay: none !important;\n}\n</style>'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_geolocation__["a" /* Geolocation */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceproviderlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewdetail_viewdetail__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic2_rating__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__static_static__ = __webpack_require__(189);
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
 * Generated class for the ServiceproviderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServiceproviderlistPage = (function () {
    function ServiceproviderlistPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = '';
        var lists = JSON.parse(localStorage.getItem('serviceItems'));
        console.log(localStorage.getItem('serviceItems'));
        console.log(lists);
        this.sdate = navParams.get("serviceDate");
        this.id = localStorage.getItem("userData");
        this.stime = navParams.get("serviceTime");
        console.log(navParams.get("sids"));
        this.a = navParams.get("type");
        this.b = navParams.get("sids");
        if (navParams.get("sids") != null) {
            this.title = navParams.get("sids");
        }
        else {
            this.title = lists;
        }
        if (navParams.get("type") != null) {
            this.stype = navParams.get("type");
        }
        else {
            if (localStorage.getItem('providerType') != null) {
                this.stype = localStorage.getItem('providerType');
            }
            else if (localStorage.getItem('provider_already_selected') != null) {
                this.stype = localStorage.getItem('provider_already_selected');
            }
        }
        //  alert(this.stype);
        this.rate = '2';
        this.getList();
    }
    ServiceproviderlistPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ServiceproviderlistPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ServiceproviderlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServiceproviderlistPage');
    };
    ServiceproviderlistPage.prototype.viewprovider = function (pID, dis) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__viewdetail_viewdetail__["a" /* ViewdetailPage */], { providerId: pID, provider_distance: dis });
    };
    ServiceproviderlistPage.prototype.gotohome = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    ServiceproviderlistPage.prototype.chatbx = function (proid) {
        console.log(proid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { prid: proid });
    };
    ServiceproviderlistPage.prototype.getList = function () {
        var _this = this;
        var token = localStorage.getItem('tokenId');
        var url;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (this.a != null && this.b != null) {
            url = this.dataprovider.base_url + 'availableDates/availabledays_search';
        }
        else {
            url = this.dataprovider.base_url + 'availableDates/availabledays';
        }
        var postdata = {
            uid: this.id,
            sdate: this.sdate,
            stime: this.stime,
            title: this.title,
            stype: this.stype
        };
        var ser = this.serializeObj(postdata);
        console.log(" postdata" + JSON.stringify(postdata));
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSuccess === true) {
                    //localStorage.setItem("userData", data.data);
                    _this.showToast(data.msg);
                    _this.providers = data.data;
                }
                else {
                    _this.showToast(data.msg);
                    _this.providers = data.data;
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    ServiceproviderlistPage.prototype.confirm = function (formData) {
        var _this = this;
        console.log(formData.value);
        if (formData.value.selectprovider == undefined) {
            this.showToast("First select a service provider above");
        }
        else {
            localStorage.setItem('selectedprovider', formData.value.selectprovider);
            var uid = localStorage.getItem("userData");
            var type;
            if (localStorage.getItem("provider_already_selected") != null) {
                type = localStorage.getItem("provider_already_selected");
            }
            else if (localStorage.getItem("providerType") != null) {
                type = localStorage.getItem("providerType");
            }
            var schedule = localStorage.getItem("schedule");
            var location = localStorage.getItem("location");
            var token = localStorage.getItem('tokenId');
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var url = this.dataprovider.base_url + 'users/requestToProvider';
            var postdata = {
                requestedData: formData.value.selectprovider,
                schedule: schedule,
                uId: uid,
                provider_type: type,
                location: location
            };
            var ser = this.serializeObj(postdata);
            console.log(" postdata" + JSON.stringify(postdata));
            var Loader = this.loadingCtrl.create({
                content: ' ',
            });
            Loader.present().then(function () {
                _this.http.post(url, ser, options_1).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loader.dismiss();
                    console.log(data);
                    if (data.status === true) {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__static_static__["a" /* StaticPage */]);
                    }
                    else {
                        _this.showToast(data.msg);
                    }
                }, function (err) {
                    console.log("Error");
                    Loader.dismiss();
                    console.log("Error!:", err);
                });
            });
        }
        //this.navCtrl.push(ConfirmPage);
    };
    return ServiceproviderlistPage;
}());
ServiceproviderlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_7_ionic2_rating__["a" /* Ionic2RatingModule */] // Put ionic2-rating module here
        ]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-serviceproviderlist',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\serviceproviderlist\serviceproviderlist.html"*/'<!--\n  Generated template for the ServiceproviderlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>LIST OF SERVICE PROVIDERS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="chklist">\n<p *ngIf="providers?.length">List of service providers who match your search and criteria. Choose one to continue.</p>\n<h6 *ngIf="providers?.length">Displays only those who are available on the day and time you have scheduled to meet/talk.</h6>\n<div class="noDataFound" *ngIf="!providers?.length">There is no service provider available for your selected date/time!</div>\n<form #heroForm="ngForm"novalidate class="signup_form">\n\n\n\n\n<div class="list-outer">\n\n  \n   <ion-list radio-group [(ngModel)]="data.selectprovider" name="selectprovider"  required #selectprovider="ngModel"  class="provdr-lst rdiobtn">\n       <ion-item *ngFor="let list of providers">\n \n      <ion-label>\n          <ion-grid no-padding><ion-row><ion-col col-12>\n             <div class="usrchked">\n            <ion-radio value="{{list.User.id}}-{{list.User.services}}-{{list.User.total_price}}" item-start ></ion-radio>\n                </div>\n          	\n      	<!--<div  class="user-avatar">\n            <div class="proflimg">\n      		<img src="{{list.User.image}}" alt="Avatar">\n            </div>\n      	</div>-->\n      	<div class="user-details" (click)="viewprovider(list.User.id,list.User.distance)">\n      	<!--<h2>{{list.User.firstname}} {{list.User.lastname}}</h2>-->\n          	<div class="dstnc_red"><h6 class="bld_nne">Current distance of service provider from your work location: {{list.User.distance}} Kilometers</h6></div>\n            <div class="dstnc_red" *ngIf="list.User.provider_type == \'company\'"><h2>Company Name:</h2><h6 class="bld_nne"> {{list.User.companyname}}</h6></div>\n            <div class="dstnc_red"><h2>Qualification:</h2><h6 class="bld_nne"> {{list.User.otherinfo}}</h6></div>\n           <div class="dstnc_red"><h2>Years of experience:</h2><h6 class="bld_nne"> {{list.User.work_exp}}</h6></div>\n		   <div class="dstnc_red"><h2>Average work rating by other customers:</h2><h6 class="bld_nne"> {{list.User.avg_rating}} out of 5</h6></div>\n		   <div class="dstnc_red"><h2>Charge rate {{list.User.pertype}}:</h2><h6 class="bld_nne">Kshs. {{list.User.rate}}</h6></div>\n        <!--<p>-->\n            <!--<ion-ratings index = \'4\' max="5" read-only></ion-ratings>-->\n           \n<h6 class="more">CLICK TO VIEW MORE</h6>\n        </div> \n\n          </ion-col>\n                  <!--<ion-col col-2>\n                      <ion-icon (click)="chatbx(list.User.id)" class="chat" name="chatboxes"></ion-icon></ion-col>-->\n                      \n                      \n                      \n                      </ion-row></ion-grid>\n          \n<!--           <ion-grid no-padding>\n               <ion-row>\n                   <ion-col col-12>\n                        <ion-icon (click)="chatbx(list.User.id)" class="chat" name="chatboxes"></ion-icon>\n                   </ion-col>\n               </ion-row>\n     </ion-grid>-->\n  	</ion-label> \n         \n      </ion-item>\n\n      </ion-list>\n\n    \n \n</div>\n\n<button class="prvbtn" *ngIf="providers?.length" ion-button block round type="submit" color="theme"  (click)="confirm(heroForm)">SEND REQUEST TO SERVICE PROVIDER</button>\n<span class="or">OR</span> \n<button  class="prvbtn" *ngIf="providers?.length" ion-button block round type="submit" color="theme"  (click)="gotohome()">MAKE NEW SEARCH</button>\n\n\n\n</form>\n</div>\n<!--  <ion-grid no-padding>\n               <ion-row>\n                   <ion-col col-12>\n                        <ion-icon (click)="chatbx()" class="chat" name="chatboxes"></ion-icon>\n                   </ion-col>\n               </ion-row>\n           </ion-grid>-->\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\serviceproviderlist\serviceproviderlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ServiceproviderlistPage);

//# sourceMappingURL=serviceproviderlist.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutservicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__address_address__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(6);
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
 * Generated class for the AboutservicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutservicePage = (function () {
    function AboutservicePage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = '';
    }
    AboutservicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutservicePage');
    };
    AboutservicePage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    AboutservicePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AboutservicePage.prototype.address = function (heroForm) {
        console.log(heroForm.value);
        localStorage.setItem('providerType', heroForm.value.type);
        localStorage.removeItem('provider_already_selected');
        //  alert(JSON.stringify(providerType))
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__address_address__["a" /* AddressPage */]);
    };
    return AboutservicePage;
}());
AboutservicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-aboutservice',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\aboutservice\aboutservice.html"*/'<!--\n  Generated template for the AboutservicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SELECT THE PROVIDER TYPE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<form #heroForm="ngForm"novalidate class="chklist">\n<ion-list radio-group [(ngModel)]="data.type" name="type" id="type" required #type="ngModel">\n  <p>Select the type of service provider</p>\n  <ion-item>\n    <ion-label>Individual Freelancer</ion-label>\n    <ion-radio value="individual" checked></ion-radio>\n  </ion-item>\n  <ion-item>\n    <ion-label>Company</ion-label>\n    <ion-radio value="company"></ion-radio>\n  </ion-item>\n   <ion-item>\n    <ion-label>Individuals and companies</ion-label>\n    <ion-radio value="both"></ion-radio>\n  </ion-item>\n</ion-list>\n\n\n<button ion-button block round type="submit" color="theme" [disabled]="!heroForm.form.valid" (click)="address(heroForm)">NEXT</button>\n</form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\aboutservice\aboutservice.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], AboutservicePage);

//# sourceMappingURL=aboutservice.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchedulePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_confirm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serviceproviderlist_serviceproviderlist__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__address_address__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(21);
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
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchedulePage = (function () {
    //public maxyear = '';
    function SchedulePage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = '';
        this.useradd = '';
        this.useraddress = {};
        this.getUserAddress();
        var d = new Date();
        console.log(d);
        var mm = ("0" + (d.getMonth() + 1)).slice(-2);
        var day = ("0" + (d.getDate())).slice(-2);
        console.log(d.getFullYear() + "-" + mm + "-" + day);
        this.min = d.getFullYear() + "-" + mm + "-" + day;
        this.location = localStorage.getItem('location');
    }
    SchedulePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SchedulePage');
    };
    SchedulePage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    SchedulePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SchedulePage.prototype.confirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_confirm__["a" /* ConfirmPage */]);
    };
    SchedulePage.prototype.getUserAddress = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('userData2'));
        var userID = user.User.id;
        this.useradd = user.User.address;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/userinfo';
        var postdata = {
            uid: userID
        };
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.useraddress = data.data.User;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    SchedulePage.prototype.serviceproviderlist = function (formData) {
        console.log(formData.value);
        localStorage.setItem('schedule', JSON.stringify(formData.value));
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__serviceproviderlist_serviceproviderlist__["a" /* ServiceproviderlistPage */], { serviceDate: formData.value.sdate, serviceTime: formData.value.stime });
    };
    SchedulePage.prototype.goToAddress = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__address_address__["a" /* AddressPage */]);
    };
    SchedulePage.prototype.golocation = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */]);
    };
    return SchedulePage;
}());
SchedulePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-schedule',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\schedule\schedule.html"*/'<!--\n  Generated template for the SchedulePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>SCHEDULE</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="bg">\n<form #heroForm="ngForm"novalidate class="inputbox">\n<div class="box1">\n<ion-grid no-padding>\n<ion-row>\n<ion-col col-6>\n	<h1>Location of work</h1>\n	</ion-col>\n	<ion-col col-6>\n	<button class="changebtn" (click)="golocation()">CHANGE LOCATION</button>\n	</ion-col>\n	</ion-row>\n	</ion-grid>\n        <h2>{{location}} <span (click) = "goToAddress()"></span></h2>\n		<label>Near: </label> <span>{{useraddress.landmark}}</span>\n	\n</div>\n\n<div class="box2">\n\n<h1>Set date and time to meet/talk with service provider about the work</h1>\n\n<ion-item>\n  \n  <ion-datetime placeholder="DD/MM/YYYY" displayFormat="DD/MM/YYYY" pickerFormat="DD MMM YYYY" monthShortNames="Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct, Nov, Dec"  min="{{min}}" [(ngModel)]="data.sdate" name="sdate" id="sdate" required #sdate="ngModel"></ion-datetime>\n</ion-item>\n\n</div>\n\n<div class="box3">\n\n<h1>Use this 24-hour clock to set the time.</h1>\n\n\n<ion-grid>\n<ion-list radio-group [(ngModel)]="data.stime" name="stime" id="stime" required #stime="ngModel">\n  <ion-row>\n    <ion-col col-4>\n    	<div class="time">\n    		\n    		 <ion-item>\n    		<ion-radio value="24-1"></ion-radio>\n    		</ion-item>\n    		\n    		<span>24-1</span>\n    	</div>\n    </ion-col>\n    <ion-col col-4>\n    <div class="time">\n    		\n    		<ion-item>\n    		<ion-radio value="1-2"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>1-2</span>\n    	</div>\n    </ion-col>\n     <ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="2-3"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>2-3</span>\n    	</div>\n    </ion-col>\n  </ion-row>\n\n\n\n   <ion-row>\n    <ion-col col-4>\n    	<div class="time">\n    	\n  			<ion-item>\n    		<ion-radio value="3-4"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>3-4</span>\n    	</div>\n    </ion-col>\n    <ion-col col-4>\n    <div class="time">\n  \n  			<ion-item>\n    		<ion-radio value="4-5" ></ion-radio>\n    		</ion-item>\n    		\n    		<span>4-5</span>\n    	</div>\n    </ion-col>\n     <ion-col col-4>\n      <div class="time">\n     \n  			<ion-item>\n    		<ion-radio  value="5-6"></ion-radio>\n    		</ion-item>\n    		\n    		<span>5-6</span>   			\n    	</div>\n    </ion-col>\n  </ion-row>\n\n\n   <ion-row>\n    <ion-col col-4>\n    	<div class="time">\n    \n  			<ion-item>\n    		<ion-radio value="6-7"  ></ion-radio>\n    		</ion-item>\n \n    		<span>6-7</span>\n\n    	</div>\n    </ion-col>\n    <ion-col col-4>\n    <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="7-8"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>7-8</span>\n    	</div>\n    </ion-col>\n     <ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="8-9"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>8-9</span>\n    	</div>\n    </ion-col>\n	 <ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="9-10"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>9-10</span>\n    	</div>\n    </ion-col>\n	<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="10-11"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>10-11</span>\n    	</div>\n    </ion-col>\n	<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="11-12"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>11-12</span>\n    	</div>\n    </ion-col>\n		<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="12-13"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>12-13</span>\n    	</div>\n    </ion-col>\n		<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="13-14"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>13-14</span>\n    	</div>\n    </ion-col>\n	\n	\n			<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="14-15"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>14-15</span>\n    	</div>\n    </ion-col>\n	\n	\n			<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="15-16"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>15-16</span>\n    	</div>\n    </ion-col>\n	\n	\n			<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="16-17"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>16-17</span>\n    	</div>\n    </ion-col>\n	\n	\n				<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="17-18"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>17-18</span>\n    	</div>\n    </ion-col>\n	\n					<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="18-19"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>18-19</span>\n    	</div>\n    </ion-col>\n	\n					<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="19-20"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>19-20</span>\n    	</div>\n    </ion-col>\n	\n					<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="20-21"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>20-21</span>\n    	</div>\n    </ion-col>\n	\n					<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="21-22"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>21-22</span>\n    	</div>\n    </ion-col>\n	\n					<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="22-23"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>22-23</span>\n    	</div>\n    </ion-col>\n	\n						<ion-col col-4>\n      <div class="time">\n    		\n  			<ion-item>\n    		<ion-radio value="23-24"  ></ion-radio>\n    		</ion-item>\n    		\n    		<span>23-24</span>\n    	</div>\n    </ion-col>\n	\n  </ion-row>\n  </ion-list>\n</ion-grid>\n\n\n</div>\n\n\n<button ion-button block round  [disabled]="!heroForm.form.valid" type="submit" color="theme"  (click)="serviceproviderlist(heroForm)">NEXT</button>\n</form>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\schedule\schedule.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], SchedulePage);

//# sourceMappingURL=schedule.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__congratulations_congratulations__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__ = __webpack_require__(139);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app, stripe, iab) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.stripe = stripe;
        this.iab = iab;
        this.data = '';
        console.log(JSON.parse(localStorage.getItem('schedule')));
        this.param = navParams.get("rqstId");
    }
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
    };
    PaymentPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    PaymentPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    PaymentPage.prototype.gocongo = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__congratulations_congratulations__["a" /* CongratulationsPage */]);
    };
    PaymentPage.prototype.payment = function () {
        var _this = this;
        var userID = JSON.parse(localStorage.getItem('userData'));
        var target = "_blank";
        var options = "location=no,hidden=no";
        var browser = this.iab.create('http://rakhi.crystalbiltech.com/service/api/users/make_payment?user_id=' + userID + '&sessionid=' + this.param, target, options);
        browser.on('loadstart').subscribe(function (e) {
            //alert(JSON.stringify(e));
            if (e.url.match('pesapal_transaction_tracking_id')) {
                browser.close();
                _this.showToast('Transaction has been made successfull');
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__congratulations_congratulations__["a" /* CongratulationsPage */]);
            }
            else {
            }
        }, function (err) {
        });
    };
    PaymentPage.prototype.pay = function (card_data) {
        var _this = this;
        //    var user = JSON.parse(localStorage.getItem('userData'));  
        //    var userID = user.User.id;
        var userID = JSON.parse(localStorage.getItem('userData'));
        console.log(userID);
        console.log(card_data);
        var expireDate = card_data.value.exyear;
        var exdate = expireDate.split('-');
        console.log(exdate);
        //alert('payment');
        var cardinfo = {
            number: card_data.value.card,
            expMonth: exdate[1],
            expYear: exdate[0],
            cvc: card_data.value.cvv
        };
        this.stripe.setPublishableKey('pk_test_Ost0pIHU1azAEl95yCdQN0pK');
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'AvailableDates/make_payment';
        Loader.present().then(function () {
            _this.stripe.createCardToken(cardinfo).then(function (token) {
                //alert(JSON.stringify(token));
                var dd = JSON.stringify(token);
                var ddd = JSON.parse(dd);
                //alert(ddd.id);
                var cardType = ddd.card.brand;
                var postdata = {
                    stripetoken: ddd.id,
                    user_id: userID,
                    session_id: _this.param
                };
                var ser = _this.serializeObj(postdata);
                _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loader.dismiss();
                    //	alert(JSON.stringify(data));
                    if (data.isSuccess === true) {
                        //   alert("naveen");
                        _this.showToast('payment successfull');
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__congratulations_congratulations__["a" /* CongratulationsPage */]);
                    }
                    else {
                        _this.showToast('There is an error1');
                    }
                }, function (err) {
                    console.log("Error");
                    Loader.dismiss();
                    //alert(JSON.stringify(err));
                    _this.showToast('There is an erro2');
                });
            }, function (err) {
                _this.showToast('There is an error in payment');
                alert(JSON.stringify(err));
            });
        });
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-payment',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\payment\payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>PAYMENT</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<form #heroForm="ngForm"novalidate class="payment">\n<ion-list>\n<h1 >Pay With Card</h1>\n  <ion-item>\n    <ion-label floating>Card Number</ion-label>\n    <ion-input  [(ngModel)]="data.card" class="txtbx" name="card" type="text" id="card" required pattern=\'[0-9]*\' #card="ngModel"></ion-input>\n        \n\n		<div *ngIf="card.errors && (card.dirty || card.touched)" class="alert alert-danger">\n		   <div [hidden]="!card.errors.required" class="alert alert-danger">\n			 Card number is required\n			</div>\n			<div [hidden]="!card.errors.pattern" class="alert alert-danger">\n			 In-valid card number\n			</div>\n		</div>\n    \n\n    \n    \n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>CVV</ion-label>\n    <ion-input  [(ngModel)]="data.cvv" class="txtbx" name="cvv" type="text" id="cvv" required pattern=\'[0-9]*\' #cvv="ngModel"></ion-input>\n\n		<div *ngIf="cvv.errors && (cvv.dirty || cvv.touched)" class="alert alert-danger">\n		   <div [hidden]="!cvv.errors.required" class="alert alert-danger">\n			 CVV is required\n			</div>\n			<div [hidden]="!cvv.errors.pattern" class="alert alert-danger">\n			 In-valid CVV\n			</div>\n		</div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Expiry Date</ion-label>\n    <ion-datetime displayFormat="MM-YYYY" [(ngModel)]="exyear"  min="{{cyear}}" max="{{fyear}}" name="exyear" id="exyear"></ion-datetime>\n  </ion-item>\n\n  \n\n</ion-list>\n<button ion-button block round color="theme" [disabled]="!heroForm.form.valid" (click)="pay(heroForm)">Pay</button>\n<button ion-button block round color="theme" (click)="payment()">Payment</button>\n</form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\payment\payment.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_stripe__["a" /* Stripe */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OngoingNextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__servicedetail_servicedetail__ = __webpack_require__(179);
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
 * Generated class for the OngoingNextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OngoingNextPage = (function () {
    function OngoingNextPage(navCtrl, navParams, dataprovider, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataprovider = dataprovider;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.udata = '';
        this.types = {};
        this.param = navParams.get("session");
        this.userparam = navParams.get("userid");
        this.getProviderInfo();
    }
    OngoingNextPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OngoingNextPage');
    };
    OngoingNextPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    OngoingNextPage.prototype.service_detail = function (sid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__servicedetail_servicedetail__["a" /* ServicedetailPage */], { getserviceid: sid });
    };
    OngoingNextPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    OngoingNextPage.prototype.getProviderInfo = function () {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/getProviderInfos';
        var data_form = {
            rqid: this.param,
            uid: this.userparam
        };
        var Serialized = this.serializeObj(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata);
                if (sdata.status == true) {
                    _this.items = sdata.data;
                    _this.types = sdata.types;
                    _this.udata = sdata.userdata.User;
                    _this.udocdata = sdata.userdocs;
                    console.log(sdata.data[0].Request.service_price);
                    _this.price = sdata.data[0].Request.service_price;
                    _this.sdate = sdata.data[0].Request.scheduledate;
                    _this.stime = sdata.data[0].Request.scheduletime;
                    _this.joblocation = sdata.data[0].Request.location;
                    _this.end = sdata.userdata.User.address;
                    console.log(sdata.userdata.User.address);
                    var userData = JSON.parse(localStorage.getItem('userData2'));
                    console.log(userData);
                    //console.log(userData.User.address);
                    _this.start = sdata.data[0].Request.location;
                    console.log(_this.start);
                    var directionsService = new google.maps.DirectionsService;
                    var directionsDisplay = new google.maps.DirectionsRenderer;
                    var map = new google.maps.Map(document.getElementById('maps'), {
                        zoom: 7,
                        center: { lat: 41.85, lng: -87.65 }
                    });
                    directionsDisplay.setMap(map);
                    directionsService.route({
                        origin: _this.start,
                        destination: _this.end,
                        travelMode: 'DRIVING'
                    }, function (response, status) {
                        console.log(response);
                        if (status === 'OK') {
                            directionsDisplay.setDirections(response);
                        }
                        else {
                            window.alert('Directions request failed due to ' + status);
                        }
                    });
                }
                else {
                    _this.items = sdata.data;
                }
            }, function (error) {
                Loader.dismiss();
            });
        });
    };
    return OngoingNextPage;
}());
OngoingNextPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ongoing-next',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\ongoing-next\ongoing-next.html"*/'<ion-header>\n\n  <ion-navbar padding>\n      <!--<ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back" (click)="back()"></ion-icon>-->\n    <ion-title class="header-title">Provider Detail</ion-title>\n  </ion-navbar>\n    \n</ion-header>\n\n<ion-content padding>\n<div class="srvce_dtl" >\n  <div class="srvc_ttl">\n    <h3>Service Detail</h3>\n  </div>\n  <div class="text_dtl">\n    <div *ngFor="let item of items">\n       <h3 *ngFor="let sitem of item.Request.Services" (click)="service_detail(sitem.Service.id)">{{sitem.Service.name}}</h3>\n    </div>\n    \n    <!--h4 class="ttl_sb">Total - KES {{price}}</h4>\n    <h6>Schedule Date - {{sdate}} ({{stime}})</h6--> \n	\n	<h4 class="ttl_sb">Job location</h4>\n	<h6>{{joblocation}}</h6>\n	\n	 <h4 class="ttl_sb">Deposit paid</h4>\n	<h6>KES {{price}}</h6>\n	\n	 <h4 class="ttl_sb">Date of first meeting/discussion</h4>\n	<h6>{{sdate}} (between {{stime}})</h6>\n	\n	\n  </div>\n</div>\n\n<div class="prvdr_dtl">\n  <div class="prvdr_ttl">\n    <h3>Service Provider Details</h3>\n  </div>\n  <div class="text_prvdr">\n   \n  <div class="pic_stnd">\n      <img src="{{udata.image}}"> \n  </div>\n    <div class="nme_stnd"><h2>Name:</h2><span>{{udata.firstname}} {{udata.lastname}}</span></div>\n    <div class="nme_stnd"><h2>Email:</h2><span>{{udata.email}}</span></div>\n    <div class="nme_stnd"><h2>Phone Number:</h2><span>{{udata.phonenumber}}</span></div>\n    <div class="nme_stnd"><h2>Address:</h2><span>{{udata.address}}</span></div>\n    <div class="nme_stnd"><h2>Postal address:</h2><span>{{udata.postal}}</span></div>\n	<div class="nme_stnd"><h2>Provider type:</h2><span>{{udata.provider_type}}</span></div>\n	<div class="nme_stnd"><h2>Profession:</h2><span>{{udata.profession}}</span></div>\n	<div class="nme_stnd"><h2>Passport no:</h2><span>{{udata.passport_no}}</span></div>\n	<div class="nme_stnd"><h2>Institution:</h2><span>{{udata.institution}}</span></div>\n	<div class="nme_stnd"><h2>Course:</h2><span>{{udata.course}}</span></div>\n	<div class="nme_stnd"><h2>Past work references:</h2><span>{{udata.pastworkreferences}}</span></div>\n	<div class="nme_stnd"><h2>Other info:</h2><span>{{udata.otherinfo}}</span></div>\n	<div class="nme_stnd" *ngIf="udata.companyname != \' \'"><h2>Company name:</h2><span>{{udata.companyname}}</span></div>\n	<div class="nme_stnd"><h2>Avg rating:</h2><span>{{udata.avg_rating}}</span></div>\n	<div class="nme_stnd"><h2>Work Exp(years):</h2><span>{{udata.work_exp}}</span></div>\n\n  </div>\n</div>\n\n\n<div class="providercerti" *ngIf="udocdata?.length">\n<h3>Provider Documents</h3>\n<ion-item class="upld">\n   <div class="label" *ngIf="types.c != \'\'">National ID/Passport</div> \n  <!--<input id="file-input" (click)="openActionSheet()">-->\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'National ID/Passport\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'National ID/Passport\'" src="{{im.Userdoc.image}}" />\n      <!--<img *ngIf="im.Userdoc.image == \'\'" src="" />-->\n    </div>\n  </div>\n\n  \n  \n</ion-item>\n\n\n<ion-item class="upld">\n   <div class="label" *ngIf="types.d != \'\'">Recent Passport Photo</div> \n  <!--<input id="file-input" (click)="openActionSheet()">-->\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Recent Passport Photo\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Recent Passport Photo\'" src="{{im.Userdoc.image}}" />\n      <!--<img *ngIf="im.Userdoc.image == \'\'" src="" />-->\n  </div>\n  </div>\n\n  \n  \n</ion-item>\n\n\n<ion-item class="upld">\n     <div class="label" *ngIf="types.b != \'\'">Work Permit/License</div>\n  <!--<input id="file-input" (click)="openActionSheet()">-->\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Work Permit/License\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Work Permit/License\'" src="{{im.Userdoc.image}}" />\n      <!--<img *ngIf="im.Userdoc.image == \'\'" src="" />-->\n  </div>\n  </div>\n\n \n  \n</ion-item>\n\n\n<!--ion-item class="upld">\n   <div class="label">Insurance Cover</div> \n\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Insurance Cover\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Insurance Cover\'" src="{{im.Userdoc.image}}" />\n      \n  </div>\n  </div>\n\n  \n  \n</ion-item>\n\n<ion-item class="upld">\n  <div class="label">Certificate of Good Conduct</div>  \n \n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Certificate of Good Conduct\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Certificate of Good Conduct\'" src="{{im.Userdoc.image}}" />\n     \n  </div>\n  </div>\n\n  \n  \n</ion-item-->\n\n<ion-item class="upld">\n  <div class="label" *ngIf="types.a != \'\'">Work Insurance Certificate and  Certificate of Good Conduct</div>  \n  <!--<input id="file-input" (click)="openActionSheet()">-->\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Work Insurance Certificate and  Certificate of Good Conduct\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Work Insurance Certificate and  Certificate of Good Conduct\'" src="{{im.Userdoc.image}}" />\n      <!--<img *ngIf="im.Userdoc.image == \'\'" src="" />-->\n  </div>\n  </div>\n\n  \n  \n</ion-item>\n\n\n<ion-item class="upld">\n   <div class="label" *ngIf="types.e != \'\'">College Leaving Certificate</div>  \n  <!--<input id="file-input" (click)="openActionSheet()">-->\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'College Leaving Certificate\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'College Leaving Certificate\'" src="{{im.Userdoc.image}}" />\n      <!--<img *ngIf="im.Userdoc.image == \'\'" src="" />-->\n  </div>\n  </div>\n\n \n  \n</ion-item>\n\n<ion-item class="upld">\n    <div class="label" *ngIf="types.f != \'\'">Professional/Course Certificates</div>\n  <!--<input id="file-input" (click)="openActionSheet()">-->\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Professional/Course Certificates\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'Professional/Course Certificates\'" src="{{im.Userdoc.image}}" />\n      <!--<img *ngIf="im.Userdoc.image == \'\'" src="" />-->\n  </div>\n  </div>\n\n  \n  \n</ion-item>\n<ion-item class="upld">\n    <div class="label" *ngIf="types.g != \'\'">My work tools/equipment/vehicles</div>\n  <!--<input id="file-input" (click)="openActionSheet()">-->\n  <div *ngFor="let im of udocdata">\n    <div class="inimg" *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'My work tools/equipment/vehicles\'">\n    <img *ngIf="im.Userdoc.image != \'\' && im.Userdoc.type == \'My work tools/equipment/vehicles\'" src="{{im.Userdoc.image}}" />\n      <!--<img *ngIf="im.Userdoc.image == \'\'" src="" />-->\n  </div>\n  </div>\n\n  \n  \n</ion-item>\n</div>\n\n\n\n<div class="map_lcte">\n  <div id="maps"></div>\n</div>\n\n</ion-content>\n\n\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\ongoing-next\ongoing-next.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], OngoingNextPage);

//# sourceMappingURL=ongoing-next.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicedetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
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
 * Generated class for the TermsofusePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicedetailPage = (function () {
    function ServicedetailPage(navCtrl, navParams, loadingCtrl, http, dataprovider, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.http = http;
        this.dataprovider = dataprovider;
        this.toastCtrl = toastCtrl;
        this.items = '';
        this.itemsc = '';
        this.itemss = '';
        this.param = navParams.get("getserviceid");
        this.getserviceinfo();
    }
    ServicedetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsofusePage');
    };
    ServicedetailPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ServicedetailPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ServicedetailPage.prototype.getserviceinfo = function () {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var data_form = {
            sid: this.param,
        };
        var Serialized = this.serializeObj(data_form);
        console.log(Serialized);
        Loader.present().then(function () {
            _this.http.post(_this.dataprovider.base_url + 'services/getservicebyid', Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata);
                if (sdata.status === true) {
                    _this.items = sdata.data.Service;
                    _this.itemsc = sdata.data.Category;
                    _this.itemss = sdata.data.SubCategory;
                }
                else {
                    _this.items = sdata.data;
                }
            }, function (error) {
                Loader.dismiss();
            });
        });
    };
    return ServicedetailPage;
}());
ServicedetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-servicedetail',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\servicedetail\servicedetail.html"*/'<ion-header>\n\n  <ion-navbar>\n       <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back" (click)="back()"></ion-icon>\n    <ion-title class="header-title">SERVICE DETAIL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="terms">\n<ion-grid no-padding>\n<ion-row>\n<ion-col col-12>\n<h3>{{items.name}}</h3>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-6>\n<label>Category:</label>\n</ion-col>\n<ion-col col-6>\n<span>{{itemsc.name}}</span>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-6>\n<label>Sub Category:</label>\n</ion-col>\n<ion-col col-6>\n<span>{{itemss.name}}</span>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-6>\n<label>Price:</label>\n</ion-col>\n<ion-col col-6>\n<span>KES {{itemss.price}}</span>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-6>\n<label>Provider price:</label>\n</ion-col>\n<ion-col col-6>\n<span>KES {{itemss.provider_price}}</span>\n</ion-col>\n</ion-row>\n<ion-row>\n<ion-col col-12>\n<p>{{items.description}}</p>\n</ion-col>\n</ion-row>\n</ion-grid>\n\n\n</div>\n\n\n</ion-content>'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\servicedetail\servicedetail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */]])
], ServicedetailPage);

//# sourceMappingURL=servicedetail.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_category__ = __webpack_require__(106);
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
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicesPage = (function () {
    function ServicesPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.lat = navParams.get("lat");
        this.long = navParams.get("long");
        this.services();
    }
    ServicesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicesPage');
    };
    ServicesPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ServicesPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ServicesPage.prototype.servicerepair = function (catId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__category_category__["a" /* CategoryPage */], { catId: catId });
    };
    ServicesPage.prototype.services = function () {
        var _this = this;
        //this.navCtrl.push(ServicesPage);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'services/searchservice';
        var postdata = {
            lat: this.lat,
            long: this.long
        };
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            var Serialized = _this.serializeObj(postdata);
            _this.http.post(url, Serialized, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSuccess == 'true') {
                    _this.cats = data.data;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    return ServicesPage;
}());
ServicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-services',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\services\services.html"*/'<!--\n  Generated template for the ServicesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar >\n    <ion-title>All Services</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<ion-list class="box1" *ngFor="let cat of cats">\n  <ion-item>\n    <ion-avatar item-start>\n      <img src="{{cat.Category.image}}">\n    </ion-avatar>\n    <h2 (click)="servicerepair(cat.Category.id)">{{cat.Category.name}}</h2>\n    \n  </ion-item>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\services\services.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ServicesPage);

//# sourceMappingURL=services.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotpasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin__ = __webpack_require__(53);
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
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotpasswordPage = (function () {
    function ForgotpasswordPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = '';
    }
    ForgotpasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotpasswordPage');
    };
    ForgotpasswordPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ForgotpasswordPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ForgotpasswordPage.prototype.forgot = function (signup2) {
        var _this = this;
        console.log(signup2);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/forgotpwd';
        var postdata = {
            username: signup2.value.email
        };
        console.log(" postdata" + postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var Serialized = this.serializeObj(postdata);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.isSuccess == 'true') {
                    _this.showToast(data.msg);
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__signin_signin__["a" /* SigninPage */]);
                }
                else {
                    _this.showToast("Please check your email to reset your password");
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    return ForgotpasswordPage;
}());
ForgotpasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-forgotpassword',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\forgotpassword\forgotpassword.html"*/'<!--\n  Generated template for the ForgotpasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>FORGOT PASSWORD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n<ion-content padding>\n<form #heroForm="ngForm"novalidate class="emailbox">\n<ion-list>\n<label>Enter your email to reset your password</label>\n  <ion-item>\n    <ion-label floating>Email ID</ion-label>\n    <ion-input  [(ngModel)]="data.email" name="email" type="email" id="email" required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' #email="ngModel"></ion-input>\n\n    <div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n    <div [hidden]="!email.errors.required" class="alert alert-danger">\n      Email is required\n      </div>\n      <div [hidden]="!email.errors.pattern" class="alert alert-danger">\n      In-valid email\n      </div>\n    </div>\n  </ion-item>\n</ion-list>\n\n<button ion-button block round type="submit" color="theme" [disabled]="!heroForm.form.valid" (click)="forgot(heroForm)">SUBMIT</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\forgotpassword\forgotpassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ForgotpasswordPage);

//# sourceMappingURL=forgotpassword.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(246);
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
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = (function () {
    function EditprofilePage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, actionSheetCtrl, app, camera) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.app = app;
        this.camera = camera;
        this.searchQuery = '';
        this.data = {
            firstname: '',
            lastname: '',
            email: '',
            phone: '',
            postal: '',
            city: '',
            address: '',
            password: '',
            cpassword: '',
            country: 'Kenya',
            sel_country: '',
        };
        this.showLoader = this.loadingCtrl.create({
            content: 'Saving...'
        });
        this.country();
        this.buttonClicked = false;
        this.buttonClickedprofession = false;
        this.getprofile();
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
    };
    EditprofilePage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    EditprofilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    EditprofilePage.prototype.country = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'countries/countries';
        this.http.get(url, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.status === true) {
                // this.items=data.data;
                _this.countries = data.data;
                console.log(data.data);
                //	this.showToast(data.response);
            }
        }, function (err) {
            console.log("Error");
            console.log("Error!:", err);
        });
    };
    EditprofilePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        //  this.country();
        var _this = this;
        // set val to the value of the searchbar
        var val = ev.target.value;
        console.log(ev.target.value);
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.countries.filter(function (item) {
                console.log(item);
                _this.buttonClicked = true;
                return (item.Country.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.buttonClicked = false;
        }
    };
    EditprofilePage.prototype.mcqAnswer = function (questionID) {
        console.log(questionID);
        this.data.country = this.data.sel_country;
        console.log(this.data);
        this.buttonClicked = false;
    };
    EditprofilePage.prototype.getprofile = function () {
        var _this = this;
        var userInfo = JSON.parse(localStorage.getItem('userData'));
        var userID = userInfo;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/userinfo';
        var postdata = {
            uid: userID
        };
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            var serialized_all = _this.serializeObj(postdata);
            _this.http.post(url, serialized_all, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.img = data.data.User.image;
                    _this.data = data.data.User;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    EditprofilePage.prototype.editinfo = function (editForm) {
        var _this = this;
        var userInfo = JSON.parse(localStorage.getItem('userData'));
        var userID = userInfo;
        var data_Profile = {
            id: userID,
            firstname: editForm.value.firstname,
            lastname: editForm.value.lastname,
            email: editForm.value.email,
            address: editForm.value.address,
            city: editForm.value.city,
            country: editForm.value.country,
            postal: editForm.value.postal,
            phonenumber: editForm.value.phonenumber,
        };
        //alert(JSON.stringify(data_Profile));
        var serialized = this.serializeObj(data_Profile);
        //alert(serialized);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/editprofile';
        this.showLoader.present().catch();
        this.http.post(url, serialized, options).map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            _this.showLoader.dismiss().catch();
            // alert(JSON.stringify(data));
            if (data.status == true) {
                _this.showToast("Profile has been updated");
                //localStorage.setItem('userData', JSON.stringify(data.data));
                _this.name = data.data.User.firstname + ' ' + data.data.User.lastname;
                _this.contact = data.data.User.phonenumber;
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
                //this.acountPage();
                //this.navCtrl.push(AccountPage);
            }
            else {
                _this.showToast("Profile failed to update");
                //this.Loader.dismiss();
            }
        }, function (err) {
            _this.showLoader.dismiss().catch();
            alert(err);
            //this.hide();
            console.log("Error");
            console.log("Error!:", err);
        });
    };
    EditprofilePage.prototype.openActionSheet = function () {
        var _this = this;
        // alert('camera');
        var User = localStorage.getItem("userData");
        console.log(User);
        var actionsheet = this.actionSheetCtrl.create({
            title: "Choose Album",
            buttons: [{
                    text: 'Camera',
                    handler: function () {
                        console.log("Camera Clicked");
                        var options = {
                            quality: 8,
                            sourceType: 1,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        var Loader = _this.loadingCtrl.create({
                            content: ' ',
                        });
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.img = "data:image/jpeg;base64," + imageData;
                            _this.image = imageData;
                            // this.profile_image =  imageData; 
                            var data_img = {
                                id: User,
                                img: _this.image
                            };
                            var serialized_img = _this.serializeObj(data_img);
                            console.log(serialized_img);
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var url = _this.dataprovider.base_url + 'users/saveimage';
                            Loader.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    if (data.status === true) {
                                        localStorage.setItem("IMG", data.image);
                                        var toast = _this.toastCtrl.create({
                                            message: data.message,
                                            duration: 3000,
                                            position: 'middle'
                                        });
                                        toast.present();
                                        Loader.dismiss();
                                    }
                                });
                            });
                        }, function (err) {
                            var toast = _this.toastCtrl.create({
                                message: "Server not Working,Please Check your Internet Connection and try again!",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                            // alert("Server not Working,Please Check your Internet Connection and try again!");
                            Loader.dismiss();
                        });
                    }
                }, {
                    text: 'Gallery',
                    handler: function () {
                        var options = {
                            quality: 8,
                            sourceType: 0,
                            destinationType: _this.camera.DestinationType.DATA_URL,
                            encodingType: _this.camera.EncodingType.JPEG,
                            mediaType: _this.camera.MediaType.PICTURE
                        };
                        var Loader = _this.loadingCtrl.create({
                            content: ' ',
                        });
                        _this.camera.getPicture(options).then(function (imageData) {
                            _this.prfimage = "data:image/jpeg;base64," + imageData;
                            _this.image = imageData;
                            localStorage.setItem("IMG", _this.prfimage);
                            var data_img = ({
                                id: User,
                                img: _this.image
                            });
                            var serialized_img = _this.serializeObj(data_img);
                            console.log(serialized_img);
                            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
                            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                            var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
                            var url = _this.dataprovider.base_url + 'users/saveimage';
                            Loader.present().then(function () {
                                _this.http.post(url, serialized_img, options).map(function (res) { return res.json(); })
                                    .subscribe(function (data) {
                                    if (data.status === true) {
                                        localStorage.setItem("IMG", data.image);
                                        var toast = _this.toastCtrl.create({
                                            message: data.message,
                                            duration: 3000,
                                            position: 'middle'
                                        });
                                        toast.present();
                                        Loader.dismiss();
                                    }
                                });
                            });
                        }, function (err) {
                            var toast = _this.toastCtrl.create({
                                message: "Server not Working,Please Check your Internet Connection and try again!",
                                duration: 3000,
                                position: 'middle'
                            });
                            toast.present();
                            Loader.dismiss();
                            //alert("Server not Working,Please Check your Internet Connection and try again!");
                        });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        //  actionsheet.dismiss()         
                    }
                }
            ]
        });
        actionsheet.present();
    };
    EditprofilePage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return EditprofilePage;
}());
EditprofilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-editprofile',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\editprofile\editprofile.html"*/'<!--\n  Generated template for the EditprofilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>EDIT PROFILE </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="edtbox">\n<div class="edtprfl">\n    \n    <img class="log" src="{{img}}"/>\n  <ion-icon class="cam" name="camera" (click)="openActionSheet()"></ion-icon>\n  </div>\n  \n</div>\n\n\n\n  \n<form #heroForm="ngForm"novalidate class="profilebox">\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>First Name</ion-label>\n    <ion-input  [(ngModel)]="data.firstname" name="firstname" type="text" id="firstname" required #firstname="ngModel"></ion-input>\n\n    <div *ngIf="firstname.errors && (firstname.dirty || firstname.touched)" class="alert alert-danger">\n    <div [hidden]="!firstname.errors.required" class="alert alert-danger">\n      First name is required\n    </div>\n    </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Last Name</ion-label>\n    <ion-input  [(ngModel)]="data.lastname" name="lastname" type="text" id="lastname" required #lastname="ngModel"></ion-input>\n\n    <div *ngIf="lastname.errors && (lastname.dirty || lastname.touched)" class="alert alert-danger">\n    <div [hidden]="!lastname.errors.required" class="alert alert-danger">\n      Last name is required\n    </div>\n    </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Email Id</ion-label>\n    <ion-input  [(ngModel)]="data.email" name="email" type="email" id="email" #email="ngModel" readonly></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Phone Number</ion-label>\n    <ion-input  [(ngModel)]="data.phonenumber" name="phonenumber" type="text" id="phonenumber" maxlength="12" required pattern=\'[0-9]*\' #phonenumber="ngModel"></ion-input>\n\n    <div *ngIf="phonenumber.errors && (phonenumber.dirty || phonenumber.touched)" class="alert alert-danger">\n    <div [hidden]="!phonenumber.errors.required" class="alert alert-danger">\n      Phone number is required\n      </div>\n      <div [hidden]="!phonenumber.errors.pattern" class="alert alert-danger">\n      In-valid phone number\n      </div>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Postal Code</ion-label>\n    <ion-input  [(ngModel)]="data.postal" name="postal" type="text" id="postal" required #postal="ngModel"></ion-input>\n    <div *ngIf="postal.errors && (postal.dirty || postal.touched)" class="alert alert-danger">\n    <div [hidden]="!postal.errors.required" class="alert alert-danger">\n      Postal code is required\n    </div>\n    </div>\n  </ion-item>\n					<ion-item>\n						<ion-label floating>City/Town</ion-label>\n						<ion-input  [(ngModel)]="data.city" name="city" type="text" id="city" required #city="ngModel"></ion-input>\n                        <div *ngIf="city.errors && (city.dirty || city.touched)" class="alert alert-danger">\n						<div [hidden]="!city.errors.required" class="alert alert-danger">\n							City/Town is required\n						</div>\n						</div>\n                       \n					</ion-item>\n \n    <div class="search_field">\n                   <ion-label style="color:#999;">Country</ion-label>	\n		 <ion-searchbar placeholder="Country" (ionInput)="getItems($event)" autocorrect="off" [(ngModel)]="data.country" name="country" id="country" required #country="ngModel"></ion-searchbar>			\n					\n                    <ion-list *ngIf="buttonClicked" radio-group [(ngModel)]="data.sel_country" name="sel_country">\n\n                    <ion-item *ngFor="let item of items">\n                    <ion-label>{{item.Country.country_name}}</ion-label>\n                    <ion-radio (ionSelect)="mcqAnswer(item.Country.country_name)" value="{{item.Country.country_name}}" ></ion-radio>\n                    </ion-item>\n\n                    </ion-list>   \n			\n					<ion-label class="alert alert-danger" color="danger">\n						<div *ngIf="country.errors && (country.dirty || country.touched)" class="alert alert-danger">\n						<div [hidden]="!country.errors.required" class="alert alert-danger">\n							Country is required\n						</div>\n						</div>\n					 </ion-label> \n</div>\n\n  <ion-item>\n    <ion-label floating>Address</ion-label>\n    <ion-input  [(ngModel)]="data.address" name="address" type="text" id="address" required #address="ngModel"></ion-input>\n\n    <div *ngIf="address.errors && (address.dirty || address.touched)" class="alert alert-danger">\n    <div [hidden]="!address.errors.required" class="alert alert-danger">\n      Address is required\n    </div>\n    </div>\n  </ion-item>\n\n</ion-list>\n</form>\n\n<button ion-button block round type="submit" color="theme" [disabled]="!heroForm.form.valid" (click)="editinfo(heroForm)">SUBMIT</button>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\editprofile\editprofile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */]])
], EditprofilePage);

//# sourceMappingURL=editprofile.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangepasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(21);
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
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangepasswordPage = (function () {
    function ChangepasswordPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = '';
        this.User = '';
    }
    ChangepasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangepasswordPage');
    };
    ChangepasswordPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ChangepasswordPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChangepasswordPage.prototype.changepwd = function (signup2) {
        var _this = this;
        if (signup2.value.newpassword != signup2.value.cpassword) {
            this.showToast('Both passwords are not matching!');
        }
        else {
            var userInfo = localStorage.getItem('userData1');
            console.log(userInfo);
            //				 var userEmail = userInfo.User.email;
            var userEmail = userInfo;
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
            headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
            var options_1 = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
            var url = this.dataprovider.base_url + 'users/changepassword';
            var postdata = {
                email: userEmail,
                old_password: signup2.value.password,
                new_password: signup2.value.newpassword,
            };
            console.log(" postdata" + JSON.stringify(postdata));
            var Loader = this.loadingCtrl.create({
                content: ' ',
            });
            var serialized_all = this.serializeObj(postdata);
            Loader.present().then(function () {
                _this.http.post(url, serialized_all, options_1).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    Loader.dismiss();
                    if (data.isSucess == "true") {
                        //  localStorage.setItem("userData", JSON.stringify(data.data));
                        _this.showToast(data.msg);
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
                    }
                    else {
                        _this.showToast(data.msg);
                    }
                }, function (err) {
                    console.log("Error");
                    Loader.dismiss();
                    console.log("Error!:", err);
                });
            });
        }
    };
    ChangepasswordPage.prototype.back = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    return ChangepasswordPage;
}());
ChangepasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-changepassword',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\changepassword\changepassword.html"*/'<!--\n  Generated template for the ChangepasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>CHANGE PASSWORD</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n<form #heroForm="ngForm"novalidate class="change">\n<ion-list>\n\n  <ion-item>\n    <ion-label floating>Old Password</ion-label>\n    <ion-input  [(ngModel)]="data.password" name="password" type="password" id="password" required  #password="ngModel"></ion-input>\n\n    <div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n    <div [hidden]="!password.errors.required" class="alert alert-danger">\n      Password is required\n      </div>\n    </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>New Password</ion-label>\n    <ion-input  [(ngModel)]="data.newpassword" name="newpassword" type="password" id="newpassword" required minlength="6" maxlength="50"  #newpassword="ngModel"></ion-input>\n\n    <div *ngIf="newpassword.errors && (newpassword.dirty || newpassword.touched)" class="alert alert-danger">\n    <div [hidden]="!newpassword.errors.required" class="alert alert-danger">\n     New password is required\n      </div>\n    </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Confirm Password</ion-label>\n    <ion-input  [(ngModel)]="data.cpassword" name="cpassword" type="password" id="cpassword" required minlength="6" maxlength="50"  #cpassword="ngModel"></ion-input>\n\n    <div *ngIf="cpassword.errors && (cpassword.dirty || cpassword.touched)" class="alert alert-danger">\n    <div [hidden]="!cpassword.errors.required" class="alert alert-danger">\n      Confirm password is required\n      </div>\n    </div>\n  </ion-item>\n\n  \n\n</ion-list>\n<button ion-button block round type="submit" color="theme" [disabled]="!heroForm.form.valid" (click)="changepwd(heroForm)">SUBMIT</button>\n</form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\changepassword\changepassword.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ChangepasswordPage);

//# sourceMappingURL=changepassword.js.map

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modalsrep_modalsrep__ = __webpack_require__(247);
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
 * Generated class for the PrivacypolicyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = (function () {
    function HelpPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, modalCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.modalCtrl = modalCtrl;
        this.app = app;
        this.data = {};
        this.policy();
    }
    HelpPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    HelpPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage.prototype.policy = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'staticpages/view';
        var postdata = {
            page: 'user_help'
        };
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.status === true) {
                    _this.data = data;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    HelpPage.prototype.popup = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__modalsrep_modalsrep__["a" /* ModalsrepPage */]);
        modal.present();
        modal.onDidDismiss(function (data) {
            //this.notificationss();
        });
    };
    return HelpPage;
}());
HelpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-help',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\help\help.html"*/'<!--\n  Generated template for the PrivacypolicyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <!--  <button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button> -->\n    <ion-title>HELP</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="policy">\n<h1>{{data.title}}</h1>\n	<p>{{data.desc}}</p>\n</div>\n<button ion-button block round color="theme" class="btm_lrg" (click)="popup()">Report an issue</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\help\help.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], HelpPage);

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chat_chat__ = __webpack_require__(57);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AllchatPage = (function () {
    function AllchatPage(navCtrl, navParams, dataprovider, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataprovider = dataprovider;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.udata = '';
        this.show_send_button = 0;
        this.data = '';
        this.fileSelected = 0;
        this.docUri = "";
        this.custoID = '';
        //      this.param = navParams.get("customerId");
        //      this.id = localStorage.getItem('user_id');
        this.custoID = JSON.parse(localStorage.getItem('userData'));
        console.log(this.custoID);
        this.All_message();
        this.getUser();
    }
    AllchatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
    };
    //  back(){
    //    this.navCtrl.push(ContactusPage);
    //}
    AllchatPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    AllchatPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    AllchatPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AllchatPage.prototype.getUser = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var url = this.dataprovider.base_url + 'users/userinfo';
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            uid: this.custoID
        };
        var serialize = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialize, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.udata = data.data.User;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    AllchatPage.prototype.All_message = function () {
        var _this = this;
        var url = this.dataprovider.base_url + 'users/allchat';
        var postdata = {
            myid: this.custoID,
        };
        console.log("postdata: " + JSON.stringify(postdata));
        var serialized_data = this.serializeObj(postdata);
        console.log(serialized_data);
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(url, serialized_data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.myChat = response.data;
                    // alert(this.myChat.length);
                    _this.converstaion = _this.myChat.length;
                    console.log(_this.converstaion);
                    console.log("bhumika");
                }
                else {
                    _this.myChat = response.data;
                }
            });
        });
    };
    AllchatPage.prototype.chatuser = function (uid) {
        console.log(uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__chat_chat__["a" /* ChatPage */], { prid: uid });
    };
    return AllchatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], AllchatPage.prototype, "content", void 0);
AllchatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-allchat',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\allchat\allchat.html"*/'<ion-header>\n        \n  <ion-navbar>\n     <!--<ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back" (click)="back()"></ion-icon>-->\n     <ion-title class="header-title">MY CHATS</ion-title>\n  </ion-navbar>\n        \n</ion-header>\n        \n<ion-content class="has-footer">\n    \n<div *ngIf="converstaion!=0" class="chatouter">\n<ion-list>\n  <ion-item class="brdr_btn" *ngFor="let Chat_list of myChat" (click)="chatuser(Chat_list.B.id)">\n            \n    <ion-avatar item-start >\n        \n      <img src="{{Chat_list.B.image}}">\n    </ion-avatar>\n    <h2 class="usr_nme">{{Chat_list.B.firstname}} {{Chat_list.B.lastname}}</h2>\n<!--              <h3 class="usr_nme" *ngIf="this.myChat==undefined">No Chats</h3>-->\n\n    <p class="cht_txt">{{Chat_list[0].lastmessage}}</p>\n\n    <span class="date_Sze">{{Chat_list[0].created | date:\'MMM d, y h:mm a\'}}</span>\n  </ion-item>\n</ion-list>\n</div>\n<div class="nodata" *ngIf="!myChat?.length">\n  <div class="chatimg">\n  <img src="assets/imgs/no_msg.png">\n  </div>\n<h5 class="nofound">No Message, yet.</h5>\n<p class="nofoundpara">No message in your inbox, yet. Start chatting with people arround you.</p>\n</div>\n\n</ion-content>\n        \n\n        \n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\allchat\allchat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], AllchatPage);

//# sourceMappingURL=allchat.js.map

/***/ }),

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailproviderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(21);
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
 * Generated class for the DetailproviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailproviderPage = (function () {
    function DetailproviderPage(navCtrl, navParams, dataprovider, http, toastCtrl, loadingCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataprovider = dataprovider;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.app = app;
        this.data = '';
        this.proid = '';
        this.proid = navParams.get('providerid');
        this.sID = navParams.get('service');
        this.oID = navParams.get('orderId');
        this.amount1 = navParams.get('amn');
        this.name1 = navParams.get('nm');
        console.log(this.proid);
        console.log(this.amount1);
        console.log(this.name1);
        this.getprofile1();
        this.getOrderItem();
    }
    DetailproviderPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    DetailproviderPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    DetailproviderPage.prototype.getOrderItem = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'orders/getItemById';
        var postdata1 = {
            oid: this.oID
        };
        var serialized_all = this.serializeObj(postdata1);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialized_all, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(JSON.stringify(data));
                if (data.isSuccess === true) {
                    _this.order = data.data.Order.schedule_date + ' (' + data.data.Order.schedule_time + ')';
                    console.log(_this.order);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    DetailproviderPage.prototype.getprofile1 = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/userinfo';
        var postdata1 = {
            uid: this.proid
        };
        console.log('profile' + JSON.stringify(postdata1));
        var serialized_all = this.serializeObj(postdata1);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialized_all, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(JSON.stringify(data));
                if (data.isSucess == "true") {
                    _this.img = data.data.User.image;
                    _this.name = data.data.User.firstname + ' ' + data.data.User.lastname;
                    console.log(_this.img);
                    console.log(_this.name);
                }
                else {
                    alert("else");
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    DetailproviderPage.prototype.goDetail = function (detailForm) {
        var _this = this;
        //  submit_rating(data){
        //          var provID = JSON.parse(localStorage.getItem('provid'));
        //          console.log(provID);
        var user = JSON.parse(localStorage.getItem('userData2'));
        var userID = user.User.id;
        //            var prID3 = localStorage.getItem('selectedprovider');
        //            var prID2 = prID3.split('-');
        //            var prId = prID2[0];
        //                
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/rating';
        var postdata = {
            customer_id: userID,
            provider_id: this.proid,
            rating: detailForm.value.jobstar,
            comment: detailForm.value.comment
        };
        console.log("postdata" + JSON.stringify(postdata));
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                _this.showToast(data.msg);
                //                                                   this.navCtrl.setRoot(TabsPage);
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    DetailproviderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailproviderPage');
    };
    return DetailproviderPage;
}());
DetailproviderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-detailprovider',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\detailprovider\detailprovider.html"*/'<!--\n  Generated template for the DetailproviderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n<!--      <button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>DETAIL PROVIDER</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <form #detailForm="ngForm" novalidate>\n<ion-grid>\n  <ion-row>\n      <ion-col col-4>\n        <div class="usr_pro">\n            <img src="{{this.img}}">\n        </div>\n      </ion-col>\n      \n      <ion-col col-8>\n          <div class="usr_txxt">\n              <h3>{{this.name}}</h3>\n              <!--<p>Lorem ipsum is a dummy text<span class="twnt_txt">($20.00)</span></p>-->\n              <p>{{this.name1}}<span class="twnt_txt">(${{this.amount1}})</span></p>\n              <p>Schedule Day<br/><span class="twnt_txt">{{order}}</span></p>\n        </div>     \n      </ion-col>\n  </ion-row>\n</ion-grid>\n    <div class="spacer"></div>\n    <div class="write_rvw">\n        <div class="hding_rvw">\n            <h3>Write A Review</h3>      \n        </div>\n        <ion-grid>\n  <ion-row>\n      <ion-col col-12>\n          <div class="star_sctin">\n              <rating [(ngModel)]="data.jobstar" name="jobstar"></rating> \n<!--              <ul>\n                  <li>  <ion-icon name="star"></ion-icon></li>\n                <li>  <ion-icon name="star"></ion-icon></li>\n                <li>  <ion-icon name="star"></ion-icon></li>\n                <li>  <ion-icon name="star"></ion-icon></li>\n                <li>  <ion-icon name="star"></ion-icon></li>\n              </ul>-->\n        </div>\n      </ion-col>\n  </ion-row>\n            <ion-row>\n      <ion-col col-12>\n          <div class="write_txt">\n              \n              <textarea rows="4" cols="33"   [(ngModel)]="data.comment" name="comment" type="text" id="comment" required #comment="ngModel">\n          Rate this job\n</textarea> \n        </div>  \n         <button ion-button color="light" class="current btns" round (click)="goDetail(detailForm)" [disabled]="!detailForm.form.valid">Submit</button>\n          \n      </ion-col>\n  </ion-row>\n</ion-grid>\n        \n    </div>\n    </form>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\detailprovider\detailprovider.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], DetailproviderPage);

//# sourceMappingURL=detailprovider.js.map

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__confirm_confirm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chat_chat__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__fees_fees__ = __webpack_require__(188);
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
 * Generated class for the ViewdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewdetailPage = (function () {
    function ViewdetailPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.providerInfo = {};
        this.user = navParams.get("providerId");
        this.providerDistance = navParams.get("provider_distance");
        this.getprofile();
    }
    ViewdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewdetailPage');
    };
    ViewdetailPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ViewdetailPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ViewdetailPage.prototype.map = function (pid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__confirm_confirm__["a" /* ConfirmPage */], { providerID: pid });
    };
    ViewdetailPage.prototype.chatbx = function (proid) {
        console.log(proid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__chat_chat__["a" /* ChatPage */], { prid: proid });
    };
    ViewdetailPage.prototype.getprofile = function () {
        var _this = this;
        var userID = this.user;
        var currentUser = localStorage.getItem("userData");
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/provideruserinfo';
        var postdata = {
            uid: userID,
            currentUser: currentUser,
            distance: this.providerDistance
        };
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var serialize = this.serializeObj(postdata);
        Loader.present().then(function () {
            _this.http.post(url, serialize, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                // console.log(data);
                if (data.isSucess == "true") {
                    _this.providerInfo = data.data;
                    //this.converstaion =  data.data.length;
                    //console.log(this.converstaion);                                               
                }
                else {
                    _this.providerInfo = data.data;
                    //this.converstaion =  data.data.length;
                    //console.log(this.converstaion); 
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    //chatbx(proid)
    //{
    //    this.navCtrl.push(ChatPage,{prid:proid});
    //    
    //}
    //backtosrvc()
    //{
    //    this.navCtrl.push(ServiceproviderlistPage);
    //    
    //}
    ViewdetailPage.prototype.gotofees = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__fees_fees__["a" /* FeesPage */]);
    };
    return ViewdetailPage;
}());
ViewdetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4_ionic2_rating__["a" /* Ionic2RatingModule */] // Put ionic2-rating module here
        ]
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-viewdetail',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\viewdetail\viewdetail.html"*/'<!--\n  Generated template for the ViewdetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title>SERVICE PROVIDER DETAIL</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="detail">\n		<!--<h2>{{providerInfo.firstname}} {{providerInfo.lastname}}</h2>-->\n                \n		<div class="form-sec">\n\n		\n  					\n		<ion-label ><span>Distance</span>{{providerInfo.distance}} Kilometers</ion-label>\n		<ion-label ><span>Provider type</span>{{providerInfo.provider_type}}</ion-label>\n		\n		<ion-label *ngIf="providerInfo.companyname != \'\'"><span>Company name</span>{{providerInfo.companyname}}</ion-label>	\n		<ion-label ><span>Profession</span>{{providerInfo.profession}}</ion-label>\n		<ion-label ><span>Course</span>{{providerInfo.course}}</ion-label>\n		<ion-label ><span>Year of graduation</span>{{providerInfo.c_year}}</ion-label>\n		<ion-label ><span>Years of experience</span>{{providerInfo.work_exp}}</ion-label>\n              <ion-label ><span>Charge rate{{providerInfo.pertype}}</span> {{providerInfo.rate}}</ion-label>		\n              <ion-label ><span>Avg. work rating</span>\n			  <rating [(ngModel)]="providerInfo.ratings" readOnly="true" max="5"></rating>\n			  </ion-label>\n	</div>\n\n<!--button *ngIf="converstaion!=0" ion-button  round full class="btns" color="theme" (click)="map(providerInfo.id)" >\n	SEE LOCATION     \n</button>\n\n<button *ngIf="converstaion!=0" ion-button  round full class="btns" color="theme" (click)="chatbx(providerInfo.id)" >\n	WANT TO CHAT    \n</button-->\n\n\n\n\n  <!--div class="form-sec" *ngIf="converstaion==0">\n    <h3>You are not able to see the information about the provider untill provider accepts your service request.</h3>\n  </div-->\n</div>\n\n<!--     <ion-grid no-padding>\n               <ion-row>\n                   <ion-col col-12>\n                        <ion-icon (click)="chatbx(providerInfo.id)" class="chat" name="chatboxes"></ion-icon>\n                   </ion-col>\n               </ion-row>\n     </ion-grid>-->\n	 \n	 <div class="notice">\n	 <ion-grid no-padding>\n	 <ion-row>\n	 <ion-col col-12>\n\n<h5>Important note: </h5>\n</ion-col>\n<ion-col col-12>\n<p>The identity of the Service Provider and related contact details, copies of documents and other important information will be shown to you once the Service Provider has accepted your job offer and you have paid ya-kazi service fees.</p>\n</ion-col>\n\n\n</ion-row>\n</ion-grid>\n</div>\n<button class="feesbtn" ion-button block round type="submit" color="theme" (click)="gotofees()">VIEW ya-kazi FEES</button>\n</ion-content>\n '/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\viewdetail\viewdetail.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ViewdetailPage);

//# sourceMappingURL=viewdetail.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
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
 * Generated class for the TermsconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FeesPage = (function () {
    function FeesPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = {};
        this.terms();
    }
    FeesPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    FeesPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    FeesPage.prototype.terms = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'staticpages/view';
        var postdata = {
            page: 'fees'
        };
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.status === true) {
                    _this.data = data;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    FeesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsconditionPage');
    };
    FeesPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return FeesPage;
}());
FeesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-fees',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\fees\fees.html"*/'<!--\n  Generated template for the TermsconditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>ya-kazi SERVICE FEES</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="terms">\n	<p>{{data.desc}}</p>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\fees\fees.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], FeesPage);

//# sourceMappingURL=fees.js.map

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__projects_projects__ = __webpack_require__(77);
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
 * Generated class for the TermsconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var StaticPage = (function () {
    function StaticPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = {};
    }
    StaticPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    StaticPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    StaticPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsconditionPage');
    };
    StaticPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    StaticPage.prototype.gohome = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    StaticPage.prototype.gopanding = function () {
        //this.app.getRootNav().setRoot(TabsPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__projects_projects__["a" /* ProjectsPage */], { active: 'pending' });
    };
    return StaticPage;
}());
StaticPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-static',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\static\static.html"*/'<!--\n  Generated template for the TermsconditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>SERVICE PROVIDERS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="terms">\n\n	<p style="font-size:15px;">Your request has been sent to the Service Provider. Please wait for the Service Provider to respond.</p>\n	<p style="font-size:15px;">If the Service Provider takes longer than you can wait, you may select another Service Provider.</p>\n</div>\n<!--button class="reqbtn" ion-button block round type="submit" color="theme" (click)="back()">REQUEST ANOTHER SERVICE PROVIDER</button>\n<button class="reqbtn" ion-button block round type="submit" color="theme" (click)="gohome()">CHANGE SEARCH CRITERIA</button-->\n\n<button class="reqbtn" ion-button block round type="submit" color="theme" (click)="gopanding()">GO TO PENDING JOBS</button>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\static\static.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], StaticPage);

//# sourceMappingURL=static.js.map

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefundPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
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
 * Generated class for the TermsconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RefundPage = (function () {
    function RefundPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = {};
        this.terms();
    }
    RefundPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    RefundPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    RefundPage.prototype.terms = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'staticpages/view';
        var postdata = {
            page: 'refund'
        };
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.status === true) {
                    _this.data = data;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    RefundPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsconditionPage');
    };
    RefundPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return RefundPage;
}());
RefundPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-refund',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\refund\refund.html"*/'<!--\n  Generated template for the TermsconditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>CANCELLATION AND REFUND POLICY</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="terms">\n	<p>{{data.desc}}</p>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\refund\refund.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], RefundPage);

//# sourceMappingURL=refund.js.map

/***/ }),

/***/ 200:
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
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__projects_projects__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__allchat_allchat__ = __webpack_require__(185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__projects_projects__["a" /* ProjectsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__allchat_allchat__["a" /* AllchatPage */];
        var t = localStorage.getItem('setActiveTab');
        if (t != '') {
            this.selectedindex = localStorage.getItem('setActiveTab');
        }
        else {
            this.selectedindex = '0';
        }
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabs',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="selectedindex">\n  <ion-tab [root]="tab1Root" tabTitle="HOME" tabIcon="one"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="MY JOBS" tabIcon="two"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="PROFILE" tabIcon="three"></ion-tab>\n   <ion-tab [root]="tab4Root" tabTitle="CHATS" tabIcon="four"></ion-tab>\n</ion-tabs>\n\n\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/aboutservice/aboutservice.module": [
		503,
		25
	],
	"../pages/allchat/allchat.module": [
		504,
		24
	],
	"../pages/category/category.module": [
		505,
		23
	],
	"../pages/changepassword/changepassword.module": [
		506,
		22
	],
	"../pages/chat/chat.module": [
		507,
		21
	],
	"../pages/confirm/confirm.module": [
		508,
		20
	],
	"../pages/congratulations/congratulations.module": [
		509,
		19
	],
	"../pages/detailprovider/detailprovider.module": [
		510,
		18
	],
	"../pages/editprofile/editprofile.module": [
		511,
		17
	],
	"../pages/fees/fees.module": [
		512,
		16
	],
	"../pages/forgotpassword/forgotpassword.module": [
		513,
		15
	],
	"../pages/help/help.module": [
		514,
		14
	],
	"../pages/location/location.module": [
		515,
		13
	],
	"../pages/ongoing-next/ongoing-next.module": [
		516,
		12
	],
	"../pages/payment/payment.module": [
		517,
		11
	],
	"../pages/privacypolicy/privacypolicy.module": [
		518,
		10
	],
	"../pages/profile/profile.module": [
		519,
		9
	],
	"../pages/projects/projects.module": [
		528,
		8
	],
	"../pages/refund/refund.module": [
		520,
		7
	],
	"../pages/schedule/schedule.module": [
		521,
		6
	],
	"../pages/servicedetail/servicedetail.module": [
		522,
		5
	],
	"../pages/servicerepair/servicerepair.module": [
		523,
		4
	],
	"../pages/services/services.module": [
		524,
		3
	],
	"../pages/static/static.module": [
		525,
		2
	],
	"../pages/termscondition/termscondition.module": [
		526,
		1
	],
	"../pages/viewdetail/viewdetail.module": [
		527,
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
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AboutPage = (function () {
    function AboutPage(navCtrl, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = {};
        this.aboutPage();
    }
    AboutPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    AboutPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AboutPage.prototype.aboutPage = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'staticpages/view';
        var postdata = {
            page: 'about'
        };
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.status === true) {
                    _this.data = data;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    AboutPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\about\about.html"*/'<!--\n  Generated template for the AboutusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>ABOUT US</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<div class="about">\n<h1>{{data.title}}</h1>\n	<p>{{data.desc}}</p>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\about\about.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsrepPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ModalsrepPage = (function () {
    function ModalsrepPage(navCtrl, http, loadingCtrl, dataprovider, platform, alertCtrl, toastCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.dataprovider = dataprovider;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.data = '';
        this.userid = localStorage.getItem('userData');
    }
    ModalsrepPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ModalsrepPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ModalsrepPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalsrepPage.prototype.issuereport = function (detailForm) {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/report';
        var data_form = {
            user_id: this.userid,
            message: detailForm.value.report,
            subject: 'report',
            jobid: '0'
        };
        var Serialized = this.serializeObj(data_form);
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata);
                if (sdata.status == true) {
                    _this.closeModal();
                    _this.showToast(sdata.msg);
                    // this.list_active();
                    //     var i =  document.getElementById('active');
                    //      i.click();
                }
            }, function (error) {
                Loader.dismiss();
            });
        });
    };
    return ModalsrepPage;
}());
ModalsrepPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modalsrep',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\modalsrep\modalsrep.html"*/'<!--ion-header>\n  <ion-navbar  color="blues">\n    <ion-title>\n      <h4 class="noti_less">Modal</h4>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header-->\n<ion-content class="menu size_adj">\n<div class="main_covr">\n<div class="cover_mod">\n  <!--div class="pic_mod">\n  <img src="assets/image/rej.png" width="20%">\n  </div-->\n  <form #rejectForm="ngForm"novalidate>\n  <div class="reject_alrt">\n  <h4>Report an issue</h4>\n  <div class="star">\n   <textarea name="report" [(ngModel)]="data.report" id="report" #report="ngModel" required></textarea>\n   </div>\n  </div>\n  <div class="buton_cover">\n     <button ion-button color="secondary" class="acc_green" (click)="issuereport(rejectForm)">SUBMIT</button>\n<button ion-button color="danger" class="rej_red" (click)="closeModal()">CANCEL</button>\n  </div>\n  </form>\n</div>\n</div>\n</ion-content>'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\modalsrep\modalsrep.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], ModalsrepPage);

//# sourceMappingURL=modalsrep.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalsPage = (function () {
    function ModalsPage(navCtrl, http, loadingCtrl, dataprovider, platform, alertCtrl, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.dataprovider = dataprovider;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.data = '';
        this.provider_id = localStorage.getItem('providermodalid');
        this.job_id = localStorage.getItem('jobid');
    }
    ModalsPage.prototype.ngOnInit = function () {
        this.data = {
            jobstar: '1'
        };
    };
    ModalsPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 3000,
            position: 'middle'
        });
        toast.present();
    };
    ModalsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ModalsPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalsPage.prototype.rating = function (detailForm) {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('userData2'));
        var userID = user.User.id;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/rating';
        var postdata = {
            customer_id: userID,
            provider_id: this.provider_id,
            jobid: this.job_id,
            rating: detailForm.value.jobstar
        };
        console.log("postdata" + JSON.stringify(postdata));
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                _this.showToast(data.msg);
                //this.app.getRootNav().setRoot(TabsPage);
                _this.closeModal();
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    return ModalsPage;
}());
ModalsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modals',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\modals\modals.html"*/'<!--ion-header>\n  <ion-navbar  color="blues">\n    <ion-title>\n      <h4 class="noti_less">Modal</h4>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header-->\n<ion-content class="menu size_adj">\n<div class="main_covr">\n<div class="cover_mod">\n  <!--div class="pic_mod">\n  <img src="assets/image/rej.png" width="20%">\n  </div-->\n  <form #rejectForm="ngForm"novalidate>\n  <div class="reject_alrt">\n  <h4>Rate this job</h4>\n  <div class="star">\n   <rating ng-init="1" [(ngModel)]="data.jobstar" name="jobstar"></rating> \n   </div>\n  </div>\n  <div class="buton_cover">\n     <button ion-button color="secondary" class="acc_green" (click)="rating(rejectForm)">SUBMIT</button>\n<button ion-button color="danger" class="rej_red" (click)="closeModal()">CANCEL</button>\n  </div>\n  </form>\n</div>\n</div>\n</ion-content>'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\modals\modals.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], ModalsPage);

//# sourceMappingURL=modals.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ContactPage = (function () {
    function ContactPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = '';
        this.param = navParams.get("providerId");
        this.param1 = navParams.get("jobid");
    }
    ContactPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    ContactPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ContactPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ContactPage.prototype.contact = function (signup) {
        var _this = this;
        var userID = JSON.parse(localStorage.getItem('userData'));
        var data_form = {
            user_id: userID,
            subject: signup.value.subject,
            message: signup.value.message,
            jobid: this.param1,
        };
        console.log(data_form);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/report';
        var serialized_all = this.serializeObj(data_form);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialized_all, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status === true) {
                    _this.navCtrl.pop();
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
                else {
                    var toast = _this.toastCtrl.create({
                        message: data.msg,
                        duration: 3000,
                        position: 'middle'
                    });
                    toast.present();
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    return ContactPage;
}());
ContactPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-contact',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\contact\contact.html"*/'<!--\n  Generated template for the ContactusPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n       <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back" (click)="back()"></ion-icon>\n    <ion-title class="header-title">Contact Us</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  \n   <!--<ion-list class="contact">\n    <ion-item>Email Us     <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end (click)="maIl()"></ion-icon></ion-item>\n    <ion-item>Chat with us   <ion-icon ios="ios-arrow-forward" md="md-arrow-forward" item-end (click)="chat()"></ion-icon>  </ion-item>\n\n</ion-list>-->\n<form #signup="ngForm">\n<ion-list class="cntct-list">\n \n  <ion-item>\n    <!--<ion-label >Subject</ion-label>-->\n    <ion-input type="text" name="subject" [(ngModel)]="data.subject" id="subject" #subject="ngModel" required placeholder="Subject"></ion-input>\n    \n  </ion-item>\n\n  <ion-item>\n    <!--<ion-input type="text" value=""></ion-input>-->\n\n    <ion-textarea class="cntct frm" type="text" name="message" [(ngModel)]="data.message" id="message" #message="ngModel" required rows="3" col="70" placeholder="Message" ></ion-textarea>\n  </ion-item>\n  <button ion-button block round color="theme" class="cntctbtn" ion-button full type="submit" (click)="contact(signup)" [disabled]="!signup.form.valid">SEND MESSAGE</button>\n\n</ion-list></form>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\contact\contact.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], ContactPage);

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalscancelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ModalscancelPage = (function () {
    function ModalscancelPage(navCtrl, http, loadingCtrl, dataprovider, platform, alertCtrl, toastCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadingCtrl = loadingCtrl;
        this.dataprovider = dataprovider;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.viewCtrl = viewCtrl;
        this.data = '';
        this.provider_id = localStorage.getItem('providermodalid');
        this.job_id = localStorage.getItem('jobid');
        this.cprice = localStorage.getItem('canceled_price');
    }
    ModalscancelPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 9000,
            position: 'middle'
        });
        toast.present();
    };
    ModalscancelPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ModalscancelPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    ModalscancelPage.prototype.cancelByUser = function (detailForm) {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/rescheduleduserrqsts';
        var data_form = {
            sid: this.job_id,
            cancel_reason: detailForm.value.reason,
            price: this.cprice
        };
        var Serialized = this.serializeObj(data_form);
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata);
                if (sdata.status == true) {
                    _this.closeModal();
                    _this.showToast(sdata.msg);
                    // this.list_active();
                    var i = document.getElementById('cancelled');
                    i.click();
                }
            }, function (error) {
                Loader.dismiss();
            });
        });
    };
    return ModalscancelPage;
}());
ModalscancelPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-modalscancel',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\modalscancel\modalscancel.html"*/'<!--ion-header>\n  <ion-navbar  color="blues">\n    <ion-title>\n      <h4 class="noti_less">Modal</h4>\n    </ion-title>\n  </ion-navbar>\n\n</ion-header-->\n<ion-content class="menu size_adj">\n<div class="main_covr">\n<div class="cover_mod">\n  <!--div class="pic_mod">\n  <img src="assets/image/rej.png" width="20%">\n  </div-->\n  <form #rejectForm="ngForm"novalidate>\n  <div class="reject_alrt">\n  <h4>Reason/s for declining</h4>\n  <div class="star">\n   <textarea name="reason" style="width:100%" rows="5" [(ngModel)]="data.reason" id="reason" #reason="ngModel" required></textarea>\n   </div>\n  </div>\n  <div class="buton_cover">\n     <button ion-button color="secondary" class="acc_green" (click)="cancelByUser(rejectForm)"  [disabled]="!rejectForm.form.valid">SUBMIT</button>\n<button ion-button color="danger" class="rej_red" (click)="closeModal()">CANCEL</button>\n  </div>\n  </form>\n</div>\n</div>\n</ion-content>'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\modalscancel\modalscancel.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ViewController */]])
], ModalscancelPage);

//# sourceMappingURL=modalscancel.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SplashPage = (function () {
    function SplashPage(navCtrl, http, toastCtrl, loadingCtrl, platform, app) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.app = app;
    }
    SplashPage.prototype.sign_acc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    SplashPage.prototype.sign_inc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    return SplashPage;
}());
SplashPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-splash',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\splash\splash.html"*/'\n<ion-content style="width:100%; float:left; background-color:#fff; ">\n   \n    \n    <div class="logo_set">\n        <img src="assets/imgs/petr_logo.jpg"> \n\n<div class="btn">\n    <button ion-button block type="submit" color="theme" class="bck_sys" (click)=\'sign_acc()\'>Sign Up</button>\n    <button ion-button block type="submit" color="theme" class="bck_sys" (click)=\'sign_inc()\'>Sign In</button>\n </div></div>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\splash\splash.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], SplashPage);

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(355);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_about_about__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_privacypolicy_privacypolicy__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_termscondition_termscondition__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_projects_projects__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_services_services__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_location_location__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_allchat_allchat__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_editprofile_editprofile__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_forgotpassword_forgotpassword__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_changepassword_changepassword__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_servicerepair_servicerepair__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_aboutservice_aboutservice__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_schedule_schedule__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_category_category__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_confirm_confirm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_detailprovider_detailprovider__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_payment_payment__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_congratulations_congratulations__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_address_address__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_serviceproviderlist_serviceproviderlist__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_stripe__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_viewdetail_viewdetail__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_facebook__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_geocoder__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_google_plus__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_angularfire2__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42_angularfire2_auth__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ionic_native_camera__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44_ionic2_rating__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__ionic_native_diagnostic__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_ongoing_next_ongoing_next__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_modals_modals__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_contact_contact__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_help_help__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_splash_splash__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_modalscancel_modalscancel__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__pages_modalsrep_modalsrep__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__pages_servicedetail_servicedetail__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__pages_static_static__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__pages_fees_fees__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__pages_refund_refund__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























 // push notification
//import { Facebook } from '@ionic-native/facebook';










//import * as firebase from '@ionic-native/firebase';














//import { ModaltxtPage } from '../pages/modaltxt/modaltxt';

//import { AutoCompleteModule } from 'ionic2-auto-complete';


var firebaseConfig = {
    apiKey: "AIzaSyABufatOKqb9vfAm1VsVbZTWB8D6m7dUU0",
    authDomain: "home-service-b5565.firebaseio.com",
    databaseURL: "https://home-service-b5565.firebaseio.com",
    projectId: "home-service-b5565",
    storageBucket: "",
    messagingSenderId: "212098956896"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_termscondition_termscondition__["a" /* TermsconditionPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_projects_projects__["a" /* ProjectsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_services_services__["a" /* ServicesPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_modals_modals__["a" /* ModalsPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_servicerepair_servicerepair__["a" /* ServicerepairPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_aboutservice_aboutservice__["a" /* AboutservicePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_serviceproviderlist_serviceproviderlist__["a" /* ServiceproviderlistPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_confirm_confirm__["a" /* ConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_congratulations_congratulations__["a" /* CongratulationsPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_viewdetail_viewdetail__["a" /* ViewdetailPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_detailprovider_detailprovider__["a" /* DetailproviderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_allchat_allchat__["a" /* AllchatPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_ongoing_next_ongoing_next__["a" /* OngoingNextPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_modalscancel_modalscancel__["a" /* ModalscancelPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_modalsrep_modalsrep__["a" /* ModalsrepPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_static_static__["a" /* StaticPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_servicedetail_servicedetail__["a" /* ServicedetailPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_refund_refund__["a" /* RefundPage */],
            //  ModaltxtPage,
            __WEBPACK_IMPORTED_MODULE_56__pages_fees_fees__["a" /* FeesPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
            // AutoCompleteModule,
            __WEBPACK_IMPORTED_MODULE_44_ionic2_rating__["a" /* Ionic2RatingModule */],
            __WEBPACK_IMPORTED_MODULE_41_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/aboutservice/aboutservice.module#AboutservicePageModule', name: 'AboutservicePage', segment: 'aboutservice', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/allchat/allchat.module#AllchatPageModule', name: 'AllchatPage', segment: 'allchat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/category/category.module#CategoryPageModule', name: 'CategoryPage', segment: 'category', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/changepassword/changepassword.module#ChangepasswordPageModule', name: 'ChangepasswordPage', segment: 'changepassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/confirm/confirm.module#ConfirmPageModule', name: 'ConfirmPage', segment: 'confirm', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/congratulations/congratulations.module#CongratulationsPageModule', name: 'CongratulationsPage', segment: 'congratulations', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/detailprovider/detailprovider.module#DetailproviderPageModule', name: 'DetailproviderPage', segment: 'detailprovider', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/fees/fees.module#FeesPageModule', name: 'FeesPage', segment: 'fees', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/forgotpassword/forgotpassword.module#ForgotpasswordPageModule', name: 'ForgotpasswordPage', segment: 'forgotpassword', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/ongoing-next/ongoing-next.module#OngoingNextPageModule', name: 'OngoingNextPage', segment: 'ongoing-next', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacypolicy/privacypolicy.module#PrivacypolicyPageModule', name: 'PrivacypolicyPage', segment: 'privacypolicy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/refund/refund.module#RefundPageModule', name: 'RefundPage', segment: 'refund', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/schedule/schedule.module#SchedulePageModule', name: 'SchedulePage', segment: 'schedule', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/servicedetail/servicedetail.module#ServicedetailPageModule', name: 'ServicedetailPage', segment: 'servicedetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/servicerepair/servicerepair.module#ServicerepairPageModule', name: 'ServicerepairPage', segment: 'servicerepair', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/services/services.module#ServicesPageModule', name: 'ServicesPage', segment: 'services', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/static/static.module#StaticPageModule', name: 'StaticPage', segment: 'static', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/termscondition/termscondition.module#TermsconditionPageModule', name: 'TermsconditionPage', segment: 'termscondition', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/viewdetail/viewdetail.module#ViewdetailPageModule', name: 'ViewdetailPage', segment: 'viewdetail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/projects/projects.module#ProjectsPageModule', name: 'ProjectsPage', segment: 'projects', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_signin_signin__["a" /* SigninPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_location_location__["a" /* LocationPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_profile_profile__["a" /* ProfilePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_editprofile_editprofile__["a" /* EditprofilePage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_changepassword_changepassword__["a" /* ChangepasswordPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_termscondition_termscondition__["a" /* TermsconditionPage */],
            __WEBPACK_IMPORTED_MODULE_48__pages_modals_modals__["a" /* ModalsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_projects_projects__["a" /* ProjectsPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_services_services__["a" /* ServicesPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_servicerepair_servicerepair__["a" /* ServicerepairPage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_address_address__["a" /* AddressPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_aboutservice_aboutservice__["a" /* AboutservicePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_schedule_schedule__["a" /* SchedulePage */],
            __WEBPACK_IMPORTED_MODULE_35__pages_serviceproviderlist_serviceproviderlist__["a" /* ServiceproviderlistPage */],
            __WEBPACK_IMPORTED_MODULE_27__pages_category_category__["a" /* CategoryPage */],
            __WEBPACK_IMPORTED_MODULE_28__pages_confirm_confirm__["a" /* ConfirmPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_congratulations_congratulations__["a" /* CongratulationsPage */],
            __WEBPACK_IMPORTED_MODULE_37__pages_viewdetail_viewdetail__["a" /* ViewdetailPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_detailprovider_detailprovider__["a" /* DetailproviderPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_chat_chat__["a" /* ChatPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_allchat_allchat__["a" /* AllchatPage */],
            __WEBPACK_IMPORTED_MODULE_47__pages_ongoing_next_ongoing_next__["a" /* OngoingNextPage */],
            __WEBPACK_IMPORTED_MODULE_49__pages_contact_contact__["a" /* ContactPage */],
            __WEBPACK_IMPORTED_MODULE_50__pages_help_help__["a" /* HelpPage */],
            __WEBPACK_IMPORTED_MODULE_51__pages_splash_splash__["a" /* SplashPage */],
            __WEBPACK_IMPORTED_MODULE_52__pages_modalscancel_modalscancel__["a" /* ModalscancelPage */],
            __WEBPACK_IMPORTED_MODULE_53__pages_modalsrep_modalsrep__["a" /* ModalsrepPage */],
            __WEBPACK_IMPORTED_MODULE_54__pages_servicedetail_servicedetail__["a" /* ServicedetailPage */],
            __WEBPACK_IMPORTED_MODULE_55__pages_static_static__["a" /* StaticPage */],
            __WEBPACK_IMPORTED_MODULE_56__pages_fees_fees__["a" /* FeesPage */],
            __WEBPACK_IMPORTED_MODULE_57__pages_refund_refund__["a" /* RefundPage */]
            // ModaltxtPage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_42_angularfire2_auth__["a" /* AngularFireAuth */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_23__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_39__ionic_native_native_geocoder__["a" /* NativeGeocoder */],
            __WEBPACK_IMPORTED_MODULE_38__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_40__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_36__ionic_native_stripe__["a" /* Stripe */],
            __WEBPACK_IMPORTED_MODULE_43__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_45__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_46__ionic_native_in_app_browser__["a" /* InAppBrowser */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 403:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export NotificationModel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__ = __webpack_require__(333);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import * as firebase from '@ionic-native/firebase';

 // push notification
var NotificationModel = (function () {
    function NotificationModel() {
    }
    return NotificationModel;
}());

var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, app, firebase1, alertCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.app = app;
        this.firebase1 = firebase1;
        this.alertCtrl = alertCtrl;
        this.user = '';
        this.initializeApp();
        __WEBPACK_IMPORTED_MODULE_7_firebase___default.a.initializeApp({
            apiKey: "AIzaSyABufatOKqb9vfAm1VsVbZTWB8D6m7dUU0",
            authDomain: "home-service-b5565.firebaseio.com",
            databaseURL: "https://home-service-b5565.firebaseio.com",
            projectId: "home-service-b5565",
            storageBucket: "",
            messagingSenderId: "212098956896"
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            var email = localStorage.getItem('userData');
            if (email != null) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_splash_splash__["a" /* SplashPage */];
            }
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.firebase1.grantPermission();
            if (_this.platform.is('cordova')) {
                //Initialize push notification feature
                //alert("hiiii"+this.platform)
                if (_this.platform.is('android')) {
                    //alert("android"+this.platform)
                    _this.initializeFireBaseAndroid();
                }
                else {
                    //	alert("ios"+this.platform)
                    //this.initializeFireBaseIos();
                }
                //this.platform.is('android') ? this.initializeFireBaseAndroid() : this.initializeFireBaseIos();
            }
            else {
                //	alert(this.platform)
                console.log('Push notifications are not enabled since this is not a real device');
            }
        });
    };
    MyApp.prototype.initializeFireBaseAndroid = function () {
        var _this = this;
        return this.firebase1.getToken()
            .catch(function (error) { return console.error('Error getting token', error); })
            .then(function (token) {
            //alert(`The token is ${token}`);
            Promise.all([
                _this.firebase1.subscribe('firebase-app'),
                _this.firebase1.subscribe('android'),
                _this.firebase1.subscribe('userid-1') // Subscribe using the user id (hardcoded in this example)
            ]).then(function (result) {
                if (result[0])
                    console.log("Subscribed to FirebaseDemo");
                if (result[1])
                    console.log("Subscribed to Android");
                if (result[2])
                    console.log("Subscribed as User");
                _this.subscribeToPushNotificationEvents();
            });
        });
    };
    MyApp.prototype.saveToken = function (token) {
        // Send the token to the server
        //alert('Sending token to the server...');
        return Promise.resolve(true);
    };
    MyApp.prototype.subscribeToPushNotificationEvents = function () {
        var _this = this;
        //	alert("hello everyone");
        // Handle token refresh
        this.firebase1.onTokenRefresh().subscribe(function (token) {
            //alert(`The new token is ${token}`);
            localStorage.setItem('tokenId', token);
        }, function (error) {
            console.error('Error refreshing token', error);
        });
        // Handle incoming notifications
        this.firebase1.onNotificationOpen().subscribe(function (notification1) {
            if (notification1.tap) {
                //alert(notification1.title);
                if (notification1.title != ' ') {
                    localStorage.setItem('setActiveTab', '1');
                    if (notification1.title == 'The Service provider has accepted to discuss the job you are offering.') {
                        localStorage.setItem('setActiveTabs', 'all');
                    }
                    else {
                        localStorage.removeItem('setActiveTabs');
                    }
                }
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */]);
                //this.navCtrl.push(ProjectsPage);
            }
            // 		!notification1.tap	?  console.log('The user was using the app when the notification arrived...') 
            // : console.log('The app was closed when the notification arrived...')
            // alert starts
            var notificationAlert = _this.alertCtrl.create({
                title: '<center>' + notification1.title + '</center>',
                message: notification1.body,
                buttons: [{
                        text: 'Close',
                        role: 'cancel'
                    }, {
                        text: 'View',
                        handler: function () {
                            //TODO: Your logic here
                            _this.user = localStorage.getItem('userData');
                            //alert('user' + this.user)
                            if (_this.user == undefined || _this.user == null) {
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__pages_signin_signin__["a" /* SigninPage */]);
                            }
                            else {
                                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */], { message: notification1 }); //this.nav.setRoot(this.pages2.SchedulePage);
                                //this.navCtrl.push(ProjectsPage, { message: notification1 });
                            }
                        }
                    }]
            });
            if (notification1.title != undefined) {
                if (notification1.title != ' ') {
                    localStorage.setItem('setActiveTab', '1');
                    if (notification1.title == 'The Service provider has accepted to discuss the job you are offering.') {
                        localStorage.setItem('setActiveTabs', 'all');
                    }
                    else {
                        localStorage.removeItem('setActiveTabs');
                    }
                }
                notificationAlert.present();
            }
            else {
                //alert('title undefined');
            }
        }, function (error) {
            console.error('Error getting the notification', error);
            alert('err -> ' + JSON.stringify(error));
        }), function (err) {
            //alert('could not subscribe to push');
            alert(JSON.stringify(err));
        };
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__termscondition_termscondition__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__forgotpassword_forgotpassword__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















//import { Facebook } from '@ionic-native/facebook';
// import firebase from 'firebase'
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';
var SigninPage = (function () {
    function SigninPage(navCtrl, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app, facebook, fb, googlePlus, diagnostic, geolocation, nativeGeocoder
        //  private firebase1: Firebase,		// public afAuth: AngularFireAuth
    ) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.facebook = facebook;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.diagnostic = diagnostic;
        this.geolocation = geolocation;
        this.nativeGeocoder = nativeGeocoder;
        this.google_data = {};
        this.data = '';
        this.userProfile = null;
        this.fduser = '';
        this.userdata = '';
        this.userfbdata = '';
        this.Loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
    }
    SigninPage.prototype.ngOnInit = function () {
        this.geocoder = new google.maps.Geocoder();
    };
    SigninPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    SigninPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    SigninPage.prototype.to_signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.facebookLogin = function () {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (isAvailable === true) {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log(resp);
                    console.log(resp.coords.latitude);
                    console.log(resp.coords.longitude);
                    _this.lat = resp.coords.latitude;
                    _this.long = resp.coords.longitude;
                    localStorage.setItem('lat', _this.lat);
                    localStorage.setItem('long', _this.long);
                    var latLong = new google.maps.LatLng(_this.lat, _this.long);
                    _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                localStorage.setItem('location', results[1].formatted_address);
                                var Loader = _this.loadingCtrl.create({
                                    content: ' ',
                                });
                                var token = localStorage.getItem('tokenId');
                                var permissions = new Array();
                                var nav = _this.navCtrl;
                                permissions = ['public_profile', 'user_friends', 'email'];
                                _this.fb.login(permissions)
                                    .then(function (response) {
                                    // alert(JSON.stringify(response));
                                    var userId = response.authResponse.userID;
                                    var params = new Array();
                                    //Getting name and gender properties
                                    _this.fb.api("/me?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name,picture", params)
                                        .then(function (fduser) {
                                        //alert("rony"+JSON.stringify(fduser));
                                        fduser.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                                        //now we have the users info, let's save it in the NativeStorage
                                        var postdata = {
                                            email: fduser.email,
                                            name: fduser.name,
                                            fbId: fduser.id,
                                            image: fduser.picture,
                                            phone: '',
                                            role: 'customer',
                                            push_token: token
                                        };
                                        var serialized_all = _this.serializeObj(postdata);
                                        var url = _this.dataprovider.base_url + 'users/fblogin';
                                        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                                        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                        Loader.present().then(function () {
                                            _this.http.post(url, serialized_all, options)
                                                .map(function (res) { return res.json(); })
                                                .subscribe(function (response) {
                                                console.log(response);
                                                Loader.dismiss();
                                                //alert(JSON.stringify(response));
                                                if (response.status === true) {
                                                    localStorage.setItem("userData", response.data.User.id);
                                                    localStorage.setItem("fbData", JSON.stringify(response.data));
                                                    localStorage.setItem("userData2", JSON.stringify(response.data));
                                                    var toast = _this.toastCtrl.create({
                                                        message: response.data.msg,
                                                        duration: 3000,
                                                        position: 'middle'
                                                    });
                                                    toast.present();
                                                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                                                }
                                                else {
                                                    var toast = _this.toastCtrl.create({
                                                        message: response.data.msg,
                                                        duration: 3000,
                                                        position: 'middle'
                                                    });
                                                    toast.present();
                                                    //this.fb.logout();
                                                    _this.fb.logout()
                                                        .then(function (responses) {
                                                        localStorage.clear();
                                                    });
                                                }
                                            }, function (err) {
                                                Loader.dismiss();
                                                // alert(err);
                                            });
                                        });
                                    });
                                })
                                    .catch(function (e) { return console.log('Error logging into Facebook', e); });
                            }
                        }
                    }));
                }).catch(function (error) {
                    console.log('Error getting location', error);
                    _this.showToast('There is an error for getting location');
                });
            }
            else {
                _this.showToast('Please turn on your location');
            }
        }).catch(function (e) {
            alert(JSON.stringify(e));
        });
    };
    SigninPage.prototype.gplus = function () {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (isAvailable === true) {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log(resp);
                    console.log(resp.coords.latitude);
                    console.log(resp.coords.longitude);
                    _this.lat = resp.coords.latitude;
                    _this.long = resp.coords.longitude;
                    localStorage.setItem('lat', _this.lat);
                    localStorage.setItem('long', _this.long);
                    var latLong = new google.maps.LatLng(_this.lat, _this.long);
                    _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                localStorage.setItem('location', results[1].formatted_address);
                                var Loader = _this.loadingCtrl.create({
                                    content: ' ',
                                });
                                var token = localStorage.getItem('tokenId');
                                _this.googlePlus.login({}).then(function (res) {
                                    // alert(JSON.stringify(res));
                                    var data_google = {
                                        google_id: res.userId,
                                        email: res.email,
                                        firstname: res.givenName,
                                        lastname: res.familyName,
                                        push_token: token
                                    };
                                    var url = _this.dataprovider.base_url + 'users/googlelogin';
                                    var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
                                    var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                    var serialized_google = _this.serializeObj(data_google);
                                    console.log(serialized_google);
                                    Loader.present().then(function () {
                                        _this.http.post(url, serialized_google, options).map(function (res) { return res.json(); }).subscribe(function (datarestgoogle) {
                                            Loader.dismiss();
                                            // alert(JSON.stringify(datarestgoogle));
                                            if (datarestgoogle.status === true) {
                                                localStorage.setItem('userData', datarestgoogle.data.User.id);
                                                localStorage.setItem('googleData', JSON.stringify(datarestgoogle.data));
                                                localStorage.setItem("userData2", JSON.stringify(datarestgoogle.data));
                                                var toast = _this.toastCtrl.create({
                                                    message: datarestgoogle.msg,
                                                    duration: 3000
                                                });
                                                toast.present();
                                                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                                            }
                                            else {
                                                Loader.dismiss();
                                                var toast = _this.toastCtrl.create({
                                                    message: datarestgoogle.msg,
                                                    duration: 3000
                                                });
                                                toast.present();
                                                _this.googlePlus.logout()
                                                    .then(function (response) {
                                                    localStorage.clear();
                                                });
                                            }
                                        });
                                    });
                                }, function (error) {
                                    Loader.dismiss();
                                    //alert('error');
                                    // alert(JSON.stringify(error));
                                });
                            }
                        }
                    }));
                }).catch(function (error) {
                    console.log('Error getting location', error);
                    _this.showToast('There is an error for getting location');
                });
            }
            else {
                _this.showToast('Please turn on your location');
            }
        }).catch(function (e) {
            alert(JSON.stringify(e));
        });
    };
    SigninPage.prototype.signIn = function (signup2) {
        var _this = this;
        this.diagnostic.isLocationEnabled().then(function (isAvailable) {
            if (isAvailable === true) {
                _this.geolocation.getCurrentPosition().then(function (resp) {
                    console.log(resp);
                    console.log(resp.coords.latitude);
                    console.log(resp.coords.longitude);
                    _this.lat = resp.coords.latitude;
                    _this.long = resp.coords.longitude;
                    localStorage.setItem('lat', _this.lat);
                    localStorage.setItem('long', _this.long);
                    var latLong = new google.maps.LatLng(_this.lat, _this.long);
                    _this.geocoder.geocode({ 'latLng': latLong }, (function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                            if (results[1]) {
                                localStorage.setItem('location', results[1].formatted_address);
                                var token = localStorage.getItem('tokenId');
                                var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
                                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                                var options_1 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
                                var url = _this.dataprovider.base_url + 'users/login';
                                var postdata = {
                                    role: 'customer',
                                    status: 1,
                                    email: signup2.value.email,
                                    password: signup2.value.password,
                                    push_token: token
                                };
                                console.log(" postdata" + JSON.stringify(postdata));
                                var Loader = _this.loadingCtrl.create({
                                    content: ' ',
                                });
                                Loader.present().then(function () {
                                    var Serialized = _this.serializeObj(postdata);
                                    _this.http.post(url, Serialized, options_1).map(function (res) { return res.json(); })
                                        .subscribe(function (data) {
                                        Loader.dismiss();
                                        if (data.status === true) {
                                            localStorage.setItem("userData2", JSON.stringify(data.data));
                                            localStorage.setItem("userData", data.data.User.id);
                                            localStorage.setItem("userData1", data.data.User.email);
                                            console.log(data.data.User.email);
                                            _this.showToast(data.msg);
                                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                                        }
                                        else {
                                            _this.showToast(data.msg);
                                        }
                                    }, function (err) {
                                        console.log("Error");
                                        Loader.dismiss();
                                        console.log("Error!:", err);
                                    });
                                });
                            }
                        }
                    }));
                }).catch(function (error) {
                    console.log('Error getting location', error);
                    _this.showToast('There is an error for getting location');
                });
            }
            else {
                _this.showToast('Please turn on your location');
            }
        }).catch(function (e) {
            alert(JSON.stringify(e));
        });
        /*this.geolocation.getCurrentPosition().then((resp) => {
            alert('jj');
          console.log(resp);
         console.log(resp.coords.latitude);
         console.log(resp.coords.longitude);
         this.lat=resp.coords.latitude;
         this.long=resp.coords.longitude;
         localStorage.setItem('lat',this.lat);
         localStorage.setItem('long',this.long);
         
         var token = localStorage.getItem('tokenId');
                        let headers = new Headers();
                        headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
                        let options = new RequestOptions({ headers: headers });
                var url = this.dataprovider.base_url + 'users/login';
                        var postdata = {
                  role:'customer',
                  status:1,
                  email:signup2.value.email,
                  password:signup2.value.password,
                     push_token : token
                        };
                
                        console.log(" postdata" + JSON.stringify(postdata));
                        var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
                            content: ' ',
                        });
        
                            Loader.present().then(() => {
                            var Serialized = this.serializeObj(postdata);
                            this.http.post(url, Serialized, options).map(res => res.json())
                                .subscribe(data => {
                                    Loader.dismiss();
                                    if (data.status === true ) {
                           localStorage.setItem("userData2", JSON.stringify(data.data));
                           localStorage.setItem("userData", data.data.User.id);
                           localStorage.setItem("userData1",data.data.User.email);
                          console.log(data.data.User.email) ;
        
                                            this.showToast(data.msg);
                                            this.navCtrl.push(TabsPage);
                                            
                                    } else {
                                        this.showToast(data.msg);
                                    }
        
                                }, err => {
                                    console.log("Error");
                                    Loader.dismiss();
                                    console.log("Error!:", err);
                                });
                            })
        
        }).catch((error) => {
          console.log('Error getting location', error);
          this.showToast('There is an error for getting location');
        });
            
            */
    };
    SigninPage.prototype.forgotpassword = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__forgotpassword_forgotpassword__["a" /* ForgotpasswordPage */]);
    };
    SigninPage.prototype.gotandc = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__termscondition_termscondition__["a" /* TermsconditionPage */]);
    };
    return SigninPage;
}());
SigninPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signin',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\signin\signin.html"*/'<ion-content>\n	<ion-slides pager>\n		<ion-slide>\n			<img src="assets/imgs/slide-one.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-two.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-three.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-four.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n		<ion-slide>\n			<img src="assets/imgs/slide-five.jpg" alt="" >\n		</ion-slide><!-- First Slide End Here -->\n	</ion-slides><!-- Slide End Here -->\n	<div class="page-bottom" padding>\n		<div class="page-head">\n			<h2>Sign In</h2>\n		</div>\n		<div class="form-sec">\n			<form #heroForm="ngForm"novalidate class="signup_form">\n				<ion-list>\n					\n					<ion-item>\n						<ion-label floating>Your email or phone number</ion-label>\n						<ion-input  [(ngModel)]="data.email" name="email" type="email" id="email" required pattern=\'^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$\' #email="ngModel"></ion-input>\n    \n						<div *ngIf="email.errors && (email.dirty || email.touched)" class="alert alert-danger">\n						<div [hidden]="!email.errors.required" class="alert alert-danger">\n							Email is required\n							</div>\n							<div [hidden]="!email.errors.pattern" class="alert alert-danger">\n							In-valid email\n							</div>\n						</div>\n					</ion-item>\n\n					<ion-item>\n						<ion-label floating>Password</ion-label>\n						<ion-input  [(ngModel)]="data.password" name="password" type="password" id="password" required minlength="6" maxlength="50"  #password="ngModel"></ion-input>\n    \n						<div *ngIf="password.errors && (password.dirty || password.touched)" class="alert alert-danger">\n						<div [hidden]="!password.errors.required" class="alert alert-danger">\n							Password is required\n							</div>\n						</div>	\n					</ion-item>\n					\n					<ion-item>\n						<button ion-button (click)="to_signup()">Create an account</button>\n						<button ion-button class="fl" (click)="forgotpassword()">Forgot Password</button>\n					</ion-item>\n				</ion-list>\n				<button ion-button block type="submit" color="theme" [disabled]="!heroForm.form.valid" (click)="signIn(heroForm)">Sign In</button>\n			</form>\n			<p class="tnc">By signing into ya-kazi you agree to ya-kazi\'s <a (click)="gotandc()">terms & conditions</a></p>\n		</div>\n		<div class="bottom-sec"> \n			<h5><span class="sign">Or sign in with</span></h5>\n			<div class="button-sec">\n				<button ion-button (click)="facebookLogin()"><ion-icon name="logo-facebook"></ion-icon> Facebook</button>\n				<button ion-button (click)="gplus()"><ion-icon name="logo-googleplus"></ion-icon> Google</button>\n			</div>\n		</div>\n		\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\signin\signin.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_10__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_diagnostic__["a" /* Diagnostic */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */]
        //  private firebase1: Firebase,		// public afAuth: AngularFireAuth
    ])
], SigninPage);

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(5);
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
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatPage = (function () {
    function ChatPage(navCtrl, navParams, dataprovider, http, toastCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataprovider = dataprovider;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.udata = '';
        this.show_send_button = 0;
        this.data = '';
        this.fileSelected = 0;
        this.docUri = "";
        this.custoID = '';
        this.providID = '';
        //      this.param = navParams.get("customerId");
        //      this.id = localStorage.getItem('user_id');
        this.providID = navParams.get("prid");
        console.log(this.providID);
        this.custoID = JSON.parse(localStorage.getItem('userData'));
        console.log(this.custoID);
        this.All_message();
        this.getUser();
    }
    ChatPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChatPage');
        //    this.bottom=setInterval(()=>{
        //      this.content.scrollToBottom(300);
        //  },1000)
    };
    ChatPage.prototype.ionViewWillLeave = function () {
        //clearInterval(this.interval);
        clearInterval(this.bottom);
        console.log("Looks like I'm about to leave :(");
    };
    //  ionViewDidLoad() {
    //    console.log('ionViewDidLoad ChatPage');
    //  }
    //  back(){
    //    this.navCtrl.push(ContactusPage);
    //}
    ChatPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ChatPage.prototype.goBack = function (pID) {
        this.navCtrl.pop();
    };
    ChatPage.prototype.doRefresh = function (refresher) {
        console.log('Begin async operation', refresher);
        this.All_message();
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    ChatPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ChatPage.prototype.getUser = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var url = this.dataprovider.base_url + 'users/userinfo';
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var postdata = {
            //                     uid:this.param
            uid: this.providID
        };
        console.log("postdata   :  " + JSON.stringify(postdata));
        var serialize = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialize, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSucess == "true") {
                    _this.udata = data.data.User;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    ChatPage.prototype.All_message = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        var url = this.dataprovider.base_url + 'users/otochat';
        var postdata = {
            myid: this.custoID,
            otherid: this.providID
        };
        console.log("postdata : " + JSON.stringify(postdata));
        var serialized_data = this.serializeObj(postdata);
        console.log(serialized_data);
        Loading.present().then(function () {
            _this.http.post(url, serialized_data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                console.log(response);
                Loading.dismiss();
                if (response.status == true) {
                    _this.myChat = response.data;
                    // alert(this.myChat.length);
                    _this.converstaion = _this.myChat.length;
                    console.log(_this.converstaion);
                    console.log("bhumika");
                }
            });
        });
    };
    ChatPage.prototype.sendmessage = function (mess) {
        var _this = this;
        console.log(mess);
        this.myInput = mess;
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var url = this.dataprovider.base_url + 'users/insert_message';
        var options = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["d" /* RequestOptions */]({ headers: headers });
        //      var options = this.dataprovider.options;
        var postdata = {
            myid: this.custoID,
            otherid: this.providID,
            message: this.myInput,
            type: 0
        };
        var serialized_data = this.serializeObj(postdata);
        console.log(serialized_data);
        var Loading = this.loadingCtrl.create({
            spinner: 'bubbles',
            showBackdrop: false,
            cssClass: 'loader'
        });
        Loading.present().then(function () {
            _this.http.post(url, serialized_data, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (response) {
                //console.log(response)
                if (response.status == true) {
                    _this.myInput = '';
                    var upostdata = {
                        myid: _this.custoID,
                        otherid: _this.providID
                    };
                    var ourl = _this.dataprovider.base_url + 'users/otochat';
                    var serialized_data = _this.serializeObj(upostdata);
                    console.log(serialized_data);
                    _this.http.post(ourl, serialized_data, options)
                        .map(function (res) { return res.json(); })
                        .subscribe(function (responses) {
                        console.log(responses);
                        Loading.dismiss();
                        if (responses.status == true) {
                            _this.bottom = setInterval(function () {
                                _this.content.scrollToBottom(1000);
                            }, 1000);
                            _this.myChat = responses.data;
                            _this.converstaion = _this.myChat.length;
                            console.log(_this.other_user);
                            console.log("bhumika");
                        }
                    });
                }
                else {
                    alert("something going wrong");
                }
            });
        });
    };
    return ChatPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Content */])
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chat',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\chat\chat.html"*/'<ion-header>\n        \n  <ion-navbar>\n     <button (click)="goBack(providID)">\n        <ion-icon ios="ios-arrow-round-back" md="md-arrow-round-back"></ion-icon>\n    </button>\n     <ion-title class="header-title">chat</ion-title>\n  </ion-navbar>\n\n  <ion-toolbar style="margin-top: 1px;min-height: 40px;">\n    <ion-grid>\n      <ion-row class="user">\n        <ion-col col-4></ion-col>\n        <ion-col col-8 text-right>Conversation with <span style="color:#02a499;">{{udata.firstname}} {{udata.lastname}}</span></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n        \n</ion-header>\n        \n<ion-content class="has-footer">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content\n      pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing...">\n    </ion-refresher-content>\n  </ion-refresher>\n\n  <div *ngIf="converstaion!=0" class="chatouter">\n  <div class="pd" *ngFor="let Chat_list of myChat">\n\n    <div class="boxchat chat-bubble right" *ngIf="Chat_list.chats.MSGFROM != id">\n      <div class="chat-users"> \n        <p [innerHTML]="Chat_list.chats.message"></p>\n        <span class="time">{{Chat_list.chats.created | date:\'MMM d, y h:mm a\'}}</span>\n      </div>\n    </div>\n\n    <div class="boxchat chat-bubble left" *ngIf="Chat_list.chats.MSGFROM == id">\n      <div class="chat-users"> \n        <p [innerHTML]="Chat_list.chats.message"></p>\n        <span class="time">{{Chat_list.chats.created | date:\'MMM d, y h:mm a\'}}</span>\n       </div>\n    </div>\n  </div>\n      </div>\n</ion-content>\n        \n<ion-footer class="footer_bg footer footer-ios">\n  <div class="chat_footer"> \n    <div class="input_send">\n      <ion-textarea placeholder="Type a message" type="text" class="input inp_spc" [(ngModel)]="myInput" spellcheck="true" autocomplete="on"></ion-textarea>    \n      <!--<div class="fileUpload btn btn-primary">\n        <span><ion-icon name="attach"></ion-icon></span>\n        <input type="file" class="upload" />\n      </div>-->\n          \n      <div class="icon_send" (click)="sendmessage(myInput)"  *ngIf="myInput || fileSelected == 1">\n        <ion-icon name="send"></ion-icon>\n      </div>\n\n    </div>\n  </div>\n</ion-footer>\n        \n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\chat\chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], ChatPage);

//# sourceMappingURL=chat.js.map

/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(37);
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
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = (function () {
    // public img_url:string = 'http://trading-env.fhz5dvv2dd.us-east-2.elasticbeanstalk.com/admin/uploads/players/';
    function DataProvider(http) {
        this.http = http;
        this.base_url = 'https://rakhi.crystalbiltech.com/service/api/';
        console.log('Hello DataProvider Provider');
    }
    return DataProvider;
}());
DataProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DataProvider);

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ongoing_next_ongoing_next__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__detailprovider_detailprovider__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__congratulations_congratulations__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modals_modals__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_contact__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__chat_chat__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__privacypolicy_privacypolicy__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__serviceproviderlist_serviceproviderlist__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modalscancel_modalscancel__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__refund_refund__ = __webpack_require__(190);
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
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProjectsPage = (function () {
    function ProjectsPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app, iab, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.iab = iab;
        this.modalCtrl = modalCtrl;
        this.orderdata = '';
        this.data = '';
        this.id = localStorage.getItem('userData');
        this.param = navParams.get("active");
        this.param1 = localStorage.getItem("setActiveTabs");
        if (this.param != ' ') {
            this.activeTab = "all";
            this.list_requested();
        }
        else if (this.param1 != null) {
            this.activeTab = "all";
            this.list_requested();
        }
        else {
            this.activeTab = "active";
            this.list_active();
        }
        this.date = new Date();
        this.rate = '3.5';
        //this.getOrderList(); 
    }
    ProjectsPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ProjectsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectsPage');
    };
    ProjectsPage.prototype.payment = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__congratulations_congratulations__["a" /* CongratulationsPage */]);
    };
    ProjectsPage.prototype.abcd = function (providerid, orderId, serviceID, amount, name) {
        alert(orderId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__detailprovider_detailprovider__["a" /* DetailproviderPage */], { providerid: providerid, orderId: orderId, service: serviceID, amn: amount, nm: name });
    };
    ProjectsPage.prototype.policy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */]);
    };
    ProjectsPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProjectsPage.prototype.list_requested = function () {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/pendinguserrqsts';
        var data_form = {
            uid: this.id
        };
        console.log(data_form);
        var Serialized = this.serializeObj(data_form);
        console.log(Serialized);
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata.data);
                if (sdata.isSucess == 'true') {
                    _this.itemsr = sdata.data;
                }
                else {
                    _this.itemsr = sdata.data;
                }
            }, function (error) {
                // console.log(sdata.msg);
                Loader.dismiss();
            });
        });
    };
    ProjectsPage.prototype.list_active = function () {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/acceptedrqsts';
        var data_form = {
            uid: this.id
        };
        console.log(data_form);
        var Serialized = this.serializeObj(data_form);
        console.log(Serialized);
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                if (sdata.isSucess == 'true') {
                    _this.items = sdata.data;
                    console.log(_this.items);
                }
                else {
                    _this.items = sdata.data;
                }
            }, function (error) {
                Loader.dismiss();
            });
        });
    };
    ProjectsPage.prototype.list_completed = function () {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/completedrqsts';
        var data_form = {
            uid: this.id
        };
        console.log(data_form);
        // alert(JSON.stringify(data_form));
        var Serialized = this.serializeObj(data_form);
        console.log(Serialized);
        // alert(JSON.stringify(Serialized));
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                //        this.loader.onDidDismiss(() => {
                //                console.log('Dismissed loading');
                //                });
                console.log(sdata);
                if (sdata.isSucess == 'true') {
                    // alert('true')
                    _this.itemss = sdata.data;
                }
                else {
                    _this.itemss = sdata.data;
                }
            }, function (error) {
                // console.log(sdata.msg);
                Loader.dismiss();
            });
        });
    };
    ProjectsPage.prototype.list_cancelled = function () {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/cancelledrqsts';
        var data_form = {
            uid: this.id
        };
        console.log(data_form);
        // alert(JSON.stringify(data_form));
        var Serialized = this.serializeObj(data_form);
        console.log(Serialized);
        // alert(JSON.stringify(Serialized));
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata);
                if (sdata.status == true) {
                    // alert('true')
                    _this.itemsss = sdata.data;
                }
                else {
                    _this.itemsss = sdata.data;
                }
            }, function (error) {
                // console.log(sdata.msg);
                Loader.dismiss();
            });
        });
    };
    ProjectsPage.prototype.cancelByUser = function (sid) {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/rescheduleduserrqsts';
        var data_form = {
            sid: sid
        };
        var Serialized = this.serializeObj(data_form);
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata);
                if (sdata.status == true) {
                    _this.showToast(sdata.msg);
                    _this.list_active();
                }
            }, function (error) {
                Loader.dismiss();
            });
        });
    };
    ProjectsPage.prototype.rqstcompleted = function (sid, uid) {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/completeuserRqsts';
        var data_form = {
            sid: sid,
            uid: uid
        };
        var Serialized = this.serializeObj(data_form);
        console.log(data_form);
        Loader.present().then(function () {
            _this.http.post(url, Serialized, options)
                .map(function (res) { return res.json(); })
                .subscribe(function (sdata) {
                Loader.dismiss();
                console.log(sdata);
                if (sdata.status == true) {
                    _this.showToast(sdata.msg);
                    var i = document.getElementById('completed');
                    i.click();
                }
            }, function (error) {
                Loader.dismiss();
            });
        });
    };
    ProjectsPage.prototype.makePayment = function (rqid) {
        // this.navCtrl.push(PaymentPage,{rqstId:rqid});
        var _this = this;
        var userID = JSON.parse(localStorage.getItem('userData'));
        var target = "_blank";
        var options = "location=no,hidden=no";
        var browser = this.iab.create('http://rakhi.crystalbiltech.com/service/api/users/make_payment?user_id=' + userID + '&sessionid=' + rqid, target, options);
        browser.on('loadstart').subscribe(function (e) {
            //alert(JSON.stringify(e));
            if (e.url.match('pesapal_transaction_tracking_id')) {
                browser.close();
                var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
                headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
                var optionss_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
                var urls = _this.dataprovider.base_url + 'AvailableDates/make_payment';
                var postdata = {
                    sid: rqid
                };
                var Loader = _this.loadingCtrl.create({
                    content: ' ',
                });
                Loader.present().then(function () {
                    var serialized_all = _this.serializeObj(postdata);
                    _this.http.post(urls, serialized_all, optionss_1).map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        Loader.dismiss();
                        if (data.isSuccess === true) {
                            _this.showToast('Transaction has been made successfull');
                            _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__congratulations_congratulations__["a" /* CongratulationsPage */]);
                        }
                        else {
                            _this.showToast('There is an error');
                        }
                    }, function (err) {
                        //alert("Error");
                        Loader.dismiss();
                        console.log("Error!:", err);
                    });
                });
            }
            else {
            }
        }, function (err) {
        });
    };
    ProjectsPage.prototype.getOrderList = function () {
        var _this = this;
        console.log("1111");
        var user = JSON.parse(localStorage.getItem('userData2'));
        var userID = user.User.id;
        console.log(userID);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'Orders/orderlist';
        var postdata = {
            uid: userID
        };
        console.log(" postdata : " + JSON.stringify(postdata));
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            var serialized_all = _this.serializeObj(postdata);
            _this.http.post(url, serialized_all, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.isSuccess === true) {
                    _this.orderlist = data.data;
                    //                              this.orderdata= data.data.Order.amount;
                    //                              console.log(this.orderdata);
                    //                              this.orderdata= data.data.OrderItem.name;
                    //                              console.log(this.orderdata);
                    console.log(_this.orderlist);
                }
                else {
                    _this.orderlist = data.data;
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    ProjectsPage.prototype.gotopay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__congratulations_congratulations__["a" /* CongratulationsPage */]);
    };
    ProjectsPage.prototype.nxt_ogo = function (session, uid) {
        console.log('rakhi');
        console.log(uid);
        console.log('rakhi');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__ongoing_next_ongoing_next__["a" /* OngoingNextPage */], { session: session, userid: uid });
    };
    ProjectsPage.prototype.pop = function (id, jobid, price) {
        var _this = this;
        var notificationAlert = this.alertCtrl.create({
            title: '<h4 class="cancelTitle">Are you sure you want to decline this job?</h4>',
            message: '<p class="cancelMsg">You will not be charged any administration fee if you decline this job.</p>',
            buttons: [{
                    text: 'No',
                    role: 'cancel'
                }, {
                    text: 'Yes',
                    handler: function () {
                        var cmodal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__modalscancel_modalscancel__["a" /* ModalscancelPage */]);
                        localStorage.setItem('providermodalid', id);
                        localStorage.setItem('jobid', jobid);
                        localStorage.setItem('canceled_price', price);
                        cmodal.present();
                        cmodal.onDidDismiss(function (data) {
                            //this.notificationss();
                        });
                    }
                }]
        });
        notificationAlert.present();
    };
    ProjectsPage.prototype.pops = function (id, jobid, price, percentage) {
        var _this = this;
        var notificationAlert = this.alertCtrl.create({
            title: '<h4 class="cancelTitle">Are you sure you want to decline this job?</h4>',
            message: '<p class="cancelMsg">You will incur an administration fee of ' + percentage + '% of your deposit fees.</p>',
            buttons: [{
                    text: 'No',
                    role: 'cancel'
                }, {
                    text: 'Yes',
                    handler: function () {
                        var cmodal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_14__modalscancel_modalscancel__["a" /* ModalscancelPage */]);
                        localStorage.setItem('providermodalid', id);
                        localStorage.setItem('jobid', jobid);
                        localStorage.setItem('canceled_price', price);
                        cmodal.present();
                        cmodal.onDidDismiss(function (data) {
                            //this.notificationss();
                        });
                    }
                }]
        });
        notificationAlert.present();
    };
    ProjectsPage.prototype.presentModal = function (id, jobid) {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__modals_modals__["a" /* ModalsPage */]);
        localStorage.setItem('providermodalid', id);
        localStorage.setItem('jobid', jobid);
        modal.present();
        modal.onDidDismiss(function (data) {
            //this.notificationss();
        });
    };
    ProjectsPage.prototype.goToContact = function (id, jobid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__contact_contact__["a" /* ContactPage */], { providerId: id, jobid: jobid });
    };
    ProjectsPage.prototype.chat = function (pid) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__chat_chat__["a" /* ChatPage */], { prid: pid });
    };
    ProjectsPage.prototype.gotohome = function () {
        this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    ProjectsPage.prototype.gotocnr = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_15__refund_refund__["a" /* RefundPage */]);
    };
    ProjectsPage.prototype.gotoproviderlist = function (sids, type, sdate, stime) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__serviceproviderlist_serviceproviderlist__["a" /* ServiceproviderlistPage */], { serviceTime: stime, serviceDate: sdate, type: type, sids: sids });
        /* console.log(sids);
         console.log(type);
         console.log(sdate);
         console.log(stime);
                  let headers = new Headers();
                  headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
                  let options = new RequestOptions({ headers: headers });
          var url = this.dataprovider.base_url + 'availableDates/availabledays_search';
                  var postdata = {
                      uid: this.id,
                      sdate:sdate,
                      stime:stime,
                      title:sids,
                      stype:type
                  };
          var ser = this.serializeObj(postdata);
          console.log(" postdata" + JSON.stringify(postdata));
                  var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
                      content: ' ',
                  });
  
                      Loader.present().then(() => {
                      this.http.post(url, ser, options).map(res => res.json())
                          .subscribe(data => {
                              Loader.dismiss();
                              console.log(data);
                              if (data.isSuccess === true ) {
                                       //localStorage.setItem("userData", data.data);
                                      this.showToast(data.msg);
                                      this.providers = data.data;
                                                                       
                              } else {
                                  
                                  this.showToast(data.msg);
                                  this.providers = data.data;
                              }
  
                          }, err => {
                              console.log("Error");
                              Loader.dismiss();
                              console.log("Error!:", err);
                          });
                      })	*/
    };
    return ProjectsPage;
}());
ProjectsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-projects',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\projects\projects.html"*/'<!--\n  Generated template for the ProjectsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>MY JOBS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<!--<ion-content padding>\n\n<div class="projects">\n<h1>History</h1>\n<div class="nodata" *ngIf="!orderlist?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n<div class="box" *ngFor="let list of orderlist">\n<ion-list> \n  \n    <ion-item item-start (click)="abcd(list.Order.providerid,list.Order.id,itemlist.id,list.Order.amount,itemlist.name)" *ngFor="let itemlist of list.OrderItem" >\n     <ion-grid>\n        <ion-row>  <ion-col col-3><ion-avatar >\n        <img src={{itemlist.image}}>\n    </ion-avatar></ion-col>\n                      <ion-col col-9>\n                         <h2 >{{itemlist.name}}</h2>\n    <h3 >{{list.Give_Review}}</h3>\n    <h3>{{list.Order.schedule_date}} {{list.Order.schedule_time}}<span>${{list.Order.amount}}</span></h3>    \n                </ion-col>\n        </ion-row>\n    </ion-grid>\n\n  </ion-item>\n</ion-list>\n</div>\n\n\n\n</div>\n\n</ion-content>-->\n\n<ion-content >\n\n	<div class="segmentheader">\n  <ion-segment [(ngModel)]="activeTab">\n      <ion-segment-button value="all" (click)="list_requested()">\n      Pending\n    </ion-segment-button>\n    <ion-segment-button value="active" id="active" (click)="list_active()">\n      Active\n    </ion-segment-button>\n\n\n    <ion-segment-button value="completed" id="completed" (click)="list_completed()">\n     Completed\n    </ion-segment-button>\n     <ion-segment-button id="cancelled" value="cancelled" (click)="list_cancelled()">\n     Cancelled\n    </ion-segment-button>\n     <!--<ion-segment-button value="rescheduled" (click)="list_rescheduled()">\n     Rescheduled\n    </ion-segment-button>-->\n  </ion-segment>\n</div>\n\n<div [ngSwitch]="activeTab" class="tabbing" padding>\n\n\n\n  <ion-list *ngSwitchCase="\'all\'" class="list1">\n    <div class="nodata" *ngIf="!itemsr?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n     <div class="box" *ngFor="let item of itemsr">\n    <div class="main_box" *ngFor="let ite of item">\n      <ion-list class="nne_slde">\n        <ion-item *ngFor="let serviceitem of ite.Services" class="brdr_nne">\n          <h5 class="getservice">{{serviceitem.Service.name}} </h5>\n        </ion-item>\n      </ion-list>\n    </div>\n     <h6>Schedule Date - {{item[0].scheduledate}} ({{item[0].scheduletime}})</h6>\n    \n	<ion-grid class="elctricdata" no-padding>\n	<ion-row>\n	<ion-col col-6>\n	<label>Distance:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.distance}} kilometers away</h3> \n	</ion-col>        \n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Provider type:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.provider_type}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Profession:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.profession}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Course:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.course}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Year of graduation:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.c_year}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Year of experience:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.work_exp}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Charge rate{{item[0].User.User.pertype}}:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.rate}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Average work rating:</label>\n	</ion-col>\n	<ion-col col-6>\n	<rating [(ngModel)]="item[0].User.User.avg_rating" readOnly="true" max="5"></rating>\n	</ion-col>\n	</ion-row>\n	</ion-grid>\n	\n	<div class="after_active" *ngIf="item[0].paid == 0 && item[0].status == 1">\n	<p class ="staticnote">The Service Provider is ready to discuss your job. Please make your service fee payment in order to:</p>\n	<p>1. View the Service Provider\'s identity, location and other professional data.</p>\n	<p>2. Chat directly with Service Provider.</p>\n   <p> 3. Share with the Service Provider the location of the work you want done.</p>\n	<p>Our service fee is KES {{item[0].Services[0].Service.price}}</p>\n	</div>\n	<div class="before_active" *ngIf="item[0].paid == 0 && item[0].status == 0">\n	Note: Give the Service Provider time to respond. If Service Provider is taking longer then you can wait to respond, you may select another Service Provider.\n	</div>\n		<div class="pndng_btn">\n			<button ion-button block round color="theme" [ngClass]="item[0].paid == 0 ? \'largebtn\' : \'current btns\'" *ngIf="item[0].paid == 0 && item[0].status == 0" (click)="gotoproviderlist(item[0].requested_serviceids,item[0].provider_type,item[0].scheduledate,item[0].scheduletime)">REQUEST ANOTHER SERVICE PROVIDER</button>\n				<button ion-button block round color="theme" [ngClass]="item[0].paid == 0 ? \'largebtn\' : \'current btns\'" *ngIf="item[0].paid == 0 && item[0].status == 0" (click)="gotohome()">CHANGE SEARCH CRITERIA</button>\n	<button ion-button block round color="theme" [ngClass]="item[0].paid == 0 ? \'largebtn\' : \'current btns\'" *ngIf="item[0].paid == 0 && item[0].status == 1" (click)="makePayment(item[0].session_id)">PROCEED</button>\n</div>\n	</div>\n  </ion-list>\n\n\n\n  <ion-list *ngSwitchCase="\'active\'" class="list1">\n    <div class="nodata" *ngIf="!items?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n     <div class="box" *ngFor="let item of items">\n	 <div class="clickable" (click)="item[0].paid == 1 ? nxt_ogo(item[0].session_id,item[0].provider_id) : null">\n    <div class="main_box" *ngFor="let ite of item">\n      <ion-list class="nne_slde">\n        <ion-item *ngFor="let serviceitem of ite.Services" class="brdr_nne">\n          <h5>{{serviceitem.Service.name}} </h5>\n        </ion-item>\n      </ion-list>\n    </div>\n	<!--h4 class="ttl_sb">Service Fee - KES {{item[0].Services[0].Service.provider_price}}</h4>\n	<h4 class="ttl_sb">Work deposit - KES {{item[0].Services[0].Service.deposite}}</h4>\n    <h4 class="ttl_sb">Total - KES {{item[0].Services[0].Service.price}}</h4>\n     <h6>Schedule Date - {{item[0].scheduledate}} ({{item[0].scheduletime}})</h6-->\n	 \n	<h4 class="ttl_sb">Service Provider name</h4>\n	<h6>{{item[0].User.User.firstname}} {{item[0].User.User.lastname}}</h6>\n	\n	<h4 class="ttl_sb">Job location</h4>\n	<h6>{{item[0].location}}</h6>\n	\n	 <h4 class="ttl_sb">Deposit paid</h4>\n	<h6>{{item[0].Services[0].Service.price}}</h6>\n	\n	\n	 <h4 class="ttl_sb">Date of first meeting/discussion</h4>\n	<h6>{{item[0].scheduledate}} (between {{item[0].scheduletime}})</h6>\n	 \n	 \n	 </div>\n	<div class="pndng_btn">\n	<button ion-button block round color="theme" class="current btns" *ngIf="item[0].paid == 1" (click)="nxt_ogo(item[0].session_id,item[0].provider_id)">VIEW JOB<br>DETAILS</button>\n	<button ion-button block round color="theme" class="current btns" *ngIf="item[0].paid == 1" (click)="rqstcompleted(item[0].session_id,item[0].user_id)">MOVE JOB TO<br>COMPLETED</button>\n    <button ion-button block round color="theme" class="current btns" *ngIf="item[0].paid == 1" (click)="chat(item[0].provider_id)">CHAT WITH<br>PROVIDER</button>	\n    <button ion-button block round color="theme" class="btm_lrg" (click)="pop(item[0].provider_id,item[0].session_id,item[0].Services[0].Service.deposite)" *ngIf="item[0].paid == 1 && item[0].out_cancel == 0 && item[0].within_24_hours == 1">CANCEL THIS JOB</button>\n    <button ion-button block round color="theme" class="btm_lrg" (click)="pops(item[0].provider_id,item[0].session_id,item[0].Services[0].Service.deposite,item[0].percentage)" *ngIf="item[0].paid == 1 && item[0].out_cancel == 0 && item[0].within_24_hours == 0">CANCEL THIS JOB</button>\n    \n	</div>\n    </div>\n	<span *ngIf="items?.length && items[0][0].paid == 1 && items[0][0].out_cancel == 0" class="cancel_note"><p class="notep"><span class="before">Before</span> you cancel! <span class="before">first</span> read our <a class="cnr" (click)="gotocnr()">Cancellation and Refunds Policy.</a></p></span>\n  </ion-list>\n\n  <ion-list *ngSwitchCase="\'completed\'">\n    <div class="nodata" *ngIf="!itemss?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n\n     <div class="box" *ngFor="let item of itemss">\n	 <div class="clickable" (click)="item[0].paid == 1 ? nxt_ogo(item[0].session_id,item[0].provider_id) : null">\n    <div class="main_box" *ngFor="let ite of item">\n      <ion-list class="nne_slde">\n        <ion-item *ngFor="let serviceitem of ite.Services" class="brdr_nne">\n          <h5 [ngClass]="item[0].paid == 1 ? \'underline\' : \'\'">{{serviceitem.Service.name}} </h5>  \n        </ion-item>\n      </ion-list>\n    </div>\n    <!--h4 class="ttl_sb">Total - KES {{item[0].Services[0].Service.price}}</h4>\n     <h6>Schedule Date - {{item[0].scheduledate}} ({{item[0].scheduletime}})</h6-->\n	<h4 class="ttl_sb">Provider name</h4>\n	<h6>{{item[0].User.User.firstname}} {{item[0].User.User.lastname}}</h6>\n	\n	<h4 class="ttl_sb">Provider type</h4>\n	<h6>{{item[0].User.User.provider_type}}</h6>\n	\n	\n	 <h4 class="ttl_sb">Job location</h4>\n	<h6>{{item[0].location}}</h6>  \n	\n	 <h4 class="ttl_sb">Deposit paid</h4>\n	<h6>KES {{item[0].service_price}}</h6>\n	\n	 <h4 class="ttl_sb">Date of first meeting/discussion</h4>\n	<h6>{{item[0].scheduledate}} (between {{item[0].scheduletime}})</h6>\n	 </div>\n	<div class="pndng_btn">\n	<ion-grid no-padding>\n	<ion-row>\n	<ion-col col-4>\n    <button ion-button block round color="theme" class="btm_lrg" (click)="presentModal(item[0].provider_id,item[0].session_id)">RATE<br>THIS JOB</button></ion-col>\n	<ion-col col-4>\n	<button ion-button block round color="theme" class="btm_lrg" (click)="goToContact(item[0].provider_id,item[0].session_id)">REPORT<br>THIS JOB</button></ion-col>\n	<ion-col col-4>\n	 <button ion-button block round color="theme" class="btm_lrg" *ngIf="item[0].paid == 1" (click)="chat(item[0].provider_id)">CHAT WITH <br>PROVIDER</button>\n	 </ion-col>\n    </ion-row>\n	</ion-grid>\n	</div>\n	 \n    </div>\n\n\n  </ion-list>\n\n<ion-list *ngSwitchCase="\'cancelled\'">\n    <div class="nodata" *ngIf="!itemsss?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n     <div class="box" *ngFor="let item of itemsss">\n	  <div class="clickable" (click)="item[0].paid == 1 ? nxt_ogo(item[0].session_id,item[0].provider_id) : null">\n    <div class="main_box" *ngFor="let ite of item">\n      <ion-list class="nne_slde">\n        <ion-item *ngFor="let serviceitem of ite.Services" class="brdr_nne">\n          <h5>{{serviceitem.Service.name}} </h5>\n        </ion-item>\n      </ion-list>\n    </div>\n    <!--h4 class="ttl_sb">Total - KES {{item[0].Services[0].Service.price}}</h4-->\n     <h6>Schedule Date - {{item[0].scheduledate}} ({{item[0].scheduletime}})</h6>\n	 \n	 	<ion-grid class="elctricdata" no-padding>\n		\n	<ion-row>\n	<ion-col col-6>\n	<label>Provider name:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.firstname}} {{item[0].User.User.lastname}}</h3> \n	</ion-col>        \n	</ion-row>\n		\n	<ion-row>\n	<ion-col col-6>\n	<label>Distance:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.distance}} kilometers away</h3> \n	</ion-col>        \n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Provider type:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.provider_type}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Profession:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.profession}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Course:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.course}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Year of graduation:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.c_year}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Year of experience:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.work_exp}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Charge rate{{item[0].User.User.pertype}}:</label>\n	</ion-col>\n	<ion-col col-6>\n	<h3>{{item[0].User.User.rate}}</h3>\n	</ion-col>\n	</ion-row>\n	\n	<ion-row>\n	<ion-col col-6>\n	<label>Average work rating:</label>\n	</ion-col>\n	<ion-col col-6>\n	<rating [(ngModel)]="item[0].User.User.avg_rating" readOnly="true" max="5"></rating>\n	</ion-col>\n	</ion-row>\n	</ion-grid>\n	 \n	 \n	 \n	 <h6><span class="reasn">Reason for declining:</span> {{item[0].cancel_reason}} </h6>\n    </div>\n    </div>\n  </ion-list>\n  <!--<ion-list *ngSwitchCase="\'rescheduled\'">\n    <div class="nodata" *ngIf="!itemssss?.length"><img src="assets/imgs/NoDataAvailable.png"></div>\n     <div class="box" *ngFor="let item of itemssss">\n    <div class="main_box" *ngFor="let ite of item">\n      <ion-list class="nne_slde">\n        <ion-item *ngFor="let serviceitem of ite.Services" class="brdr_nne">\n          <h5>{{serviceitem.Service.name}} </h5>\n        </ion-item>\n      </ion-list>\n    </div>\n    <h4 class="ttl_sb">Total - $ {{item[0].Services[0].Service.price}}</h4>\n     <h6>Schedule Date - {{item[0].scheduledate}} ({{item[0].scheduletime}})</h6>\n    </div>\n\n  </ion-list>-->\n</div>\n\n\n</ion-content>'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\projects\projects.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_browser__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
], ProjectsPage);

//# sourceMappingURL=projects.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__about_about__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signin_signin__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_data_data__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__changepassword_changepassword__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__help_help__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__privacypolicy_privacypolicy__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__termscondition_termscondition__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__ = __webpack_require__(70);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app, fb, googlePlus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.img = '';
        this.name = '';
        this.contact = '';
        this.fbdata = localStorage.getItem('fbData');
        this.googledata = localStorage.getItem('googleData');
        this.simpledata = localStorage.getItem('userData2');
        this.getprofile();
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    ProfilePage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    ProfilePage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    ProfilePage.prototype.getprofile = function () {
        var _this = this;
        var userInfo = localStorage.getItem('userData');
        //alert(userInfo);
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/userinfo';
        var postdata = {
            uid: userInfo
        };
        // alert('profile'+JSON.stringify(postdata));
        var serialized_all = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, serialized_all, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                // alert(JSON.stringify(data));
                if (data.isSucess == "true") {
                    _this.img = data.data.User.image;
                    _this.name = data.data.User.firstname + ' ' + data.data.User.lastname;
                    _this.contact = data.data.User.phonenumber;
                    _this.rate = data.data.User.avg_rating;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                Loader.dismiss();
                alert(JSON.stringify(err));
            });
        });
    };
    ProfilePage.prototype.aboutus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__about_about__["a" /* AboutPage */]);
    };
    ProfilePage.prototype.policy = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__privacypolicy_privacypolicy__["a" /* PrivacypolicyPage */]);
    };
    ProfilePage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__help_help__["a" /* HelpPage */]);
    };
    ProfilePage.prototype.terms = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__termscondition_termscondition__["a" /* TermsconditionPage */]);
    };
    ProfilePage.prototype.editprofile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editprofile_editprofile__["a" /* EditprofilePage */]);
    };
    ProfilePage.prototype.changepwd = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__changepassword_changepassword__["a" /* ChangepasswordPage */]);
    };
    ProfilePage.prototype.logouted = function () {
        //alert('1');
        var _this = this;
        if (this.fbdata != undefined) {
            this.fb.logout().then(function (sucess) {
                //alert('3');
                localStorage.removeItem('userData2');
                localStorage.removeItem('userData');
                localStorage.removeItem('provider_already_selected');
                localStorage.removeItem('providerType');
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
                _this.showToast("You have been Logged Out");
            }).catch(function (error) {
                // alert(JSON.stringify(error));
                console.log(error);
            });
        }
        else if (this.googledata != undefined) {
            this.googlePlus.logout().then(function (success) {
                //alert('4');
                console.log('GOOGLE+: logout DONE', success);
                localStorage.removeItem('userData2');
                localStorage.removeItem('userData');
                localStorage.removeItem('provider_already_selected');
                localStorage.removeItem('providerType');
                _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
                _this.showToast("You have been Logged Out");
            }, function (failure) {
                //alert(JSON.stringify(failure));
                console.log('GOOGLE+: logout FAILED', failure);
            });
        }
        else {
            //alert('2');
            localStorage.removeItem('userData2');
            localStorage.removeItem('userData');
            localStorage.removeItem('provider_already_selected');
            localStorage.removeItem('providerType');
            this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_3__signin_signin__["a" /* SigninPage */]);
            this.showToast("You have been Logged Out");
        }
    };
    return ProfilePage;
}());
ProfilePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-profile',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header color="theme">\n \n <ion-navbar>\n\n    <ion-title text-center >PROFILE </ion-title>\n\n   <ion-buttons end>\n      <button ion-button icon-only (click)="editprofile()">\n       <label>EDIT</label>\n      </button>\n      </ion-buttons>\n        \n      \n    \n    \n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<div class="profilebx">\n 	<div class="profilepic">\n       <img src="{{img}}"/>\n     </div>\n      <h1>{{name}}</h1>\n      <p>{{contact}}</p>\n	  <p><rating [(ngModel)]="rate" readOnly="true" max="5"></rating></p>\n</div>\n\n<ion-list class="prfllist">\n  <ion-item (click) = "aboutus()"> \n      ABOUT ya-kazi \n  </ion-item>\n   <ion-item (click)="terms()"> \n      TERMS OF USE\n  </ion-item>\n  <ion-item (click)="policy()"> \n      PRIVACY POLICY\n  </ion-item>\n  <ion-item (click)="help()"> \n      HELP\n  </ion-item>  \n  <div class="upload_img" *ngIf="this.fbdata == null">\n        <ion-item *ngIf="this.googledata == null"> \n            <div (click) = "changepwd()"  >  CHANGE PASSWORD </div>\n        </ion-item>\n  </div>\n  <ion-item (click) = "logouted()"> \n      LOGOUT\n  </ion-item>\n</ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\profile\profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_facebook__["a" /* Facebook */],
        __WEBPACK_IMPORTED_MODULE_12__ionic_native_google_plus__["a" /* GooglePlus */]])
], ProfilePage);

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsconditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_data__ = __webpack_require__(6);
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
 * Generated class for the TermsconditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsconditionPage = (function () {
    function TermsconditionPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.app = app;
        this.data = {};
        this.terms();
    }
    TermsconditionPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    TermsconditionPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    TermsconditionPage.prototype.terms = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'staticpages/view';
        var postdata = {
            page: 'terms'
        };
        var ser = this.serializeObj(postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                console.log(data);
                if (data.status === true) {
                    _this.data = data;
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    TermsconditionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsconditionPage');
    };
    TermsconditionPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    return TermsconditionPage;
}());
TermsconditionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-termscondition',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\termscondition\termscondition.html"*/'<!--\n  Generated template for the TermsconditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <!--<button  class="backbtn" (click)="back()" float-left>\n          <ion-icon class="customIcon" name="arrow-back"></ion-icon>\n      </button>-->\n    <ion-title>TERMS & CONDTIONS</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n<div class="terms">\n<h1>TERMS & CONDTIONS</h1>\n	<p>{{data.desc}}</p>\n</div>\n\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\termscondition\termscondition.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], TermsconditionPage);

//# sourceMappingURL=termscondition.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddressPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schedule_schedule__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddressPage = (function () {
    function AddressPage(navCtrl, navParams, http, toastCtrl, dataprovider, loadingCtrl, platform, alertCtrl, geolocation, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.dataprovider = dataprovider;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.geolocation = geolocation;
        this.app = app;
        this.data = '';
        this.location = localStorage.getItem('location');
    }
    AddressPage.prototype.ngOnInit = function () {
        this.acService = new google.maps.places.AutocompleteService();
        this.autocompleteItems = [];
        this.data = {
            landmark: ''
        };
    };
    AddressPage.prototype.updateSearch = function () {
        console.log('modal > updateSearch');
        if (this.data.landmark == '') {
            this.autocompleteItems = [];
            return;
        }
        var self = this;
        var config = {
            //types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
            input: this.data.landmark,
            componentRestrictions: {}
        };
        this.acService.getPlacePredictions(config, function (predictions, status) {
            console.log('modal > getPlacePredictions > status > ', status);
            self.autocompleteItems = [];
            console.log(status);
            if (status == google.maps.places.PlacesServiceStatus.OK && predictions) {
                predictions.forEach(function (prediction) {
                    self.autocompleteItems.push(prediction);
                    console.log(self.autocompleteItems);
                });
            }
        });
    };
    AddressPage.prototype.chooseItem = function (item) {
        var _this = this;
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        this.autocompleteItems = [];
        this.data.landmark = item.description;
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + this.data.landmark + '&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
        Loader.present().then(function () {
            _this.http.get(url)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data.results[0].geometry.location);
                _this.lat = data.results[0].geometry.location.lat;
                _this.long = data.results[0].geometry.location.lng;
                _this.data.location = data.results[0].geometry.location;
                Loader.dismiss();
            });
        });
    };
    AddressPage.prototype.showToast = function (text) {
        var toast = this.toastCtrl.create({
            message: text,
            duration: 5000,
            position: 'middle'
        });
        toast.present();
    };
    AddressPage.prototype.serializeObj = function (obj) {
        var result = [];
        for (var property in obj)
            result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
        return result.join("&");
    };
    AddressPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddressPage');
    };
    AddressPage.prototype.useraddress = function (addressData) {
        var _this = this;
        this.lat = localStorage.getItem('lat');
        this.long = localStorage.getItem('long');
        var userID = JSON.parse(localStorage.getItem('userData'));
        console.log(userID);
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.dataprovider.base_url + 'users/saveaddress';
        var postdata = {
            uid: userID,
            landmark: addressData.value.landmark,
            optionalname: addressData.value.optionalname,
            area: addressData.value.area,
            house: addressData.value.house,
            job_description: addressData.value.job_description,
            lat: this.lat,
            long: this.long
        };
        var ser = this.serializeObj(postdata);
        console.log(" postdata" + postdata);
        var Loader = this.loadingCtrl.create({
            content: ' ',
        });
        Loader.present().then(function () {
            _this.http.post(url, ser, options).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                Loader.dismiss();
                if (data.status === true) {
                    localStorage.setItem("userData2", JSON.stringify(data.data));
                    _this.showToast(data.msg);
                    _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */]);
                }
                else {
                    _this.showToast(data.msg);
                }
            }, function (err) {
                console.log("Error");
                Loader.dismiss();
                console.log("Error!:", err);
            });
        });
    };
    AddressPage.prototype.schedule = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__schedule_schedule__["a" /* SchedulePage */]);
    };
    return AddressPage;
}());
AddressPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-address',template:/*ion-inline-start:"D:\New folder\HomeNaveen\home final\home final\src\pages\address\address.html"*/'<!--\n  Generated template for the AddressPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title >MORE LOCATION DETAILS</ion-title>\n  </ion-navbar>\n <ion-toolbar>\n    <ion-title>Give more specific work location details <br>to guide service providers</ion-title>\n  </ion-toolbar>\n</ion-header> \n\n\n<ion-content padding>\n\n	<div class="textbx">\n		<h1>Location of work</h1>\n		<p>{{location}}</p>\n</div>\n\n\n<form #heroForm="ngForm"novalidate class="inputbox">\n<ion-list>\n\n <ion-item>\n    <ion-label floating>Describe the work you want done</ion-label>\n    <ion-textarea  [(ngModel)]="data.job_description" name="job_description" type="text" id="job_description"  #job_description="ngModel" required></ion-textarea>\n	<div *ngIf="job_description.errors && (job_description.dirty || job_description.touched)" class="alert alert-danger">\n    <div [hidden]="!job_description.errors.required" class="alert alert-danger">\n      Job description is required\n    </div>\n    </div>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Type of site (office, house, etc)</ion-label>\n    <ion-input  [(ngModel)]="data.optionalname" name="optionalname" type="text" id="optionalname" required #optionalname="ngModel"></ion-input>\n\n    <div *ngIf="optionalname.errors && (optionalname.dirty || optionalname.touched)" class="alert alert-danger">\n    <div [hidden]="!optionalname.errors.required" class="alert alert-danger">\n      Type of site is required\n    </div>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Describe the area, e.g. name of estate</ion-label>\n    <ion-input  [(ngModel)]="data.area" name="area" type="text" id="area" required #area="ngModel"></ion-input>\n\n    <div *ngIf="area.errors && (area.dirty || area.touched)" class="alert alert-danger">\n    <div [hidden]="!area.errors.required" class="alert alert-danger">\n      Physical location is required\n    </div>\n    </div>\n  </ion-item>\n  <ion-item>\n    <ion-label floating>Describe the site, e.g. house no.</ion-label>\n    <ion-input  type="text" name="house" id="house" [(ngModel)]="data.house" #house="ngModel" required></ion-input>\n</ion-item>\n<ion-label>\n    <div *ngIf="house.errors && (house.dirty || house.touched)" class="alert alert-danger">\n    <div [hidden]="!house.errors.required" class="alert alert-danger">\n      Describe the site is required\n    </div>\n    </div>\n	</ion-label>\n  \n  <!--<ion-item>\n    <ion-label floating>Nearest landmark</ion-label>\n    <ion-input  [(ngModel)]="data.landmark" name="landmark" type="text" id="landmark" (input)="updateSearch()" #landmark="ngModel" required></ion-input>\n	<div *ngIf="landmark.errors && (landmark.dirty || landmark.touched)" class="alert alert-danger">\n    <div [hidden]="!landmark.errors.required" class="alert alert-danger">\n      Landmark is required\n    </div>\n    </div>\n  </ion-item>\n  <ion-item *ngFor="let item of autocompleteItems" (click)="chooseItem(item)">{{ item.description }} </ion-item>-->\n <ion-item>\n    <ion-label floating>Nearest landmark, e.g. well known building</ion-label>\n    <ion-input  [(ngModel)]="data.landmark" name="landmark" type="text" id="landmark"  #landmark="ngModel" required></ion-input>\n	<div *ngIf="landmark.errors && (landmark.dirty || landmark.touched)" class="alert alert-danger">\n    <div [hidden]="!landmark.errors.required" class="alert alert-danger">\n      Landmark is required\n    </div>\n    </div>\n  </ion-item>\n\n\n  \n</ion-list>\n<button ion-button block round type="submit" color="theme" [disabled]="!heroForm.form.valid" (click)="useraddress(heroForm)">NEXT</button>\n</form>\n</ion-content>\n'/*ion-inline-end:"D:\New folder\HomeNaveen\home final\home final\src\pages\address\address.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */]])
], AddressPage);

//# sourceMappingURL=address.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map