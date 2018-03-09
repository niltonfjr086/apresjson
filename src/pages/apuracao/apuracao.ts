import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';

import { BasejsonProvider } from '../../providers/basejson/basejson';
import { Filtro } from '../../providers/basejson/filtrojson';

@Component({
  selector: 'page-home',
  templateUrl: 'apuracao.html'
})
export class ApuracaoPage {

  constructor(public navCtrl: NavController, private basejson: BasejsonProvider) {
    // this.montarTabelaInicial();
  }

  // private montarTabelaInicial() {
  //   this.basejson.listarTodos().then(
  //     () => { console.log(this.basejson.lista); }
  //   );
  // }

  

}