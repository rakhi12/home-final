import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import 'rxjs/add/operator/map';
import { HttpModule, Http, RequestOptions, Headers } from '@angular/http';


/**
 * Generated class for the TermsofusePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-servicedetail',
  templateUrl: 'servicedetail.html',
  providers: [HttpModule, DataProvider]
})
export class ServicedetailPage {
     desc: any;
     title: any;
	 param: any;
	 public items: any = '';
	 public itemsc: any = '';
	 public itemss: any = '';

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
			  public loadingCtrl:LoadingController,
			  public http: Http, 
			  public dataprovider: DataProvider,
              public toastCtrl: ToastController){
    this.param = navParams.get("getserviceid");  
	this.getserviceinfo();	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsofusePage');
  }
back(){
	this.navCtrl.pop();
  }  
       
serializeObj(obj){
        var result = [];
		for (var property in obj)
		result.push(encodeURIComponent(property) + "=" + encodeURIComponent(obj[property]));
		return result.join("&");
	}
	
getserviceinfo(){
    var Loader = this.loadingCtrl.create({    //createding a custom loader which can be used later
					content: ' ',
		});
		let headers = new Headers();          
		headers.append('Content-Type',  'application/x-www-form-urlencoded;charset=utf-8');
        let options = new RequestOptions({ headers: headers });

    var data_form = {
      sid: this.param,
    }
    var Serialized = this.serializeObj(data_form);
	console.log(Serialized);
    Loader.present().then(() => {
    this.http.post(this.dataprovider.base_url + 'services/getservicebyid', Serialized, options)
      .map(res => res.json())
      .subscribe(sdata => {
       Loader.dismiss();
       console.log(sdata);
        if (sdata.status === true) {
          this.items = sdata.data.Service;
          this.itemsc = sdata.data.Category;
		  this.itemss = sdata.data.SubCategory;
        }
        else{
          this.items = sdata.data;
        }
      }, error => {
        Loader.dismiss();
      });
      })
}
}
