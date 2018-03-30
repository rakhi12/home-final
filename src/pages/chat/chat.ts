import { Component,ViewChild,ContentChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
//import { ContactusPage } from '../contactus/contactus';
import { ViewdetailPage } from '../viewdetail/viewdetail';
import { DataProvider } from '../../providers/data/data';
import { ToastController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
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
  public custoID :any = '';
  public providID:any ='';

  constructor(public navCtrl: NavController, public navParams: NavParams,
   public dataprovider: DataProvider, public http: Http,
    public toastCtrl: ToastController, public loadingCtrl:LoadingController) {
//      this.param = navParams.get("customerId");
//      this.id = localStorage.getItem('user_id');
       this.providID = navParams.get("prid");
       console.log(this.providID);
      this.custoID = JSON.parse(localStorage.getItem('userData'));
      console.log(this.custoID);
      this.All_message();
      this.getUser();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
//    this.bottom=setInterval(()=>{
//      this.content.scrollToBottom(300);
//  },1000)

  }
  ionViewWillLeave() {
    //clearInterval(this.interval);
    clearInterval(this.bottom);
    console.log("Looks like I'm about to leave :(");
  }
//  ionViewDidLoad() {
//    console.log('ionViewDidLoad ChatPage');
//  }

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
    goBack(pID) {
    this.navCtrl.pop();
  }
  
  
  
doRefresh(refresher) {
    console.log('Begin async operation', refresher);
      this.All_message();
      
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
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
//                     uid:this.param
                        uid:this.providID
				};
        console.log("postdata   :  " + JSON.stringify(postdata));
				var serialize = this.serializeObj(postdata);
				var Loader = this.loadingCtrl.create({  
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
     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    var Loading = this.loadingCtrl.create({
      spinner: 'bubbles',
      showBackdrop: false,
      cssClass: 'loader'
    });
    
    var url: string = this.dataprovider.base_url + 'users/otochat';
    var postdata = {
      myid:this.custoID,
      otherid:this.providID
    }
    console.log("postdata : "+ JSON.stringify(postdata));
    var serialized_data = this.serializeObj(postdata);
    console.log(serialized_data)
    
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
          }
        }) 
      })
    }
    sendmessage(mess){ 
      console.log(mess);
      this.myInput=mess
      let headers = new Headers();
      headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
      var url: string = this.dataprovider.base_url + 'users/insert_message';
      let options = new RequestOptions({ headers: headers });
//      var options = this.dataprovider.options;
      var postdata = {
        myid:this.custoID,
        otherid:this.providID,
        message:this.myInput,
        type:0
      }
      var serialized_data = this.serializeObj(postdata);
      console.log(serialized_data)
      var Loading = this.loadingCtrl.create({
        spinner: 'bubbles',
        showBackdrop: false,
        cssClass: 'loader'
      });
      Loading.present().then(() => {
        this.http.post(url, serialized_data, options)
          .map(res => res.json())
          .subscribe((response) => {
            //console.log(response)
            if(response.status==true){
              this.myInput = '';
              var upostdata = {
                myid:this.custoID,
                otherid:this.providID
              }
              var ourl: string = this.dataprovider.base_url + 'users/otochat';
              var serialized_data = this.serializeObj(upostdata);
              console.log(serialized_data)
                this.http.post(ourl, serialized_data, options)
                  .map(res => res.json())
                  .subscribe((responses) => {
                    console.log(responses)
                    Loading.dismiss();
                    if(responses.status==true){
                      this.bottom=setInterval(()=>{
                        this.content.scrollToBottom(1000);
                    },1000)
                   
                      this.myChat=responses.data;
                      this.converstaion=this.myChat.length;
   
                      console.log(this.other_user);
                      console.log("bhumika");
                    }
                  }) 
            }else{
              alert("something going wrong")
            }
          })
        })
 
  }




}