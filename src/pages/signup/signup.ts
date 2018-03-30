import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SigninPage } from '../signin/signin';
import { HomePage } from '../home/home';
import { Http, HttpModule, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TermsconditionPage } from '../termscondition/termscondition';
import { DataProvider } from '../../providers/data/data';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { LocationPage } from "../location/location";
import { Diagnostic } from '@ionic-native/diagnostic';
//import { AutoCompleteModule } from 'ionic2-auto-complete';
declare var google:any;
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers:[HttpModule,Diagnostic]  
})
export class SignupPage {
	name_google: any;
	private searchQuery: string = '';
	public countries;
	private items: any;
	public userfbdata:any = '';
	geocoder: any;
	public lat: any;
    public long: any;
	 public data={
	  firstname:'',
	  lastname:'',
	  email:'',
	  phone:'',
	  postal:'',
	  city:'',
	  address:'',
	  password:'',
	  cpassword:'',
	 
	  country: 'Kenya',
	  sel_country:'',
	  
  };
  public showSelected: any;
	
	public buttonClicked : boolean;
	public buttonClickedprofession : boolean;
	
	
	
	
  constructor(public navCtrl: NavController,
               public http: Http,
		       public toastCtrl: ToastController,
               public dataprovider: DataProvider,
		       public loadingCtrl: LoadingController,
		       public platform: Platform,
		       public alertCtrl: AlertController,
		       public app: App,public facebook: Facebook,
			   private fb: Facebook, 
			   private googlePlus: GooglePlus,
			   private diagnostic: Diagnostic,
			   public geolocation: Geolocation,
			   private nativeGeocoder: NativeGeocoder
			   ) {
    this.country();
	this.buttonClicked = false;
	this.buttonClickedprofession = false;
  }
  
ngOnInit() {

this.geocoder= new google.maps.Geocoder();      
       
}
  
  public Loading=this.loadingCtrl.create({
					content: 'Please wait...'
					
	});

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

  	country() {

				let headers = new Headers();
				headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });

				var url = this.dataprovider.base_url + 'countries/countries';
 
			
			//	var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
			//		content: ' ',
			//	});
				
			//	Loader.present().then(() => {

				

				this.http.get(url, options).map(res => res.json())
					.subscribe(data => {
			//			Loader.dismiss();

            console.log(data);

						if (data.status === true ) {
						 // this.items=data.data;
						  this.countries = data.data;
							console.log(data.data);
							//	this.showToast(data.response);
						}

					}, err => {

						console.log("Error");
				//		Loader.dismiss();
						console.log("Error!:", err);
					});
				// })

				

	}
  getItems(ev: any) {
    // Reset items back to all of the items
   // this.country();
	
    // set val to the value of the searchbar
    let val = ev.target.value;
console.log(ev.target.value);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.countries.filter((item) => {
		console.log(item); 
this.buttonClicked = true;		
        return (item.Country.country_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
		this.buttonClicked = false;
	}
  }
mcqAnswer(questionID){ 
console.log(questionID);  
this.data.country = this.data.sel_country;
console.log(this.data)
this.buttonClicked = false;
}

signUp(signup2){
	
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
        var url = this.dataprovider.base_url + 'users/registration';
				var postdata = {
         
					firstname: signup2.value.firstname,
					lastname: signup2.value.lastname,
          role:'user',
          status:1,
          email:signup2.value.email,
          phone:signup2.value.phone,
          country:signup2.value.country,
		  city:signup2.value.city,
          address:signup2.value.address,
          postalcode:signup2.value.postal,
          password:signup2.value.password,
		      push_token : token
				};
        
                console.log(" postdata" + JSON.stringify(postdata));
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

				
	if(signup2.value.terms == false){
		  let toast = this.toastCtrl.create({
            message: "Please accept terms and conditions",
            duration: 5000,
            position: 'middle'
          });
          toast.present();
	}else{
				

				if(signup2.value.password != signup2.value.cpassword){
					this.showToast('Both passwords are not matching!');
				}else{
					Loader.present().then(() => {
                                            var Serialized = this.serializeObj(postdata);
					this.http.post(url, Serialized, options).map(res => res.json())
						.subscribe(data => {
							Loader.dismiss();
							if (data.status === true ) {
									 localStorage.setItem("userData", data.data.User.id);
									 console.log(data.data.User.id);
									localStorage.setItem("userData2", JSON.stringify(data.data));
									// localStorage.setItem("user_image",imgUrl+data.data.profile_picture);
									// localStorage.setItem("wallet", data.data.wallet);
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
facebookLogin()  {
  alert("into ron fb");
  let permissions = new Array<string>();
  let nav = this.navCtrl;

  //the permissions your facebook app needs from the user
  permissions = ['public_profile', 'user_friends', 'email'];

  this.fb.login(permissions)
  .then((response) => {
    // alert("response");
    // alert(response);
      alert(JSON.stringify(response));
    let userId = response.authResponse.userID;
    let params = new Array<string>();

    //Getting name and gender properties
    this.fb.api("/me?fields=id,email,name,birthday,locale,age_range,gender,first_name,last_name,picture", params)
    .then((fduser) => {
      // alert("user");
      // alert(user);
       alert("rony"+JSON.stringify(fduser));
       fduser.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
      //now we have the users info, let's save it in the NativeStorage
      var postdata = {
        email: fduser.email,
        name: fduser.name,
        fbId: fduser.id,
        image: fduser.picture,
        phone: '',
        role: 'user',
      }

        alert(JSON.stringify(postdata));
      //console.log(postdata);
       // alert("kkk");
      var serialized_all = this.serializeObj(postdata);
      var url = this.dataprovider.base_url + 'users/fblogin';
        alert("hisjjsfjjasf");
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
      let options = new RequestOptions({ headers: headers });
      this.http.post(url, serialized_all, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response);
          alert(JSON.stringify(response));
         var res1 = JSON.stringify(response);
         var sta = JSON.parse(res1);
           // alert(response);
           this.navCtrl.push(LocationPage);
           if (response.status == true) { 
                localStorage.setItem("userData", response.data.User.id);
               //  localStorage.setItem("fbuserData", response.data.User.id);
                alert(response.data.User.id);
                localStorage.setItem("fbData", response.data.User);
               let toast = this.toastCtrl.create({
                     message: response.data.user.msg,
                     duration: 3000,
                     position: 'middle'
                   });
                    toast.present();
                 
           } else {
             let toast = this.toastCtrl.create({
               message: response.data.user.msg,
               duration: 3000,
               position: 'middle'
             });
              toast.present();
           }
        }, err => {
             // alert("bb");
           // alert(err);
        })
    })  
  }
  )
  .catch(e => console.log('Error logging into Facebook', e));



 
   }


   google_plus(){
    alert("naveen");
    this.googlePlus.login({
      // 'webClientId': '795241965174-ie2q7q13q634k536t4iua2je7pct20cn.apps.googleusercontent.com',
      //   'offline': true
    })
    .then(res =>{
      console.log(res);
      alert("naveen1");
      alert(JSON.stringify(res));
      //  alert(res.displayName);
      //  alert(JSON.stringify(res.idToken));
  
      // this.name_google = res.displayName;
      //  alert('googlename');
      //  alert(JSON.stringify(this.name_google));
      // firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
      // .then( success => {
        
      //      alert("Firebase success: " + JSON.stringify(success));
      //      this.google_data = success;
  
      var data_google = {
               //username : res.displayName,
             // name : this.name_google,
              google_id : res.userId,
              // image : res.imageURL,
              email : res.email,
              firstname: res.givenName,
              lastname: res.familyName
  
            }
             alert('google data');
             alert(JSON.stringify(data_google));
               
           var serialized_all = this.serializeObj(data_google);
           var url = this.dataprovider.base_url + 'users/googlelogin';
           let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
           let options = new RequestOptions({ headers: headers });
  
  
            // var url: string =  this.dataprovider.base_url + this.dataprovider.GOOGLE_API;
  
  
            var serialized_google = this.serializeObj(data_google);
            console.log(serialized_google);
            this.http.post(url, serialized_google, options).map(res => res.json()).subscribe(datarestgoogle => {
            this.Loading.dismiss();
          
              alert('api');
             alert(JSON.stringify(datarestgoogle));
            // alert(datarestgoogle);
            if(datarestgoogle.status == true){
              alert(JSON.stringify(datarestgoogle));
  
              localStorage.setItem('userData',datarestgoogle.data.User.id);
              //  localStorage.setItem('googleuserData',datarestgoogle.data.User.id);
               localStorage.setItem('googleData',datarestgoogle.data.user);
  
                      let toast = this.toastCtrl.create({
                      message: datarestgoogle.msg,
                      duration: 3000
                    });
                    toast.present();
  
                        this.navCtrl.push(LocationPage);
            }else{
              let toast = this.toastCtrl.create({
                      message: datarestgoogle.msg,
                      duration: 3000
                    });
                    toast.present();
                         this.googlePlus.logout()
                      .then(function (response) {
                    localStorage.removeItem("GOOGLEUSERID");
                    localStorage.clear();
               
                      })
            }
          })
    },  
    error => {
              this.Loading.dismiss();
              alert('error');
              alert(JSON.stringify(error));
      
            });
          // }
          // , error => {
          //  this.Loading.dismiss();
          //  alert('error');
          //   alert(JSON.stringify(error));
          // });
  

}

  to_signin(){
    this.navCtrl.push(SigninPage);
  }
tc(){
	this.navCtrl.push(TermsconditionPage);
}
}
