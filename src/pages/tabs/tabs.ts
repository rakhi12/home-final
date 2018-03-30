import { Component } from '@angular/core';

import { ProjectsPage } from '../projects/projects';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';
import { AllchatPage } from '../allchat/allchat';


@Component({
selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ProjectsPage;
  tab3Root = ProfilePage;
  tab4Root = AllchatPage;
selectedindex: any;
  constructor() {
	  var t = localStorage.getItem('setActiveTab');
	  if(t != ''){
		 this.selectedindex = localStorage.getItem('setActiveTab'); 
	  }else{
		  this.selectedindex = '0';
	  }
  
  }
}




