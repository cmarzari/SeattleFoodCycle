import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MakeProfilePage } from './make-profile';

@NgModule({
  declarations: [
    MakeProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MakeProfilePage),
  ],
})
export class MakeProfilePageModule {}
