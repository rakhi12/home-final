import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';
import { ViewdetailPage } from '../viewdetail/viewdetail';
import { ChatPage } from '../chat/chat';
import { Ionic2RatingModule } from 'ionic2-rating';
import { NgModule } from '@angular/core';
import { StaticPage } from '../static/static';
/**
 * Generated class for the ServiceproviderlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@NgModule({
  imports: [
    Ionic2RatingModule // Put ionic2-rating module here
  ]
})
@Component({
  selector: 'page-serviceproviderlist',
  templateUrl: 'serviceproviderlist.html',
})

export class ServiceproviderlistPage {
public sdate;
public stime;
public title:any;
public stype;
public providers:any;
public data = '';
id: any;
rate: any;
a: any;
b: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
		public toastCtrl: ToastController,
    public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App
  ) {
		var lists = JSON.parse(localStorage.getItem('serviceItems'));
		console.log(localStorage.getItem('serviceItems'));
		console.log(lists);
		this.sdate = navParams.get("serviceDate");
		this.id = localStorage.getItem("userData");
		this.stime = navParams.get("serviceTime");
		console.log(navParams.get("sids")); 
		
				 this.a = navParams.get("type");
				 this.b = navParams.get("sids");
		
		if(navParams.get("sids") != null){
			this.title = navParams.get("sids");
		}else{
		this.title = lists;
		}
		if(navParams.get("type") != null){
			this.stype = navParams.get("type");
		}else{
		if(localStorage.getItem('providerType') != null){
			this.stype = localStorage.getItem('providerType');
		}else if(localStorage.getItem('provider_already_selected') != null){
			this.stype = localStorage.getItem('provider_already_selected');
		}
		}

		
              //  alert(this.stype);
                this.rate = '2';
    this.getList();
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad ServiceproviderlistPage');
  }
viewprovider(pID,dis){
   this.navCtrl.push(ViewdetailPage,{providerId:pID,provider_distance:dis});
}

gotohome(){
	this.app.getRootNav().setRoot(TabsPage);
	
} 
chatbx(proid)
{ 
    console.log(proid);
    this.navCtrl.push(ChatPage,{prid:proid});
    
}
getList(){
        var token = localStorage.getItem('tokenId');
		var url;
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });

				if(this.a != null && this.b != null){
					 url = this.dataprovider.base_url + 'availableDates/availabledays_search';
				}else{
					 url = this.dataprovider.base_url + 'availableDates/availabledays';
				}
        
				var postdata = {
					uid: this.id,
                                                 sdate:this.sdate,
						stime:this.stime,
                                                title:this.title,
						stype:this.stype
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
					})
	
}

  confirm(formData)

{
	console.log(formData.value);
    if(formData.value.selectprovider == undefined)
	{
		this.showToast("First select a service provider above");
	}
	else
	{
	localStorage.setItem('selectedprovider',formData.value.selectprovider); 
	var uid = localStorage.getItem("userData");

	var type;
	if(localStorage.getItem("provider_already_selected") != null){
		 type = localStorage.getItem("provider_already_selected");
	}else if(localStorage.getItem("providerType") != null){
		type = localStorage.getItem("providerType");
	}
	
	var schedule = localStorage.getItem("schedule");
	var location = localStorage.getItem("location");
  var token = localStorage.getItem('tokenId');
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/requestToProvider';
				var postdata = {
              requestedData:formData.value.selectprovider,
							schedule:schedule,
							uId:uid,
							provider_type:type,
							location:location
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
							if (data.status === true ) {
									this.navCtrl.push(StaticPage);
                                                                     
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
	//this.navCtrl.push(ConfirmPage);
}       




}
