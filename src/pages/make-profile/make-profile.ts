import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Profile } from '../../models/profile';
import { AngularFireDatabase } from 'angularfire2/database';
import { WelcomePage } from '../welcome/welcome';
import { FoodhomePage } from '../foodhome/foodhome';
import { ShelterhomePage } from '../shelterhome/shelterhome';
import { DriverhomePage } from '../driverhome/driverhome';

@IonicPage()
@Component({
  selector: 'page-make-profile',
  templateUrl: 'make-profile.html',
})
export class MakeProfilePage {

  profile = {} as Profile;

  constructor(private afAuth: AngularFireAuth, private afDatabase:AngularFireDatabase,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  submit(bussinessType){
    if(bussinessType == "food"){
      this.navCtrl.push(FoodhomePage);

    }

    else if(bussinessType == "shelter" ){
      this.navCtrl.push(ShelterhomePage);
    }
    else if(bussinessType == "driver" ){
      this.navCtrl.push(DriverhomePage);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MakeProfilePage');
  }

  

}
