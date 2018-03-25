import { Component } from '@angular/core';
import { NavController, ModalController, ViewController } from 'ionic-angular';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';

import { ApuracaoProvider } from '../../providers/ApuracaoProvider';
import { AccordionMenuComponent } from '../../components/accordion-menu/accordion-menu';

@Component({
  selector: 'page-home',
  templateUrl: 'apuracao.html'
})
export class ApuracaoController {

  // private _accordionApuracao: AccordionMenuComponent;

  constructor(public navCtrl: NavController, private modalControler: ModalController,
    private view: ViewController, private provider: ApuracaoProvider) {

    // this._accordionApuracao = new AccordionMenuComponent(view, this, provider);
    // this._accordionApuracao = accordionApuracao;
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