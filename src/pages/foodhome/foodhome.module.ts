import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FoodhomePage } from './foodhome';

@NgModule({
  declarations: [
    FoodhomePage,
  ],
  imports: [
    IonicPageModule.forChild(FoodhomePage),
  ],
})
export class FoodhomePageModule {}
