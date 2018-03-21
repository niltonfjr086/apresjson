import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ListaPage } from '../../pages/lista/lista';
import { ApuracaoProvider } from '../../providers/ApuracaoProvider';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'list-expandable',
  templateUrl: 'list-expandable.html'
})
export class ListExpandableComponent {

  private listaFlutuanteMunicipio = [];
  private focus = false;

  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;

  constructor(private view: ViewController, public listaPage: ListaPage, public provider: ApuracaoProvider) {

  }

  limpar() {
    for (let b in this.provider._filter) {
      this.provider._filter[b] = null;
    }
    this.listaPage.situacao = "Filtro Limpo";
    this.listaPage.expand();

  }

  buscar() {
    this.listaPage.situacao = "Filtro Preenchido";
    this.listaPage.expand();
  }

  toggleFocus() {
    this.focus = !this.focus;

    if (this.focus) {
      this.provider._filter.municipio = "";
      this.search();
    } else {

    }

  }
  search() {
    this.listaFlutuanteMunicipio = this.provider.viewSelects['municipio']
      .filter((f, i, ff) => { return ff[i].toLowerCase().includes(this.provider._filter.municipio.toLowerCase()) });
  }
  seleciona(res) {
    this.focus = !this.focus;
    this.provider._filter.municipio = res;
  }

}
