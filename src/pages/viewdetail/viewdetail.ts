import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';
import { Ionic2RatingModule } from 'ionic2-rating';
import { NgModule } from '@angular/core';
import { ConfirmPage } from '../confirm/confirm';
import { ChatPage } from '../chat/chat';
import { FeesPage } from '../fees/fees';
/**
 * Generated class for the ViewdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@NgModule({
  imports: [
    Ionic2RatingModule // Put ionic2-rating module here
  ]
})
@Component({
  selector: 'page-viewdetail',
  templateUrl: 'viewdetail.html',
})
export class ViewdetailPage {
public providerInfo = {};
public user;
providerDistance: any;
  converstaion: any;
  constructor(public navCtrl: NavController,
               public navParams: NavParams,
                public http: Http,
		public toastCtrl: ToastController,
                public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App) {
      this.user = navParams.get("providerId");
	  this.providerDistance =  navParams.get("provider_distance");
      this.getprofile();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewdetailPage');
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
map(pid){
	this.navCtrl.push(ConfirmPage,{providerID:pid});
}
chatbx(proid)
{
    console.log(proid);
    this.navCtrl.push(ChatPage,{prid:proid});
    
}
getprofile(){
        var userID = this.user;
				var currentUser = localStorage.getItem("userData");
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/provideruserinfo';

        var postdata ={
            uid:userID,
			currentUser:currentUser,
			distance:this.providerDistance
				};
				
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});
          var serialize = this.serializeObj(postdata);
					Loader.present().then(() => {
					this.http.post(url, serialize, options).map(res => res.json())
						.subscribe(data => {
              
							Loader.dismiss();
             // console.log(data);
							if (data.isSucess == "true" ) {
               
									this.providerInfo = data.data;
                  //this.converstaion =  data.data.length;

									//console.log(this.converstaion);                                               

							} else {
								
								this.providerInfo = data.data;
								//this.converstaion =  data.data.length;
								//console.log(this.converstaion); 
							}

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
			
}
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
gotofees(){
	this.navCtrl.push(FeesPage);
}
}
