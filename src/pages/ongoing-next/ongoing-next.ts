import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import { ServicedetailPage } from '../servicedetail/servicedetail';
declare var google;
/**
 * Generated class for the OngoingNextPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ongoing-next',
  templateUrl: 'ongoing-next.html',
})
export class OngoingNextPage {
param: any;
userparam: any;
items: any;
public udata = '';
price: any;         
sdate: any;
stime: any;
end: any;
start: any;
types: any = {};
public udocdata: any;
joblocation: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataprovider: DataProvider, public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController) {
     this.param = navParams.get("session");
     this.userparam = navParams.get("userid");
     this.getProviderInfo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OngoingNextPage');
  }
 back(){
      this.navCtrl.pop();
  }
service_detail(sid){
	this.navCtrl.push(ServicedetailPage,{getserviceid:sid});
}
 serializeObj(obj) {

		var result = [];
		for (var property in obj)
			result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
		return result.join("&");
	}

getProviderInfo(){
				var Loader = this.loadingCtrl.create({    
					content: ' ',
				});
        let headers = new Headers();          
		headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
		let options = new RequestOptions({ headers: headers });
	    var url = this.dataprovider.base_url + 'users/getProviderInfos';

    var data_form = {
      rqid: this.param,
      uid: this.userparam
    }
    var Serialized = this.serializeObj(data_form);
    Loader.present().then(() => {
    this.http.post(url, Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
       Loader.dismiss();
       console.log(sdata);
        if (sdata.status == true){
          this.items = sdata.data;
		  this.types = sdata.types;
          this.udata = sdata.userdata.User;
          this.udocdata = sdata.userdocs;
          console.log(sdata.data[0].Request.service_price);
          this.price = sdata.data[0].Request.service_price;   
          this.sdate = sdata.data[0].Request.scheduledate;
          this.stime = sdata.data[0].Request.scheduletime;
          this.joblocation = sdata.data[0].Request.location;
									this.end = sdata.userdata.User.address;
                 console.log(sdata.userdata.User.address);
              var userData = JSON.parse(localStorage.getItem('userData2'));
                console.log(userData);
                //console.log(userData.User.address);
this.start = sdata.data[0].Request.location;
console.log(this.start);
    var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('maps'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);

        directionsService.route({
          origin: this.start,
          destination: this.end,
          travelMode: 'DRIVING'
        }, function(response, status) {
           console.log(response);
          if (status === 'OK') {
           
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });



        }
        else {
          this.items = sdata.data;
        }
      }, error => {
        Loader.dismiss();
      });
      })
}


}
