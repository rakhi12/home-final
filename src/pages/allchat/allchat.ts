import { Component,ViewChild,ContentChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';
import { ChatPage } from "../chat/chat";
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-allchat',
  templateUrl: ' allchat.html',
})
export class  AllchatPage {
  @ViewChild(Content) content: Content;
  public param;
  public id;
  public udata:any = '';

  image_url: string;
  bottom: any;
  user_details: any;
  converstaion: any;
  show_send_button=0;
  file_id: string;
  showName: string;
  show: any;
  interval: any;
  myInput: any;
  user_name: any;
  other_user: any;
  image_path: any;
  myChat: any;
  Other_user_id: any;
  user_id: any;
  public data = '';
  fileSelected = 0;
  docUri = "";
  public custoID = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public dataprovider: DataProvider, public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController) {
//      this.param = navParams.get("customerId");
//      this.id = localStorage.getItem('user_id');
      this.custoID = JSON.parse(localStorage.getItem('userData'));
      console.log(this.custoID);
      this.All_message();
      this.getUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

//  back(){
//    this.navCtrl.push(ContactusPage);
//}
  showToast(text) {
		let toast = this.toastCtrl.create({
			message: text,
			duration: 5000,
			position: 'middle'
		});
		toast.present();
	}
    goBack() {
    this.navCtrl.pop();
  }
  serializeObj(obj) {

		var result = [];
		for (var property in obj)
			result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
		return result.join("&");
	}
  getUser() {
        let headers = new Headers();
         headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');

        var url = this.dataprovider.base_url + 'users/userinfo';
       let options = new RequestOptions({ headers: headers });
        var postdata = {
          uid:this.custoID
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
                                                                this.udata = data.data.User;
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

 All_message() {
    var url: string = this.dataprovider.base_url + 'users/allchat';
    var postdata = {
      myid:this.custoID,
    }
    console.log("postdata: "+ JSON.stringify(postdata));
    var serialized_data = this.serializeObj(postdata);
    console.log(serialized_data)
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    Loading.present().then(() => {
      this.http.post(url, serialized_data, options)
        .map(res => res.json())
        .subscribe((response) => {
          console.log(response)
          Loading.dismiss();
          if(response.status==true){
            this.myChat=response.data;
         // alert(this.myChat.length);
           this.converstaion=this.myChat.length;
           console.log(this.converstaion);
            console.log("bhumika");
          }else{
            this.myChat=response.data;
          }
        }) 
      })
    }

chatuser(uid){
    console.log(uid);
  this.navCtrl.push(ChatPage,{prid:uid});
}


}