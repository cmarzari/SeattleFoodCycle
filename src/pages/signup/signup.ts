import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth";
import { MakeProfilePage } from '../make-profile/make-profile';



@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

    user = {} as User;

  constructor( private afAuth: AngularFireAuth,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  async signup(user:User){
   const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);

   if(result){
    this.navCtrl.push(MakeProfilePage);
    }
 

  }

}
