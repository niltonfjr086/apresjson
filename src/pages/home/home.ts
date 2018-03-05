import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';

import { BasejsonProvider } from '../../providers/basejson/basejson';
import { Filtro } from '../../providers/basejson/filtrojson';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private busca;

  private lista: ProgramaOcorrencia[];
  private selecionado: number = 0;

  public lala='teste';

  private filtrojson: Filtro;
  private listaFiltrada: ProgramaOcorrencia[];

  private nomePrograma: string;
  private ano: number;
  private municipio: string;

  constructor(public navCtrl: NavController, private basejson: BasejsonProvider) {

    this.montarTabelaInicial();

  }

  protected montarTabelaInicial() {
    this.basejson.listarTodos().then(
      (dados) => { this.lista = <ProgramaOcorrencia[]>dados; console.log(this.lista);  }
    );
  }

  public montarTabelaPeloNome(busca: string) {
    this.basejson.listarPorNome(busca).then(
      (dadosFiltrados) => { this.listaFiltrada = dadosFiltrados; console.log(this.listaFiltrada) }
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

  public montarTabelaConsultada() {
    this.montarFiltro();

    this.basejson.listarPorFiltro(this.filtrojson).then(
      (dadosFiltrados) => { this.listaFiltrada = dadosFiltrados; console.log(this.listaFiltrada) }
    );
  }

  public get $lista(): ProgramaOcorrencia[] {
    return this.lista;
  }

  public set $lista(value: ProgramaOcorrencia[]) {
    this.lista = value;
  }

  public get $selecionado(): number {
    return this.selecionado;
  }

  public set $selecionado(value: number) {
    this.selecionado = value;
  }


}