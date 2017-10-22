import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DriverhomePage } from './driverhome';

@NgModule({
  declarations: [
    DriverhomePage,
  ],
  imports: [
    IonicPageModule.forChild(DriverhomePage),
  ],
})
export class DriverhomePageModule {}
