import { Component, ViewChild, ElementRef,OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';
import { Http,HttpModule, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController, Nav, Platform } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';
import { ProfilePage } from '../profile/profile';
import { App  } from 'ionic-angular';
import {googlemaps} from 'googlemaps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { LoadingController } from 'ionic-angular';
import { Diagnostic } from '@ionic-native/diagnostic';
import { DataProvider } from '../../providers/data/data';
import { SigninPage } from '../signin/signin';

import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google:any;
@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
  providers:[HttpModule,Diagnostic]
})
export class LocationPage implements OnInit{
  longitude1:any='';
  lattitude1:any='';
  public autocompleteItems;
public autocomplete;
public acService:any;
public placesService: any;
map: any;
public lat:any;
public long:any;
public resp:any;
id: any;
googledata: string;
	simpledata: string;
	fbdata: string;
geocoder: any;
public currentLatitude: any;
public currentLongitude: any;
public cross: any;
@ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController,public dataprovider: DataProvider,private diagnostic: Diagnostic,public toastCtrl: ToastController, public loadingCtrl: LoadingController,public app: App, public navParams: NavParams, public http: Http, public alertCtrl: AlertController, public geolocation: Geolocation,private fb: Facebook, 
		private googlePlus: GooglePlus,
  private nativeGeocoder: NativeGeocoder
  ) {
	  this.fbdata=localStorage.getItem('fbData');
		this.googledata=localStorage.getItem('googleData');
		this.simpledata=localStorage.getItem('userData2')
     this.id = localStorage.getItem("userData");
	 localStorage.removeItem('setActiveTab');
	 this.cross = false;
   // console.log(JSON.parse(localStorage.getItem('userData')));
  }
ngOnInit() {
this.acService = new google.maps.places.AutocompleteService();  
this.geocoder= new google.maps.Geocoder();      
this.autocompleteItems = [];
this.autocomplete = {
query: ''
};        
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
  }
updateSearch() {
console.log('modal > updateSearch');
if (this.autocomplete.query == '') {
this.autocompleteItems = [];
return;
}
let self = this; 
let config = { 
//types:  ['geocode'], // other types available in the API: 'establishment', 'regions', and 'cities'
input: this.autocomplete.query, 
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
  	serializeObj(obj) {

		var result = [];
		for (var property in obj)
			result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
		return result.join("&");
	}
  	showToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 5000,
			position: 'middle'
		});
		toast.present();
	}
  chooseItem(item){
	  var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
		  content: ' ',
	  });
      this.autocompleteItems = [];
      this.autocomplete.query = item.description;
    
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.autocomplete.query+'&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
      Loader.present().then(() => {
	  this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data.results[0].geometry.location);
                this.lat = data.results[0].geometry.location.lat;
                this.long = data.results[0].geometry.location.lng;
                this.autocomplete.location = data.results[0].geometry.location;
                this.cross = true;


				
				    let latLng = new google.maps.LatLng(this.lat, this.long);
 
    let mapOptions = {
	  draggable:true,
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
	  
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
       
         var marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
         map: this.map,
       });

	     google.maps.event.addListener(marker, 'dragend', ((markers)=>{
      var latLng = markers.latLng; 
      this.currentLatitude = latLng.lat();
      this.currentLongitude = latLng.lng();
     console.log(this.currentLatitude)
     console.log(this.currentLongitude)
     let latLong = new google.maps.LatLng(this.currentLatitude,this.currentLongitude); 
	  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{
		  console.log(results);
		   if (status == google.maps.GeocoderStatus.OK) {
          if (results[1]) {
              this.autocomplete.query= results[1].formatted_address;
			  this.cross = true;
              console.log("srishti")
              console.log( this.autocomplete.query)
                    }
                }
		   
	   })
	   )

   }));
 
				Loader.dismiss();
      })
	  })
  }

  
  crossclear(){
	  this.autocomplete.query = '';
  }
  
  

   home()
  {
  	this.navCtrl.push(HomePage);
  }

  search(frm)
  {
	  console.log('hh');
	 console.log(this.long) 
    console.log(this.lat);
	 if(this.lat != null && this.long != null){
		 localStorage.setItem('lat',this.lat);
		 localStorage.setItem('long',this.long);
		 localStorage.setItem('location',this.autocomplete.query);
		 localStorage.removeItem('provider_already_selected');
		 localStorage.removeItem('providerType');
		 this.navCtrl.push(TabsPage);
		 //this.navCtrl.push(TabsPage);
	 }else{
		 this.showToast('There is an error');
	 }

     
  }
getCurrentLocation(){

	        this.diagnostic.isLocationEnabled().then(
                (isAvailable) => {
       
               // alert('Is available? ' + isAvailable);


if(isAvailable === true){

  console.log('My current location');
this.geolocation.getCurrentPosition().then((resp) => {
  console.log(resp);
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);  
 this.lat=resp.coords.latitude;
 this.long=resp.coords.longitude;
 localStorage.setItem('lat',this.lat);
 localStorage.setItem('long',this.long);
 
 let latLng = new google.maps.LatLng(this.lat, this.long);
     let mapOptions = {
	  draggable:true,
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
	  
    }
 
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
       
         var marker = new google.maps.Marker({
         position: latLng,
         draggable: true,
         map: this.map,
       });

	   
	  let latLong = new google.maps.LatLng(this.lat,this.long); 
	  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{
		 
		   if (status == google.maps.GeocoderStatus.OK) {
			   
          if (results[1]) {
			 
			  
              this.autocomplete.query= results[1].formatted_address;
			  this.cross = true;
              console.log("srishti")
              console.log( this.autocomplete.query)
                    }
                }
		   
	   }));
	   
	   
	     google.maps.event.addListener(marker, 'dragend', ((markers)=>{
      var latLng = markers.latLng; 
      this.lat = latLng.lat();
      this.long = latLng.lng();
     let latLongdrag = new google.maps.LatLng(this.lat,this.long); 
	  this.geocoder.geocode({'latLng': latLongdrag}, ((resultsdrag, status)=>{
		 
		   if (status == google.maps.GeocoderStatus.OK) {
			   
          if (resultsdrag[1]) {
			 
			  
              this.autocomplete.query= resultsdrag[1].formatted_address;
               this.cross = true;
                    }
                }
		   
	   })
	   )

   }));
                
 
 
                    
 
 			/*	var postdata = {
					uid: this.id,
					lat: this.lattitude1, 
          long: this.longitude1
				};
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
				var url = this.dataprovider.base_url + 'users/userChooseCurrentLocation';
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});
				var Serialized = this.serializeObj(postdata);
				Loader.present().then(() => {
				this.http.post(url, Serialized, options).map(res => res.json())
					.subscribe(data => {
						Loader.dismiss();
            console.log(data);
						if (data.status === true ) {
              
            //  alert(data.data.User.address);
            localStorage.setItem('location',data.data.User.address);
  	        //this.navCtrl.push(TabsPage);
						}
					}, err => {
						console.log("Error");
						Loader.dismiss();
						console.log("Error!:", err);
					});
				 })*/

 
}).catch((error) => {
  console.log('Error getting location', error);
  this.showToast('There is an error for getting location');
});

}else{
  	this.showToast('Please turn on your location');
}



                }).catch((e) => {
      
                alert(JSON.stringify(e));
                });


}
profile(){
	this.navCtrl.push(ProfilePage); 
}
	

	
}
