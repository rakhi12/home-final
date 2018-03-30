import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OngoingNextPage } from '../ongoing-next/ongoing-next';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { DataProvider } from '../../providers/data/data';
import { ViewdetailPage } from '../viewdetail/viewdetail';
import { PaymentPage } from '../payment/payment';
import { DetailproviderPage } from '../detailprovider/detailprovider';
import { CongratulationsPage } from '../congratulations/congratulations';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { ModalsPage } from '../modals/modals';
import { ContactPage } from '../contact/contact';
import { ChatPage } from '../chat/chat';
import { PrivacypolicyPage } from '../privacypolicy/privacypolicy';
import { ServiceproviderlistPage } from '../serviceproviderlist/serviceproviderlist';
import { ModalscancelPage } from '../modalscancel/modalscancel';
import { RefundPage } from '../refund/refund';
import * as $ from 'jquery'
/**
 * Generated class for the ProjectsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
   public orderdata='';

  itemsss: any;
  itemss: any;
  items: any;
  itemsr: any;
  id: string;
  itemssss:any;
  loader: any;
  public activeTab;	
public orderlist:any;
public data = '';	
date: any;
getDate: string;
param: any;
param1: any;
rate: any;
getTitle: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
		public toastCtrl: ToastController,
    public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App,
		private iab: InAppBrowser,
		public modalCtrl: ModalController
  ) {
	this.id = localStorage.getItem('userData');
	this.param = navParams.get("active");

	this.param1 = localStorage.getItem("setActiveTabs");
	if(this.param != ' '){
		this.activeTab = "all";
		this.list_requested();
	}else if(this.param1 != null){
		this.activeTab = "all";
		this.list_requested();
	}else{
		this.activeTab = "active";
		this.list_active();
	}
	
	
	this.date = new Date();
	  this.rate = '3.5';   
	   //this.getOrderList(); 
  }
 	showToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 5000,
			position: 'middle'
		});
		toast.present();
	} 


  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectsPage');
  }


payment(){    
	this.app.getRootNav().setRoot(CongratulationsPage);  
}

abcd(providerid,orderId,serviceID,amount,name){
    alert(orderId);
    this.navCtrl.push(DetailproviderPage,{providerid:providerid,orderId:orderId,service:serviceID,amn:amount,nm:name});
}  

policy(){
	this.navCtrl.push(PrivacypolicyPage);
}
  
 serializeObj(obj) {

		var result = [];
		for (var property in obj)
			result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
		return result.join("&");
	}
 


  list_requested() {
				var Loader = this.loadingCtrl.create({    
					content: ' ',
				});
        let headers = new Headers();          
		headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
	    var url = this.dataprovider.base_url + 'users/pendinguserrqsts';

    var data_form = {
      uid: this.id
    }
    console.log(data_form);
    var Serialized = this.serializeObj(data_form);
    console.log(Serialized);
    console.log(data_form);
    Loader.present().then(() => {
    this.http.post(url, Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        Loader.dismiss();
console.log(sdata.data);
        if (sdata.isSucess == 'true') {
          this.itemsr = sdata.data;
		 }
        else {
           this.itemsr = sdata.data;
        }
         }, error => {
        // console.log(sdata.msg);
        Loader.dismiss();
      });
    })
  }




  list_active() {
				var Loader = this.loadingCtrl.create({    
					content: ' ',
				});
        let headers = new Headers();          
		headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
	    var url = this.dataprovider.base_url + 'users/acceptedrqsts';

    var data_form = {
      uid: this.id
    }
    console.log(data_form);
    var Serialized = this.serializeObj(data_form);
    console.log(Serialized);
    console.log(data_form);
    Loader.present().then(() => {
    this.http.post(url, Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
        Loader.dismiss();

        if (sdata.isSucess == 'true') {
          this.items = sdata.data;
          console.log(this.items);
         }
        else {
          this.items = sdata.data;
        }


      }, error => {
         Loader.dismiss();
      });
    })
  }

  list_completed() {
                var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});
    
        let headers = new Headers();          
		headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
	    var url = this.dataprovider.base_url + 'users/completedrqsts';

    var data_form = {
      uid: this.id
    }
    console.log(data_form);
    
    // alert(JSON.stringify(data_form));
    var Serialized = this.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);
    Loader.present().then(() => {
    this.http.post(url, Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
          Loader.dismiss();
//        this.loader.onDidDismiss(() => {
//                console.log('Dismissed loading');
//                });
        console.log(sdata);
        if (sdata.isSucess == 'true') {
          // alert('true')
          this.itemss = sdata.data;
        }
        else {
         this.itemss = sdata.data;
          }
         }, error => {
        // console.log(sdata.msg);
        Loader.dismiss();
      });
      })
    }

  list_cancelled(){
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});
        let headers = new Headers();          
		headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
	    var url = this.dataprovider.base_url + 'users/cancelledrqsts';

    var data_form = {
      uid: this.id
    }
    console.log(data_form);
    
    // alert(JSON.stringify(data_form));
    var Serialized = this.serializeObj(data_form);
    console.log(Serialized);
    // alert(JSON.stringify(Serialized));
    console.log(data_form);
    Loader.present().then(() => {
    this.http.post(url, Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
          Loader.dismiss();
        console.log(sdata);
        if (sdata.status == true) {
          // alert('true')
          this.itemsss = sdata.data;
        }
        else {
          this.itemsss = sdata.data;
        }
       }, error => {
        // console.log(sdata.msg);
        Loader.dismiss();
      });
      })
  }
  
   cancelByUser(sid){
	 			var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
	 				content: ' ',
	 			});
    
         let headers = new Headers();          
	 	headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
	 	let options = new RequestOptions({ headers: headers });
	     var url = this.dataprovider.base_url + 'users/rescheduleduserrqsts';

     var data_form = {
       sid: sid
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

		  this.showToast(sdata.msg);
		  this.list_active();
         }

       }, error => {
         Loader.dismiss();
       });
       })
   }


   
      rqstcompleted(sid,uid){
	 			var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
	 				content: ' ',
	 			});
    
         let headers = new Headers();          
	 	headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
	 	let options = new RequestOptions({ headers: headers });
	     var url = this.dataprovider.base_url + 'users/completeuserRqsts';

     var data_form = {
       sid: sid,
	   uid: uid
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

		  this.showToast(sdata.msg);
		     var i =  document.getElementById('completed');
   i.click();
         }

       }, error => {
         Loader.dismiss();
       });
       })
   }
   
   
makePayment(rqid){
  // this.navCtrl.push(PaymentPage,{rqstId:rqid});
  
      var userID = JSON.parse(localStorage.getItem('userData'));



			var target = "_blank";			    
    var options = "location=no,hidden=no";
  var browser = this.iab.create('http://rakhi.crystalbiltech.com/service/api/users/make_payment?user_id='+userID+'&sessionid='+rqid, target,options);
   
    browser.on('loadstart').subscribe((e) => {
//alert(JSON.stringify(e));
if (e.url.match('pesapal_transaction_tracking_id')) {
      browser.close();
	  
	  			let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let optionss = new RequestOptions({ headers: headers });
                var urls = this.dataprovider.base_url + 'AvailableDates/make_payment';
				var postdata = {
						sid:rqid
				};

				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
                    var serialized_all = this.serializeObj(postdata);
					this.http.post(urls, serialized_all, optionss).map(res => res.json())
						.subscribe(data => {
							Loader.dismiss();
							if (data.isSuccess === true ) {
                               this.showToast('Transaction has been made successfull');
                               this.app.getRootNav().setRoot(CongratulationsPage);
							} else {
								this.showToast('There is an error');
							}

						}, err => {
							//alert("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})	
  
    }else{

    }

    }, err => {

    });
  
  
  
}

	getOrderList(){
                console.log("1111");
				var user = JSON.parse(localStorage.getItem('userData2'));  
				var userID = user.User.id;
                console.log(userID);
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
               var url = this.dataprovider.base_url + 'Orders/orderlist';
				var postdata = {
						uid:userID
				};
        
                                console.log(" postdata : " + JSON.stringify(postdata));
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
                                            var serialized_all = this.serializeObj(postdata);
					this.http.post(url, serialized_all, options).map(res => res.json())
						.subscribe(data => {
							Loader.dismiss();
							console.log(data);
							if (data.isSuccess === true ) {
								this.orderlist = data.data;
//                              this.orderdata= data.data.Order.amount;
//                              console.log(this.orderdata);
//                              this.orderdata= data.data.OrderItem.name;
//                              console.log(this.orderdata);
                                console.log(this.orderlist);
							} else {
								this.orderlist = data.data;
								this.showToast(data.msg);
							}

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
			
		} 
gotopay(){
	this.navCtrl.push(CongratulationsPage);
}
nxt_ogo(session,uid){
  console.log('rakhi');
   console.log(uid);
    console.log('rakhi');
  this.navCtrl.push(OngoingNextPage,{session:session,userid:uid});
}

pop(id,jobid,price){
					let notificationAlert = this.alertCtrl.create({
					title: '<h4 class="cancelTitle">Are you sure you want to decline this job?</h4>',
					message: '<p class="cancelMsg">You will not be charged any administration fee if you decline this job.</p>',
					buttons: [{
							text: 'No',
							role: 'cancel'
						}, {
							text: 'Yes',
							handler: () => {

	    let cmodal = this.modalCtrl.create(ModalscancelPage);
	localStorage.setItem('providermodalid', id);
	localStorage.setItem('jobid', jobid);
	localStorage.setItem('canceled_price', price);
    cmodal.present();
	cmodal.onDidDismiss(data => {
     //this.notificationss();
  });
							}
						}]
				});
				notificationAlert.present();
}

pops(id,jobid,price,percentage){
					let notificationAlert = this.alertCtrl.create({
					title: '<h4 class="cancelTitle">Are you sure you want to decline this job?</h4>',
					message: '<p class="cancelMsg">You will incur an administration fee of '+percentage+'% of your deposit fees.</p>',
			
					buttons: [{
							text: 'No',
							role: 'cancel'
						}, {
							text: 'Yes',
							handler: () => {

	    let cmodal = this.modalCtrl.create(ModalscancelPage);
	localStorage.setItem('providermodalid', id);
	localStorage.setItem('jobid', jobid);
	localStorage.setItem('canceled_price', price);
    cmodal.present();
	cmodal.onDidDismiss(data => {
     //this.notificationss();
  });
							}
						}]
				});
				notificationAlert.present();
}


 presentModal(id,jobid) {
    let modal = this.modalCtrl.create(ModalsPage);
	localStorage.setItem('providermodalid', id);
	localStorage.setItem('jobid', jobid);
    modal.present();
	modal.onDidDismiss(data => {
     //this.notificationss();
  });
  }
goToContact(id,jobid){
	this.navCtrl.push(ContactPage,{providerId:id,jobid:jobid});
}
chat(pid){
	this.navCtrl.push(ChatPage,{prid:pid});
}
gotohome(){
	this.app.getRootNav().setRoot(TabsPage);
}
gotocnr(){
	this.navCtrl.push(RefundPage);
}
gotoproviderlist(sids,type,sdate,stime){
	
	this.navCtrl.push(ServiceproviderlistPage,{serviceTime:stime,serviceDate:sdate,type:type,sids:sids});
	
      /* console.log(sids);
	   console.log(type);
	   console.log(sdate);
	   console.log(stime);
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'availableDates/availabledays_search';
				var postdata = {
					uid: this.id,
                    sdate:sdate,
					stime:stime,
                    title:sids,
					stype:type
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
					})	*/

}
}
