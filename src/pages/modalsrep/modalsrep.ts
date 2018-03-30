import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';
import { Http,HttpModule, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';
import { ModalController } from 'ionic-angular';


@Component({
  selector: 'page-modalsrep',
  templateUrl: 'modalsrep.html',
  providers: [HttpModule]
})
export class ModalsrepPage {
public data:any = '';
public userid: any;
  constructor(public navCtrl: NavController,
  
  	public http: Http,
		public loadingCtrl: LoadingController,
		public dataprovider: DataProvider,
		public platform: Platform,
		public alertCtrl: AlertController,
		public toastCtrl: ToastController,
		public viewCtrl: ViewController,
		public modalCtrl: ModalController
  ) {
	  
	this.userid = localStorage.getItem('userData');
	
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
    closeModal() {
    this.viewCtrl.dismiss();
  }	

    issuereport(detailForm){
	 			var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
	 				content: ' ',
	 			});
    
         let headers = new Headers();          
	 	headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
	 	let options = new RequestOptions({ headers: headers });
	     var url = this.dataprovider.base_url + 'users/report';

     var data_form = {
       user_id: this.userid,
	   message: detailForm.value.report,
	   subject:'report',
	   jobid:'0'
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
		    //     var i =  document.getElementById('active');
           //      i.click();
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
