import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';



@Component({
  selector: 'page-modals',
  templateUrl: 'modals.html'
})
export class ModalsPage {
public data:any = '';
public provider_id: any;
public job_id: any;
  constructor(public navCtrl: NavController,
  
  	public http: Http,
		public loadingCtrl: LoadingController,
		public dataprovider: DataProvider,
		public platform: Platform,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController,
		public viewCtrl: ViewController
  ) {
	  
	this.provider_id = localStorage.getItem('providermodalid');
	this.job_id = localStorage.getItem('jobid');
  }
  
  ngOnInit() {

this.data = {
jobstar: '1'
};        
}
  
  
  	showToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 3000,
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
    closeModal() {
    this.viewCtrl.dismiss();
  }	
rating(detailForm){

            var user = JSON.parse(localStorage.getItem('userData2'));
            var userID = user.User.id;             
			let headers = new Headers();
			headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
			let options = new RequestOptions({ headers: headers });
            var url = this.dataprovider.base_url + 'users/rating';

        var postdata = {
                  customer_id: userID,
                  provider_id: this.provider_id,
				  jobid: this.job_id,
                  rating: detailForm.value.jobstar 
				};
                                
         console.log("postdata" + JSON.stringify(postdata));
		 var ser = this.serializeObj(postdata);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, ser, options).map(res => res.json())
						.subscribe(data => {
						   Loader.dismiss();
						   console.log(data);
						   this.showToast(data.msg);
				   //this.app.getRootNav().setRoot(TabsPage);
							this.closeModal();

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
  } 
  

  
  
 /* bck_pge(){

    this.navCtrl.pop(NotificationPage);
  }*/
}
