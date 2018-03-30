import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController, Nav, App} from 'ionic-angular';
import { TabsPage } from '../pages/tabs/tabs';
import { LocationPage } from '../pages/location/location';
import { SignupPage } from '../pages/signup/signup';
import { ChatPage } from '../pages/chat/chat';
import { AllchatPage } from '../pages/allchat/allchat';
import { SigninPage } from '../pages/signin/signin';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { Geolocation } from '@ionic-native/geolocation';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { TermsconditionPage } from '../pages/termscondition/termscondition';
import { ProjectsPage } from '../pages/projects/projects';
import { ServicesPage } from '../pages/services/services';
import { ServicerepairPage } from '../pages/servicerepair/servicerepair';
import { AddressPage } from '../pages/address/address';
import { AboutservicePage } from '../pages/aboutservice/aboutservice';
import { SchedulePage } from '../pages/schedule/schedule';
import { CategoryPage } from '../pages/category/category';
import { ConfirmPage } from '../pages/confirm/confirm';
import { PaymentPage } from '../pages/payment/payment';
import { CongratulationsPage } from '../pages/congratulations/congratulations';
import { ViewdetailPage } from '../pages/viewdetail/viewdetail';
import { ServiceproviderlistPage } from '../pages/serviceproviderlist/serviceproviderlist';
import { OngoingNextPage } from '../pages/ongoing-next/ongoing-next';
import { ContactPage } from '../pages/contact/contact';
import { HelpPage } from '../pages/help/help';
import { DetailproviderPage } from '../pages/detailprovider/detailprovider';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ModalsPage } from '../pages/modals/modals';
import { SplashPage } from '../pages/splash/splash';
import { ModalscancelPage } from '../pages/modalscancel/modalscancel';
import { ModalsrepPage } from '../pages/modalsrep/modalsrep';
import { ServicedetailPage } from '../pages/servicedetail/servicedetail';
import { StaticPage } from '../pages/static/static';
import { RefundPage } from '../pages/refund/refund';
//import { ModaltxtPage } from '../pages/modaltxt/modaltxt';
import { FeesPage } from '../pages/fees/fees';
//import * as firebase from '@ionic-native/firebase';
import firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase'; // push notification
 import { AngularFireModule } from 'angularfire2';
 import { AngularFireAuth } from 'angularfire2/auth';
import { Stripe } from '@ionic-native/stripe';

export class NotificationModel {
    public body: string;
    public title: string;
    public tap: boolean
}
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage;
  public user = '';
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public app: App, public firebase1 : Firebase,public alertCtrl: AlertController) {
   
   	 this.initializeApp();
   
     firebase.initializeApp({
  apiKey: "AIzaSyABufatOKqb9vfAm1VsVbZTWB8D6m7dUU0",
  authDomain: "home-service-b5565.firebaseio.com",
  databaseURL: "https://home-service-b5565.firebaseio.com",
  projectId: "home-service-b5565",
  storageBucket: "",
  messagingSenderId: "212098956896"
       });
   
  }

	initializeApp() {  
   this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      var email =	localStorage.getItem('userData');
			if(email != null){
        this.rootPage =  TabsPage;
			}else{
			this.rootPage =	SplashPage;
			}
      this.statusBar.styleDefault();
      this.splashScreen.hide();
       this.firebase1.grantPermission();

 			if (this.platform.is('cordova')) {
				//Initialize push notification feature
 				//alert("hiiii"+this.platform)
 				if(this.platform.is('android')){
					//alert("android"+this.platform)
 					this.initializeFireBaseAndroid()
 				}else{
 				//	alert("ios"+this.platform)
 					//this.initializeFireBaseIos();
 				}
				//this.platform.is('android') ? this.initializeFireBaseAndroid() : this.initializeFireBaseIos();
 			} else {
			//	alert(this.platform)
 				console.log('Push notifications are not enabled since this is not a real device');
			}


     });
 	}

 private initializeFireBaseAndroid(): Promise<any> {
 		return this.firebase1.getToken()
 			.catch(error => console.error('Error getting token', error))
 			.then(token => {

				//alert(`The token is ${token}`);

				Promise.all([
 					this.firebase1.subscribe('firebase-app'), 	// Subscribe to the entire app
					this.firebase1.subscribe('android'),			// Subscribe to android users topic
					this.firebase1.subscribe('userid-1') 		// Subscribe using the user id (hardcoded in this example)
				]).then((result) => {
					if (result[0]) console.log(`Subscribed to FirebaseDemo`);
					if (result[1]) console.log(`Subscribed to Android`);
 					if (result[2]) console.log(`Subscribed as User`);

 					this.subscribeToPushNotificationEvents();
 				});
			});
 	}

 	private saveToken(token: any): Promise<any> {
		// Send the token to the server
 		//alert('Sending token to the server...');
 		return Promise.resolve(true);
	}

	private subscribeToPushNotificationEvents(): void {
	//	alert("hello everyone");
		// Handle token refresh
		this.firebase1.onTokenRefresh().subscribe(
			token => {
				
				//alert(`The new token is ${token}`);
        localStorage.setItem('tokenId', token);
				

			},
			error => {
				
				console.error('Error refreshing token', error);
			});

		// Handle incoming notifications
		
		this.firebase1.onNotificationOpen().subscribe(
			(notification1: NotificationModel) => {


if(notification1.tap){
	//alert(notification1.title);
if(notification1.title != ' '){
	localStorage.setItem('setActiveTab', '1');
if(notification1.title == 'The Service provider has accepted to discuss the job you are offering.'){
	localStorage.setItem('setActiveTabs', 'all');
}else{
	localStorage.removeItem('setActiveTabs');
}
	}




this.app.getRootNav().setRoot(TabsPage);
//this.navCtrl.push(ProjectsPage);
}
		// 		!notification1.tap	?  console.log('The user was using the app when the notification arrived...') 
        // : console.log('The app was closed when the notification arrived...')
					// alert starts
				

				let notificationAlert = this.alertCtrl.create({
					title: '<center>' + notification1.title + '</center>',
					message: notification1.body,
					buttons: [{
							text: 'Close',
							role: 'cancel'
						}, {
							text: 'View',
							handler: () => {
								//TODO: Your logic here
								this.user = localStorage.getItem('userData');
								//alert('user' + this.user)
								if (this.user == undefined || this.user == null) {
									this.app.getRootNav().setRoot(SigninPage);
								} else {
									
									this.app.getRootNav().setRoot(TabsPage, { message: notification1 }); //this.nav.setRoot(this.pages2.SchedulePage);
								    //this.navCtrl.push(ProjectsPage, { message: notification1 });
								}

							}
						}]
				});
				if(notification1.title != undefined){
					if(notification1.title != ' '){
						localStorage.setItem('setActiveTab', '1');
						if(notification1.title == 'The Service provider has accepted to discuss the job you are offering.'){
							localStorage.setItem('setActiveTabs', 'all');
						}else{
							localStorage.removeItem('setActiveTabs');
						}
					}

					notificationAlert.present();
				}else{
					//alert('title undefined');
				}
			},
			error => {
				console.error('Error getting the notification', error);
       			 alert('err -> ' + JSON.stringify(error))
			}), (err)=>{

				//alert('could not subscribe to push');
				alert(JSON.stringify(err));
			};
			
	}
}
