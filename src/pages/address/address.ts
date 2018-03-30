import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SchedulePage } from '../schedule/schedule';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {googlemaps} from 'googlemaps'
import { DataProvider } from '../../providers/data/data';
/**
 * Generated class for the AddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

declare var google:any;
@Component({
  selector: 'page-address',
  templateUrl: 'address.html',
})
export class AddressPage {
public location;
public data: any = '';
long;
lat;
public autocompleteItems;

public acService:any;
ngOnInit() {
this.acService = new google.maps.places.AutocompleteService();        
this.autocompleteItems = [];
this.data = {
landmark: ''
};        
}
  constructor(public navCtrl: NavController, 
               public navParams: NavParams,
                public http: Http,
		public toastCtrl: ToastController,
                public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public geolocation: Geolocation,
		public app: App
  ) {
    this.location = localStorage.getItem('location');
  }
  
  
updateSearch() {
console.log('modal > updateSearch');
if (this.data.landmark == '') {
this.autocompleteItems = [];
return;
}
let self = this; 
let config = { 
//types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
input: this.data.landmark, 
componentRestrictions: {  } 
}
this.acService.getPlacePredictions(config, function (predictions, status) {
console.log('modal > getPlacePredictions > status > ', status);
self.autocompleteItems = []; 
console.log(status); 

if(status == google.maps.places.PlacesServiceStatus.OK && predictions){
predictions.forEach(function (prediction) { 

self.autocompleteItems.push(prediction);
console.log(self.autocompleteItems);

});
          
}
});
}
  
    chooseItem(item){
	  var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
		  content: ' ',
	  });
      this.autocompleteItems = [];
      this.data.landmark = item.description;
    
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.data.landmark+'&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
      Loader.present().then(() => {
	  this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data.results[0].geometry.location);
                this.lat = data.results[0].geometry.location.lat;
                this.long = data.results[0].geometry.location.lng;
                this.data.location = data.results[0].geometry.location;
				Loader.dismiss();
      })
	  })
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
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddressPage');
  }

useraddress(addressData){

       this.lat = localStorage.getItem('lat');
			this.long = localStorage.getItem('long');
          var userID = JSON.parse(localStorage.getItem('userData'));
          console.log(userID);
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
				var url = this.dataprovider.base_url + 'users/saveaddress';
				var postdata ={
					uid:userID,
					landmark:addressData.value.landmark,
					optionalname:addressData.value.optionalname,
                    area:addressData.value.area,
					house:addressData.value.house,
					job_description:addressData.value.job_description,
					lat: this.lat,
					long: this.long
				};
         var ser = this.serializeObj(postdata);
				console.log(" postdata" + postdata);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, ser, options).map(res => res.json())
						.subscribe(data => {
							Loader.dismiss();

							if (data.status === true ) {
							    localStorage.setItem("userData2", JSON.stringify(data.data));
								this.showToast(data.msg);
								this.navCtrl.push(SchedulePage)
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

  schedule()
  {
  	this.navCtrl.push(SchedulePage)
  }

}
