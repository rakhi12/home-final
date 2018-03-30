import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { LocationPage } from '../location/location';
import { TermsconditionPage } from '../termscondition/termscondition';
import { Http, HttpModule, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ForgotpasswordPage } from '../forgotpassword/forgotpassword';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Diagnostic } from '@ionic-native/diagnostic';
//import { Firebase } from '@ionic-native/firebase';
import * as firebase from 'firebase';
// import { Firebase } from "@ionic-native/firebase";
declare var google:any;
//import { Facebook } from '@ionic-native/facebook';

// import firebase from 'firebase'
// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
  providers:[HttpModule,Diagnostic]
})
export class SigninPage {
  google_data: any={};
  name_google: any;
  public data = '';
	userProfile: any = null;
  User: any;
  public fduser='';
  public lat: any;
  public long: any;
  public userdata = '';
  geocoder: any; 

  public userfbdata:any = '';
  constructor(public navCtrl: NavController,
                public http: Http,
                public toastCtrl: ToastController,
                public dataprovider: DataProvider,
                public loadingCtrl: LoadingController,
                public platform: Platform,
                public alertCtrl: AlertController,
                public app: App,
                public facebook: Facebook,
                private fb: Facebook,
                private googlePlus: GooglePlus,
				private diagnostic: Diagnostic,
				public geolocation: Geolocation,
				private nativeGeocoder: NativeGeocoder
   //  private firebase1: Firebase,		// public afAuth: AngularFireAuth
  ) {

  }
  ngOnInit() {

this.geocoder= new google.maps.Geocoder();      
       
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
  to_signup(){
     this.navCtrl.push(SignupPage);
  }

	public Loading=this.loadingCtrl.create({
					content: 'Please wait...'
					
	});


   facebookLogin()  {
	   
	   
this.diagnostic.isLocationEnabled().then(
 (isAvailable) => {
       
	if(isAvailable === true){
	this.geolocation.getCurrentPosition().then((resp) => {
	  console.log(resp);
	 console.log(resp.coords.latitude);
	 console.log(resp.coords.longitude);  
	 this.lat=resp.coords.latitude;
	 this.long=resp.coords.longitude;
	 localStorage.setItem('lat',this.lat);
	 localStorage.setItem('long',this.long);
		  let latLong = new google.maps.LatLng(this.lat,this.long); 
		  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{ 
			if (status == google.maps.GeocoderStatus.OK) {	   
			  if (results[1]) {
				  localStorage.setItem('location',results[1].formatted_address);
				  
				  var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
		content: ' ',
	 });
   var token = localStorage.getItem('tokenId');
     let permissions = new Array<string>();
     let nav = this.navCtrl;
     permissions = ['public_profile', 'user_friends', 'email'];
 
     this.fb.login(permissions)
     .then((response) => {
      // alert(JSON.stringify(response));
       let userId = response.authResponse.userID;
       let params = new Array<string>();
 
       //Getting name and gender properties
       this.fb.api("/me?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name,picture", params)
       .then((fduser) => {
          //alert("rony"+JSON.stringify(fduser));
          fduser.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
         //now we have the users info, let's save it in the NativeStorage
         var postdata = {
           email: fduser.email,
           name: fduser.name,
           fbId: fduser.id,
           image: fduser.picture,
           phone: '',
           role: 'customer',
           push_token: token
         };
         var serialized_all = this.serializeObj(postdata);
         var url = this.dataprovider.base_url + 'users/fblogin';
      
         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
         let options = new RequestOptions({ headers: headers });
		 Loader.present().then(() => {
         this.http.post(url, serialized_all, options)
           .map(res => res.json())
           .subscribe((response) => {
             console.log(response);
			 Loader.dismiss();
             //alert(JSON.stringify(response));
              if (response.status === true) { 
                   localStorage.setItem("userData", response.data.User.id);
                   localStorage.setItem("fbData", JSON.stringify(response.data));
				   localStorage.setItem("userData2", JSON.stringify(response.data));
                  let toast = this.toastCtrl.create({
                        message: response.data.msg,
                        duration: 3000,
                        position: 'middle'
                      });
                       toast.present();
                    this.navCtrl.push(TabsPage);
              } else {
                let toast = this.toastCtrl.create({
                  message: response.data.msg,
                  duration: 3000,
                  position: 'middle'
                });
                 toast.present();
				 //this.fb.logout();
				    this.fb.logout()
                    .then(function (responses) {
                     localStorage.clear();
             
                    })
              }
           }, err => { 
				Loader.dismiss();		   
              // alert(err);
           })
		 })
       })  
     }
     )
     .catch(e => console.log('Error logging into Facebook', e));
				  
				  
						}
					} 
		   }));
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
 
  gplus(){
	  
	  
this.diagnostic.isLocationEnabled().then(
 (isAvailable) => {
       
	if(isAvailable === true){
	this.geolocation.getCurrentPosition().then((resp) => {
	  console.log(resp);
	 console.log(resp.coords.latitude);
	 console.log(resp.coords.longitude);  
	 this.lat=resp.coords.latitude;
	 this.long=resp.coords.longitude;
	 localStorage.setItem('lat',this.lat);
	 localStorage.setItem('long',this.long);
		  let latLong = new google.maps.LatLng(this.lat,this.long); 
		  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{ 
			if (status == google.maps.GeocoderStatus.OK) {	   
			  if (results[1]) {
				  localStorage.setItem('location',results[1].formatted_address);
				  
				 	  	var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
		  });
      var token = localStorage.getItem('tokenId');
  this.googlePlus.login({
//    'webClientId': '426851906200-jfjqgbigosb2ogn6fbal5qco9g9330co.apps.googleusercontent.com',
//    'offline': true      
  }).then(res =>{
       
       // alert(JSON.stringify(res));
        var data_google = {
            google_id : res.userId,
            email : res.email,
            firstname: res.givenName,
            lastname: res.familyName,
            push_token: token 

          } 
         var url = this.dataprovider.base_url + 'users/googlelogin';
         let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
         let options = new RequestOptions({ headers: headers });
          var serialized_google = this.serializeObj(data_google);
          console.log(serialized_google);

		  Loader.present().then(() => {
          this.http.post(url, serialized_google, options).map(res => res.json()).subscribe(datarestgoogle => {
           Loader.dismiss();
         // alert(JSON.stringify(datarestgoogle));
          if(datarestgoogle.status === true){
            localStorage.setItem('userData',datarestgoogle.data.User.id);
            localStorage.setItem('googleData',JSON.stringify(datarestgoogle.data));
            localStorage.setItem("userData2", JSON.stringify(datarestgoogle.data));
                  let toast = this.toastCtrl.create({
                    message: datarestgoogle.msg,
                    duration: 3000
                  });
                  toast.present();
                 this.navCtrl.push(TabsPage);
          }else{
			Loader.dismiss();
            let toast = this.toastCtrl.create({
                    message: datarestgoogle.msg,
                    duration: 3000
                  });
                  toast.present();
                     this.googlePlus.logout()
                    .then(function (response) {
                     localStorage.clear();
             
                    })
          }
        })
  })
  },  
  error => {
            Loader.dismiss();
            //alert('error');
           // alert(JSON.stringify(error));
    
          }); 
				  
				  
						}
					} 
		   }));
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



signIn(signup2){



this.diagnostic.isLocationEnabled().then(
 (isAvailable) => {
       
	if(isAvailable === true){
	this.geolocation.getCurrentPosition().then((resp) => {
	  console.log(resp);
	 console.log(resp.coords.latitude);
	 console.log(resp.coords.longitude);  
	 this.lat=resp.coords.latitude;
	 this.long=resp.coords.longitude;
	 localStorage.setItem('lat',this.lat);
	 localStorage.setItem('long',this.long);
		  let latLong = new google.maps.LatLng(this.lat,this.long); 
		  this.geocoder.geocode({'latLng': latLong}, ((results, status)=>{ 
			if (status == google.maps.GeocoderStatus.OK) {	   
			  if (results[1]) {
				  localStorage.setItem('location',results[1].formatted_address);
				  
				          var token = localStorage.getItem('tokenId');
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/login';
				var postdata = {
          role:'customer',
          status:1,
          email:signup2.value.email,
          password:signup2.value.password,
		     push_token : token
				};
        
				console.log(" postdata" + JSON.stringify(postdata));
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
                    var Serialized = this.serializeObj(postdata);
					this.http.post(url, Serialized, options).map(res => res.json())
						.subscribe(data => {
							Loader.dismiss();
							if (data.status === true ) {
                   localStorage.setItem("userData2", JSON.stringify(data.data));
                   localStorage.setItem("userData", data.data.User.id);
                   localStorage.setItem("userData1",data.data.User.email);
                  console.log(data.data.User.email) ;

									this.showToast(data.msg);
									this.navCtrl.push(TabsPage);
									
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
					} 
		   }));
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



/*this.geolocation.getCurrentPosition().then((resp) => {
	alert('jj');
  console.log(resp);
 console.log(resp.coords.latitude);
 console.log(resp.coords.longitude);  
 this.lat=resp.coords.latitude;
 this.long=resp.coords.longitude;
 localStorage.setItem('lat',this.lat);
 localStorage.setItem('long',this.long);
 
 var token = localStorage.getItem('tokenId');
				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/login';
				var postdata = {
          role:'customer',
          status:1,
          email:signup2.value.email,
          password:signup2.value.password,
		     push_token : token
				};
        
				console.log(" postdata" + JSON.stringify(postdata));
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
                    var Serialized = this.serializeObj(postdata);
					this.http.post(url, Serialized, options).map(res => res.json())
						.subscribe(data => {
							Loader.dismiss();
							if (data.status === true ) {
                   localStorage.setItem("userData2", JSON.stringify(data.data));
                   localStorage.setItem("userData", data.data.User.id);
                   localStorage.setItem("userData1",data.data.User.email);
                  console.log(data.data.User.email) ;

									this.showToast(data.msg);
									this.navCtrl.push(TabsPage);
									
							} else {
								this.showToast(data.msg);
							}

						}, err => {
							console.log("Error");
							Loader.dismiss();
							console.log("Error!:", err);
						});
					})

}).catch((error) => {
  console.log('Error getting location', error);
  this.showToast('There is an error for getting location');
});	
	
	*/
					         
	
	

}
forgotpassword()

{
  this.navCtrl.push(ForgotpasswordPage);
}
gotandc(){
	this.navCtrl.push(TermsconditionPage);
}
}
