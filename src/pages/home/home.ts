import { Component, ViewChild, ElementRef,OnInit  } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { TabsPage } from '../tabs/tabs';
import { ServicesPage } from '../services/services';
import { LocationPage } from '../location/location';
import { ServicerepairPage } from '../servicerepair/servicerepair';
import { CategoryPage } from '../category/category';
import 'rxjs/add/operator/map';
import { Geolocation } from '@ionic-native/geolocation';
import {googlemaps} from 'googlemaps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';

declare var google:any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
	public servicecat: any = '';
	loon1: any;
	laat1: any;
	public data = '';
  public lat;
  public long;
  public cats:any;
  public catss: any;
  public catssln: any;
  public catsss: any;
	public searchlocation;
	public autocompleteItems;
	public autocomplete;
	public acService:any;
	public placesService: any;
	map: any;
	// public lat:any;
	// public long:any;
	public resp:any;
geocoder: any;
	@ViewChild('map') mapElement: ElementRef;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public http: Http,
		public toastCtrl: ToastController,
    public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App,
		private nativeGeocoder: NativeGeocoder,
		public geolocation: Geolocation) {
		
     this.lat = localStorage.getItem('lat');
     this.long = localStorage.getItem('long');
		 this.searchlocation = localStorage.getItem('location');
		 this.services();
	     this.getcats();


	}
	ngOnInit() {
		this.acService = new google.maps.places.AutocompleteService();  
this.geocoder= new google.maps.Geocoder();   		
		this.autocompleteItems = [];
		this.autocomplete = {
		query: ''
		};        
		}
  showToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 5000,
			position: 'middle'
		});
		toast.present();
	}
	
	backlocation(){
		this.app.getRootNav().setRoot(LocationPage);
	}
  	serializeObj(obj) {

		var result = [];
		for (var property in obj)
			result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
		return result.join("&");
	}
	
	
	allservices(){
		this.navCtrl.push(ServicesPage,{lat:this.lat,long:this.long});
	}
	aboutservice(subcatid,catId){
		this.navCtrl.push(ServicerepairPage,{subcatid:subcatid, catId:catId});
	}
	seeservice(catId){
		console.log(catId);
		this.navCtrl.push(CategoryPage,{catId:catId});
	}
	// servicesbycategory(){
    // 	this.navCtrl.push(HomePage);
	// }
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
choose(item){
	console.log(item);
	this.autocompleteItems = [];
	localStorage.removeItem('location'); 	
	this.autocomplete.query = item.description;
 console.log( this.autocomplete.query);
	localStorage.setItem('location',item.description);
}
		chooseItem(item){
			console.log(item)
			console.log('rk')
      this.autocompleteItems = [];
	  console.log( this.autocomplete.query);
     // this.autocomplete.query = item.description;
   
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?address='+this.autocomplete.query+'&key=AIzaSyDrBgW0O1B6utrBVTYtjUa5puVQgn_lkRg';
      this.http.get(url)
              .map(res => res.json())
              .subscribe(data => {
                console.log(data.results[0].geometry.location);
                this.lat = data.results[0].geometry.location.lat;
                this.long = data.results[0].geometry.location.lng;
								this.autocomplete.location = data.results[0].geometry.location;
								console.log(location);
								localStorage.removeItem('lat'); 	
								localStorage.removeItem('long');
	

								console.log(this.lat+'-'+this.long);
								localStorage.setItem('lat',this.lat);
								localStorage.setItem('long',this.long);
							    localStorage.removeItem('provider_already_selected');
		                        localStorage.removeItem('providerType');
								this.navCtrl.push(TabsPage);
      })
	}
	
	/*search()
  {
    console.log(this.lat+'-'+this.long);
     localStorage.setItem('lat',this.lat);
     localStorage.setItem('long',this.long);
     localStorage.setItem('location',this.autocomplete.query);
  	 this.navCtrl.push(TabsPage);
     //this.navCtrl.push(TabsPage);
     
  }*/
  services()
  {
  	//this.navCtrl.push(ServicesPage);
	let headers = new Headers();
	headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
	let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'services/searchservice';

        var postdata = {
          lat:this.lat,
          long:this.long
				};
				
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
                                              var Serialized = this.serializeObj(postdata);
					this.http.post(url, Serialized, options).map(res => res.json())
						.subscribe(datas => {
              
							Loader.dismiss();
                                                        console.log(datas);
							if (datas.isSuccess == 'true' ) {
                               this.cats = datas.data;
								console.log('hhh');
								console.log(this.cats);	
							} else {
								this.showToast(datas.msg);
								this.cats = datas.data;
							}

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
  }



  getcats()
  {
  	//this.navCtrl.push(ServicesPage);
	let headers = new Headers();
	headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
	let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'services/searchservice';

        var postdata = {
          lat:this.lat,
          long:this.long
				};
				
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
                                              var Serialized = this.serializeObj(postdata);
					this.http.post(url, Serialized, options).map(res => res.json())
						.subscribe(datas => {
              
							Loader.dismiss();
                                                        console.log(datas);
							if (datas.isSuccess == 'true' ) {
							   this.catssln = datas.data.length;
							   console.log(this.catssln);
                               this.catss = datas.data;
							  
								console.log('hhh');
								
							} else {
								this.showToast(datas.msg);
								this.catssln = '0';
								console.log(this.catssln);
								this.catss = datas.data;
								
							}

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
  }




  servicesbycategory(data)
  {
	  console.log(data.value.Search)
	  console.log(data.value.servicecat);
	  console.log(data.value.service);


	if(!data.value.servicecat && !data.value.Search && !data.value.service){
        this.showToast('Please fill all fields');
	}else if(!data.value.servicecat){
        this.showToast('Please select service category');
	}else if(!data.value.Search){
        this.showToast('Please enter service search radius in km');
	}else if(!data.value.service){
        this.showToast('Please select provider type');
	}else{ 
	localStorage.setItem('provider_already_selected',data.value.service);
	localStorage.removeItem('providerType');
  	//this.navCtrl.push(ServicesPage);
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'services/searchservicebytype';

        var postdata = {lat:this.lat,
		            long:this.long,
		            cat_id:data.value.servicecat,
			    provider_type:data.value.service,
			    distance:data.value.Search
				};
				console.log("postdata");
				console.log(postdata);
				var serialized_data = this.serializeObj(postdata);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, serialized_data, options).map(res => res.json())
						.subscribe(datas => {
              
							Loader.dismiss();
                             console.log(datas);
							if (datas.isSuccess == 'true' ) {
                               this.cats = datas.data;
								
						        console.log(this.cats);	
							} else {
								this.cats = datas.data;
								this.showToast(datas.msg);
							}

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})
  }
   }


  location()
  {

  		this.navCtrl.push(LocationPage);
  }

}
