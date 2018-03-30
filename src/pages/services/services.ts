import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServicerepairPage } from '../servicerepair/servicerepair';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { TabsPage } from '../tabs/tabs';
import { CategoryPage } from '../category/category';
/**
 * Generated class for the ServicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {
  public lat;
  public long;
  public cats;
  constructor(public navCtrl: NavController, public navParams: NavParams,
			  public http: Http,
			  public toastCtrl: ToastController,
		      public dataprovider: DataProvider,
			  public loadingCtrl: LoadingController,
			  public platform: Platform,
			  public alertCtrl: AlertController,
			  public app: App) {
     this.lat = navParams.get("lat");
     this.long = navParams.get("long");
     this.services();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
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
  servicerepair(catId)
  {
  	this.navCtrl.push(CategoryPage,{catId:catId});
  }
  services()
  {
  	//this.navCtrl.push(ServicesPage);
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'services/searchservice';

        var postdata = {
          lat:this.lat,
          long:this.long
				};
				
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
                    var Serialized = this.serializeObj(postdata);
					this.http.post(url, Serialized, options).map(res => res.json())
					.subscribe(data => {
              
					Loader.dismiss();
					console.log(data);
					if (data.isSuccess == 'true' ) {
                    this.cats = data.data;
							} 
					else {
					this.showToast(data.msg);
						 }

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
  }
}
