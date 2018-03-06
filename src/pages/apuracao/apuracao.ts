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

  private filtrojson: Filtro;

  private nomePrograma: string;
  private ano: number;
  private municipio: string;


  constructor(public navCtrl: NavController, private basejson: BasejsonProvider) {
    // this.montarTabelaInicial();
  }

  private montarTabelaInicial() {
    this.basejson.listarTodos().then(
      () => { console.log(this.basejson.lista); }
    );
  }

  public montarPeloFiltro() {
    this.montarFiltro();
    console.log(this.filtrojson.valorBusca);
    console.log(this.filtrojson.campoBusca)
    this.basejson.listarPorFiltro(this.filtrojson).then(
      () => {
        console.log(this.basejson.lista);
      }
    );
  }


  private montarFiltro() {
    this.filtrojson = new Filtro();

    if (this.nomePrograma) {
      this.filtrojson.campoBusca.push('nom_programa');
      this.filtrojson.valorBusca.push(this.nomePrograma);
    }
    if (this.ano) {
      this.filtrojson.campoBusca.push('ano');
      this.filtrojson.valorBusca.push(this.ano);
    }
    if (this.municipio) {
      this.filtrojson.campoBusca.push('municipio');
      this.filtrojson.valorBusca.push(this.municipio);
    }
  }

}