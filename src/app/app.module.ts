import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { AboutPage } from '../pages/about/about';
import { PrivacypolicyPage } from '../pages/privacypolicy/privacypolicy';
import { TermsconditionPage } from '../pages/termscondition/termscondition';
import { ProjectsPage } from '../pages/projects/projects';
import { ServicesPage } from '../pages/services/services';
import { LocationPage } from '../pages/location/location';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { AllchatPage } from '../pages/allchat/allchat';
import { TabsPage } from '../pages/tabs/tabs';
import { SignupPage } from '../pages/signup/signup';
import { SigninPage } from '../pages/signin/signin';
import { ProfilePage } from '../pages/profile/profile';
import { EditprofilePage } from '../pages/editprofile/editprofile';
import { ForgotpasswordPage } from '../pages/forgotpassword/forgotpassword';
import { ChangepasswordPage } from '../pages/changepassword/changepassword';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DataProvider } from '../providers/data/data';
import { ServicerepairPage } from '../pages/servicerepair/servicerepair';
import { AboutservicePage } from '../pages/aboutservice/aboutservice';
import { SchedulePage } from '../pages/schedule/schedule';
import { CategoryPage } from '../pages/category/category';
import { ConfirmPage } from '../pages/confirm/confirm';
import { DetailproviderPage } from '../pages/detailprovider/detailprovider';
import firebase from 'firebase'; // for facebook
import { Firebase } from '@ionic-native/firebase'; // push notification
//import { Facebook } from '@ionic-native/facebook';
import { Geolocation } from '@ionic-native/geolocation';
import { PaymentPage } from '../pages/payment/payment';
import { CongratulationsPage } from '../pages/congratulations/congratulations';
import { AddressPage } from '../pages/address/address';
import { ServiceproviderlistPage } from '../pages/serviceproviderlist/serviceproviderlist';
import { Stripe } from '@ionic-native/stripe';
import { ViewdetailPage } from '../pages/viewdetail/viewdetail';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
import { GooglePlus } from '@ionic-native/google-plus';
//import * as firebase from '@ionic-native/firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Ionic2RatingModule } from 'ionic2-rating';
import { Diagnostic } from '@ionic-native/diagnostic';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { OngoingNextPage } from '../pages/ongoing-next/ongoing-next';
import { ModalsPage } from '../pages/modals/modals';
import { ContactPage } from '../pages/contact/contact';
import { HelpPage } from '../pages/help/help';
import { SplashPage } from '../pages/splash/splash';
import { ModalscancelPage } from '../pages/modalscancel/modalscancel';
import { ModalsrepPage } from '../pages/modalsrep/modalsrep';
import { ServicedetailPage } from '../pages/servicedetail/servicedetail';
//import { ModaltxtPage } from '../pages/modaltxt/modaltxt';
import { StaticPage } from '../pages/static/static';
//import { AutoCompleteModule } from 'ionic2-auto-complete';
import { FeesPage } from '../pages/fees/fees';
import { RefundPage } from '../pages/refund/refund';
export const firebaseConfig = {
  apiKey: "AIzaSyABufatOKqb9vfAm1VsVbZTWB8D6m7dUU0",
  authDomain: "home-service-b5565.firebaseio.com",
  databaseURL: "https://home-service-b5565.firebaseio.com",
  projectId: "home-service-b5565",
  storageBucket: "",
  messagingSenderId: "212098956896"

};
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
	SignupPage,
	SigninPage,
  LocationPage,
  ProfilePage,
  EditprofilePage,
  ForgotpasswordPage,
  ChangepasswordPage,
  PrivacypolicyPage,
  TermsconditionPage,
  ProjectsPage,
  ServicesPage,
  ModalsPage,
  ServicerepairPage,
  AddressPage,
  AboutservicePage,
  SchedulePage,
  ServiceproviderlistPage,
  CategoryPage,
  ConfirmPage,
  PaymentPage,
  CongratulationsPage,
  ViewdetailPage,
  DetailproviderPage,
  ChatPage,
  AllchatPage,
  OngoingNextPage,
  ContactPage,
  HelpPage,
  SplashPage,
  ModalscancelPage,
  ModalsrepPage,
  StaticPage,
  ServicedetailPage,
  RefundPage,
//  ModaltxtPage,
FeesPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
  // AutoCompleteModule,
    Ionic2RatingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
	SignupPage,
	SigninPage,
  LocationPage,
  ProfilePage,
  EditprofilePage,
  ForgotpasswordPage,
  ChangepasswordPage,
  PrivacypolicyPage,
  TermsconditionPage,
  ModalsPage,
  ProjectsPage,
  ServicesPage,
  ServicerepairPage,
  AddressPage,
  AboutservicePage,
  SchedulePage,
  ServiceproviderlistPage,
  CategoryPage,
  ConfirmPage,
  PaymentPage,
  CongratulationsPage,
  ViewdetailPage,
  DetailproviderPage,
  ChatPage,
  AllchatPage,
  OngoingNextPage,
  ContactPage,
  HelpPage,
  SplashPage,
  ModalscancelPage,
  ModalsrepPage,
  ServicedetailPage,
  StaticPage,
  FeesPage,
  RefundPage
 // ModaltxtPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
	AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    Geolocation,
    NativeGeocoder,
    Facebook,
    GooglePlus,
    Firebase,
    Stripe,
    Camera,
	Diagnostic,
  InAppBrowser
    
  ]
})
export class AppModule {}
