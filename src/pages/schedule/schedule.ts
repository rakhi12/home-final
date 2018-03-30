import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { ServiceproviderlistPage } from '../serviceproviderlist/serviceproviderlist';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { AddressPage } from '../address/address';
import { TabsPage } from '../tabs/tabs';
/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html',
})
export class SchedulePage {
public data = '';
public useradd = '';
public useraddress = {};
//public d='';
public min: any;
public location: any;
//public maxyear = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,
               public http: Http,
		public toastCtrl: ToastController,
                public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,  
		public alertCtrl: AlertController,
		public app: App
  ) {
    this.getUserAddress();
    var d = new Date(); 
    console.log(d);
      var mm = ("0" + (d.getMonth() + 1)).slice(-2);
      var day = ("0" + (d.getDate())).slice(-2);
console.log(d.getFullYear()+"-"+mm+"-"+day);
      this.min = d.getFullYear()+"-"+mm+"-"+day;
this.location = localStorage.getItem('location');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
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
  confirm()
  {
  	this.navCtrl.push(ConfirmPage);
  }
  getUserAddress(){
     
    var user = JSON.parse(localStorage.getItem('userData2'));
    var userID = user.User.id;
    this.useradd = user.User.address;
    		let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/userinfo';

        var postdata = {
                    uid:userID
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
							if (data.isSucess == "true" ) {
               
									this.useraddress = data.data.User;

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
  serviceproviderlist(formData)
  {
    console.log(formData.value);
		localStorage.setItem('schedule',JSON.stringify(formData.value));
  	this.navCtrl.push(ServiceproviderlistPage,{serviceDate:formData.value.sdate,serviceTime:formData.value.stime});
  }

  goToAddress(){
      this.navCtrl.push(AddressPage);
  }
  golocation(){
	 this.app.getRootNav().setRoot(TabsPage); 
  }
}
