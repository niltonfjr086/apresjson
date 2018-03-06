import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the ListaFiltroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-filtro',
  templateUrl: 'lista-filtro.html',
})
export class ListaFiltroPage {

  constructor(public navCtrl: NavController, private navParams: NavParams, private view: ViewController) {
  }

  closeModal() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFiltroPage');
  }

}
