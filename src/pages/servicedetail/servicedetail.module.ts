import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ServicedetailPage } from '../servicedetail/servicedetail';

@NgModule({
  declarations: [
    ServicedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ServicedetailPage),
  ],
})
export class ServicedetailPageModule {}
