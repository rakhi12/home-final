import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import { PaymentPage } from '../payment/payment';
declare var google;
/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  public param;
  public param1;
    public param2;
  public start: any;
  public end: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public dataprovider: DataProvider, 
              public http: Http,
              public toastCtrl: ToastController,
              public loadingCtrl:LoadingController) {
      this.param = navParams.get("providerID");
      this.param1 = localStorage.getItem("userData2");
     this.param2 = this.param1.User;
      console.log(this.param1);
       console.log(this.param2);
      this.getLocation();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
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
  getLocation() {
      
    var locdata = JSON.parse(localStorage.getItem("userData2"));
    console.log(locdata);
       // console.log(localStorage.getItem("userData2"));
        
        var url = this.dataprovider.base_url + 'users/userinfo';
        let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var postdata = {
          uid:this.param
				};
				var serialize = this.serializeObj(postdata);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, serialize, options).map(res => res.json())
						.subscribe(data => {
              
							Loader.dismiss();
                                                        console.log(data);
							if (data.isSucess == "true" ) {
                 
                 // this.start = 'mumbai';
		  this.end = data.data.User.address;
                  console.log(this.end);
                //  this.start = 'chennai';
                  this.start = locdata.User.address;
                  console.log(this.start);
                 // console.log(localStorage.getItem('address'));
    var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);

        directionsService.route({
          origin: this.start,
          destination: this.end,
          travelMode: 'DRIVING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });


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
  payment()
  { 
   this.navCtrl.push(PaymentPage);
  }

  

}
