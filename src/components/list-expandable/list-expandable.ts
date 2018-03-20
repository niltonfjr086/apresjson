import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ListaPage } from '../../pages/lista/lista';
import { ApuracaoProvider } from '../../providers/ApuracaoProvider';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'list-expandable',
  templateUrl: 'list-expandable.html'
})
export class ListExpandableComponent {

  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;

  constructor(private view: ViewController, public listaPage: ListaPage, public provider: ApuracaoProvider) {

  }

  limpar() {
    for(let b in this.provider._filter){
      this.provider._filter[b] = null;
    }
    this.listaPage.situacao = "Filtro Limpo";
    this.listaPage.expand();

  }

  buscar() {
    this.listaPage.situacao = "Filtro Preenchido";
    this.listaPage.expand();
  }

}
