import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
public data: any = '';
public param: any;
public param1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
		public toastCtrl: ToastController,
    public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App) {
			
			this.param =  navParams.get("providerId");
			this.param1 =  navParams.get("jobid");

  }
back(){
	this.navCtrl.pop();
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
  
    contact(signup) {
    var userID = JSON.parse(localStorage.getItem('userData'));
    var data_form = {
	  user_id: userID,	
      subject: signup.value.subject,
      message: signup.value.message,
      jobid:this.param1,	  
    }
    console.log(data_form);

                let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });

				var url = this.dataprovider.base_url + 'users/report';
                var serialized_all = this.serializeObj(data_form);
			
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});
				Loader.present().then(() => {
				this.http.post(url,serialized_all,options).map(res => res.json())
					.subscribe(data => {
						Loader.dismiss();
						if (data.status === true ) {
						this.navCtrl.pop();
						      let toast = this.toastCtrl.create({
								message: data.msg,
								duration: 3000,
								position: 'middle'
							  });
							  toast.present();
							
						}else{
						 
						  
						  let toast = this.toastCtrl.create({
							message: data.msg,
							duration: 3000,
							position: 'middle'
						  });
						  toast.present();
						}

					}, err => {

						console.log("Error");
						Loader.dismiss();
						console.log("Error!:", err);
					});
				 })
  }

}
