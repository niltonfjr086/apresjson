import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';

import { BasejsonProvider } from '../../providers/basejson/basejson';
import { Filtro } from '../../providers/basejson/filtrojson';
import { ApuracaoProvider } from '../../providers/ApuracaoProvider';

@Component({
  selector: 'page-home',
  templateUrl: 'apuracao.html'
})
export class ApuracaoController {

  constructor(public navCtrl: NavController, private basejson: BasejsonProvider
    , private modalControler: ModalController, private provider: ApuracaoProvider) {
    // this.montarTabelaInicial();

    // this.provider.listAll().then(
    //   () => {
    //     this.provider.toFilter();
    //   }
    // );

    this.provider.toConsult2();
  }

  // private montarTabelaInicial() {
  //   this.basejson.listarTodos().then(
  //     () => { console.log(this.basejson.lista); }
  //   );
  // }

  openModal() {
    // this.basejson.listarTodos().then(
    //   () => {
    //     const filtroModal = this.modalControler.create('ListaFiltroPage');
    //     filtroModal.present();
    //   }
    // );

    const filtroModal = this.modalControler.create('ApuracaoModalPage');
    filtroModal.present();
  }



}