import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { SignupPage } from '../signup/signup';


@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html'
})
export class SplashPage {
	
  constructor(public navCtrl: NavController,
                public http: Http,
		public toastCtrl: ToastController,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public app: App,
    ) {
   
  }
 sign_acc(){
     this.navCtrl.push(SignupPage);
 }
 sign_inc(){
     this.navCtrl.push(SigninPage);
 }



 

}
