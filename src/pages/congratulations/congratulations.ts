import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { ProjectsPage } from '../projects/projects';
import { TabsPage } from '../tabs/tabs';
 
/**
 * Generated class for the CongratulationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-congratulations',
  templateUrl: 'congratulations.html',
})
export class CongratulationsPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public app: App){
      //this.user_id = localStorage.getItem("userData");
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad CongratulationsPage');
  }
  gotohome(){
	  this.app.getRootNav().setRoot(ProjectsPage);
  }
}
