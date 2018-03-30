import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Http,HttpModule, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';



@Component({
  selector: 'page-modalscancel',
  templateUrl: 'modalscancel.html',
  providers: [HttpModule]
})
export class ModalscancelPage {
public data:any = '';
public provider_id: any;
public job_id: any;
public cprice: any;
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
	this.cprice = localStorage.getItem('canceled_price');
  }
  
  
  
  
  	showToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 9000,
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

    cancelByUser(detailForm){
		
	 			var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
	 				content: ' ',
	 			});
    
         let headers = new Headers();          
	 	headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
	 	let options = new RequestOptions({ headers: headers });
	     var url = this.dataprovider.base_url + 'users/rescheduleduserrqsts';

     var data_form = {
       sid: this.job_id,
	   cancel_reason: detailForm.value.reason,
	   price: this.cprice
     }
     var Serialized = this.serializeObj(data_form);
     console.log(data_form);
     Loader.present().then(() => {
     this.http.post(url, Serialized, options)
       .map(res => res.json())
       .subscribe(sdata => {
           Loader.dismiss();
         console.log(sdata);
         if (sdata.status == true) {
this.closeModal();
		  this.showToast(sdata.msg);   

		 // this.list_active();
		         var i =  document.getElementById('cancelled');
                 i.click();
         }

       }, error => {
         Loader.dismiss();
       });
       })
	
   } 
  
 /* bck_pge(){

    this.navCtrl.pop(NotificationPage);
  }*/
}
