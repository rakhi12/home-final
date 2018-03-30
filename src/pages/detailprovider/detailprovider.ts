import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import {Http, Headers, RequestOptions} from '@angular/http';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { App  } from 'ionic-angular';
/**
 * Generated class for the DetailproviderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detailprovider',
  templateUrl: 'detailprovider.html',
})
export class DetailproviderPage {
  req_id: any;
  taing: any;
  public img:any;
  public name: any;
  star:any;
  user_id: string;
  sID: any;
  oID: any;
  public data = '';
  proid = '';
  public order: any;
  public amount1 :any ;
  public name1 :any ;

  constructor(public navCtrl: NavController, public navParams: NavParams,public dataprovider: DataProvider,
      public http: Http,public toastCtrl: ToastController,public loadingCtrl: LoadingController,public app: App) {
      this.proid = navParams.get('providerid');
      this.sID = navParams.get('service');
      this.oID = navParams.get('orderId');
      this.amount1 = navParams.get('amn');
          this.name1 = navParams.get('nm');
      console.log(this.proid);
      console.log(this.amount1);
      console.log(this.name1);
     this.getprofile1();
     this.getOrderItem();
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
 
 getOrderItem(){
   			let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'orders/getItemById';
			
        var postdata1 = {
                   oid:this.oID   
			        };

                               
        var serialized_all = this.serializeObj(postdata1);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, serialized_all, options).map(res => res.json())
						.subscribe(data => {
                  Loader.dismiss();
                  console.log(JSON.stringify(data));
                                                        
							if (data.isSuccess === true ) {
                 this.order = data.data.Order.schedule_date+' ('+data.data.Order.schedule_time+')';
                 console.log(this.order);
                }

					}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
 }       
       
        
getprofile1(){

				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/userinfo';
			
        var postdata1 = {
                         uid:this.proid
			};

                                console.log('profile' + JSON.stringify(postdata1));
                                var serialized_all = this.serializeObj(postdata1);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, serialized_all, options).map(res => res.json())
						.subscribe(data => {
                                                 	Loader.dismiss();
                                                    console.log(JSON.stringify(data));
                                                        
							if (data.isSucess == "true" ) {
								  this.img = data.data.User.image;
								  this.name = data.data.User.firstname+' '+data.data.User.lastname;
                                                                  console.log(this.img);
                                                                   console.log(this.name);
                                                        } else {
								alert("else");
							}

					}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
			
}        
        
        
            
goDetail(detailForm){
  //  submit_rating(data){
//          var provID = JSON.parse(localStorage.getItem('provid'));
//          console.log(provID);
            var user = JSON.parse(localStorage.getItem('userData2'));
            var userID = user.User.id;
    		
                
//            var prID3 = localStorage.getItem('selectedprovider');
//            var prID2 = prID3.split('-');
//            var prId = prID2[0];
//                
                let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/rating';

        var postdata = {
                  customer_id: userID,
                  provider_id: this.proid,
                  rating: detailForm.value.jobstar,
                  comment: detailForm.value.comment
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
//                                                   this.navCtrl.setRoot(TabsPage);
                                                   this.app.getRootNav().setRoot(TabsPage);
							

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailproviderPage');
  }

}
