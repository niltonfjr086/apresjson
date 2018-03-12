import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ApuracaoModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apuracao-modal',
  templateUrl: 'apuracao-modal.html',
})
export class ApuracaoModalPage {


  constructor(public navCtrl: NavController, public navParams: NavParams
  , private view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApuracaoModalPage');
  }

  closeModal() {
    this.view.dismiss();
  }

}
