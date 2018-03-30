import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';
import { CongratulationsPage } from '../congratulations/congratulations';
import { InAppBrowser } from '@ionic-native/in-app-browser';
/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {
	public data = '';
public param;
public amount;
public reference;
public first_name;
public last_name;
public email;
public phonenumber;
public token;
public services;
public location;
public scheduleDate;
public scheduleTime;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
		public toastCtrl: ToastController,
    public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App,
    private stripe: Stripe,
		private iab: InAppBrowser
    ) {
      console.log(JSON.parse(localStorage.getItem('schedule')));
      this.param =  navParams.get("rqstId");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
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

gocongo(){

	this.app.getRootNav().setRoot(CongratulationsPage);
}


payment(){  

  
    var userID = JSON.parse(localStorage.getItem('userData'));



			var target = "_blank";			    
    var options = "location=no,hidden=no";
  var browser = this.iab.create('http://rakhi.crystalbiltech.com/service/api/users/make_payment?user_id='+userID+'&sessionid='+this.param, target,options);
   
    browser.on('loadstart').subscribe((e) => {
//alert(JSON.stringify(e));
 if (e.url.match('pesapal_transaction_tracking_id')) {
      browser.close();
              this.showToast('Transaction has been made successfull');
              this.app.getRootNav().setRoot(CongratulationsPage);
  
    }else{

    }

    }, err => {

    });


}


pay(card_data){  

//    var user = JSON.parse(localStorage.getItem('userData'));  
//    var userID = user.User.id;
    var userID = JSON.parse(localStorage.getItem('userData'));
          console.log(userID);
  console.log(card_data);
  var expireDate = card_data.value.exyear;
  var exdate = expireDate.split('-');
  console.log(exdate);
  //alert('payment');
let cardinfo = {
 number: card_data.value.card,
 expMonth: exdate[1],
 expYear: exdate[0],
 cvc: card_data.value.cvv
};

    this.stripe.setPublishableKey('pk_test_Ost0pIHU1azAEl95yCdQN0pK');
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
    
				var url = this.dataprovider.base_url + 'AvailableDates/make_payment';
    Loader.present().then(() => {
    this.stripe.createCardToken(cardinfo).then((token) => {
			//alert(JSON.stringify(token));
      var dd = JSON.stringify(token);
      var ddd = JSON.parse(dd);
     
				//alert(ddd.id);
				var cardType = ddd.card.brand;
				var postdata = {
          
		  stripetoken: ddd.id,  
          user_id : userID,
          session_id : this.param
				}; 
         var ser = this.serializeObj(postdata);
         this.http.post(url,ser, options).map(res => res.json())
					.subscribe(data => {
						Loader.dismiss();
					//	alert(JSON.stringify(data));
            if (data.isSuccess === true ) {
             //   alert("naveen");
              this.showToast('payment successfull');
              this.app.getRootNav().setRoot(CongratulationsPage);
						}else{
              this.showToast('There is an error1');
						}
					}, err => {

						console.log("Error");
						Loader.dismiss();
						//alert(JSON.stringify(err));
						this.showToast('There is an erro2');
					});
			

    }, err => {  
            this.showToast('There is an error in payment');
						alert(JSON.stringify(err));
					})

})
}

}
