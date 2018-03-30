import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { TabsPage } from '../tabs/tabs';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
public data = {};
  constructor(public navCtrl: NavController,
    public http: Http,
		public toastCtrl: ToastController,
    public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App
  ) {
     this.aboutPage();
  }
showToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 5000,
			position: 'middle'
		});
		toast.present();
	}
  	serializeObj(obj) {

		var result = [];
		for (var property in obj)
			result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
		return result.join("&");
	}
aboutPage(){

				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'staticpages/view';

        var postdata = {
          page:'about'
				};
				var ser = this.serializeObj(postdata);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, ser, options).map(res => res.json())
						.subscribe(data => {
              
							Loader.dismiss();
               console.log(data);
							if (data.status === true ) {
               
									this.data = data;

							} else {
								this.showToast(data.msg);
							}

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
			
}
back(){
	this.navCtrl.pop();
}
}
