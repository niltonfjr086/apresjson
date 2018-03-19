import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';

import { ApuracaoProvider } from '../../providers/ApuracaoProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'apuracao.html'
})
export class ApuracaoController {

  constructor(public navCtrl: NavController , private modalControler: ModalController, private provider: ApuracaoProvider) {

  }

  openModal() {

    this.provider.toBuild()
      .then(
        () => {
          const filtroModal = this.modalControler.create('ApuracaoModalPage');
          filtroModal.present();
        }
      );

  }



}