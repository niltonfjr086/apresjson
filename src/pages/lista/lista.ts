import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { BasejsonProvider } from '../../providers/basejson/basejson';

@Component({
  selector: 'page-about',
  templateUrl: 'lista.html'
})
export class ListaPage {

  constructor(private modal: ModalController, public navCtrl: NavController, public basejson: BasejsonProvider) {

  }

  openModal() {
    this.basejson.listarTodos().then(
      () => {
        const filtroModal = this.modal.create('ListaFiltroPage');
        filtroModal.present();
      }
    );
  }

}
