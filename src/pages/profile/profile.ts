import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { SigninPage } from '../signin/signin';
import { EditprofilePage } from '../editprofile/editprofile';
import { Http, Headers, RequestOptions, URLSearchParams, QueryEncoder } from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { AlertController, Nav, Platform } from "ionic-angular";
import { App  } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { HelpPage } from '../help/help';
import { PrivacypolicyPage } from '../privacypolicy/privacypolicy';
import { TermsconditionPage } from '../termscondition/termscondition';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
	googledata: string;
	simpledata: string;
	fbdata: string;
public img='';
public name='';
public contact='';
public user;
public rate;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http: Http,
		public toastCtrl: ToastController,
    public dataprovider: DataProvider,
		public loadingCtrl: LoadingController,
		public platform: Platform,
		public alertCtrl: AlertController,
		public app: App,
		private fb: Facebook, 
		private googlePlus: GooglePlus,
  ) {

		this.fbdata=localStorage.getItem('fbData');
		this.googledata=localStorage.getItem('googleData');
		this.simpledata=localStorage.getItem('userData2')
		this.getprofile();
	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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

    getprofile(){
				var userInfo =localStorage.getItem('userData');
				//alert(userInfo);
				let headers = new Headers();
				headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
				let options = new RequestOptions({ headers: headers });
        var url = this.dataprovider.base_url + 'users/userinfo';
				
        var postdata = {
          uid:userInfo
				};

				// alert('profile'+JSON.stringify(postdata));
				var serialized_all = this.serializeObj(postdata);
				var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
				});

					Loader.present().then(() => {
					this.http.post(url, serialized_all, options).map(res => res.json())
						.subscribe(data => {
              
							Loader.dismiss();
              // alert(JSON.stringify(data));
							if (data.isSucess == "true" ) {
               
									this.img = data.data.User.image;
								  this.name = data.data.User.firstname+' '+data.data.User.lastname;
                  this.contact = data.data.User.phonenumber;
				  this.rate = data.data.User.avg_rating;
							} else {
								this.showToast(data.msg);
							}

						}, err => {
							
							Loader.dismiss();
							alert(JSON.stringify(err));
							
						});
					})
			
}

aboutus(){
	this.navCtrl.push(AboutPage);
}

policy(){
	this.navCtrl.push(PrivacypolicyPage);
}
help(){
	this.navCtrl.push(HelpPage);
}
terms(){
	this.navCtrl.push(TermsconditionPage);
}

editprofile()
{

	this.navCtrl.push(EditprofilePage);
}

changepwd(){
  this.navCtrl.push(ChangepasswordPage);
}

logouted(){
	//alert('1');

 if(this.fbdata!=undefined){
		this.fb.logout().then((sucess) => {
			//alert('3');
					localStorage.removeItem('userData2');
		localStorage.removeItem('userData');
		localStorage.removeItem('provider_already_selected');
		localStorage.removeItem('providerType');
			this.app.getRootNav().setRoot(SigninPage);
                           this.showToast("You have been Logged Out");
		 }).catch((error) => {
			// alert(JSON.stringify(error));
				console.log(error)
		 })
	}else if(this.googledata!=undefined)
	{
		this.googlePlus.logout().then(
			(success) => {
				//alert('4');
					console.log('GOOGLE+: logout DONE', success);
                    		localStorage.removeItem('userData2');
		localStorage.removeItem('userData');
		localStorage.removeItem('provider_already_selected');
		localStorage.removeItem('providerType');                    
					this.app.getRootNav().setRoot(SigninPage);
                    this.showToast("You have been Logged Out");
			},
			(failure) => {
				//alert(JSON.stringify(failure));
					console.log('GOOGLE+: logout FAILED', failure);
			}
	);
	}else{
		//alert('2');
		localStorage.removeItem('userData2');
		localStorage.removeItem('userData');
		localStorage.removeItem('provider_already_selected');
		localStorage.removeItem('providerType');
		this.app.getRootNav().setRoot(SigninPage);
        this.showToast("You have been Logged Out");
	}
    
	}


	}
  

	


