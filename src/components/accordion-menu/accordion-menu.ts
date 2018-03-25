import { Component, ViewChild, ElementRef, Input } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { ApuracaoProvider } from '../../providers/ApuracaoProvider';
import { ApuracaoController } from '../../pages/apuracao/ApuracaoController';
import { GenericProvider } from '../../providers/GenericProvider';

@Component({
  selector: 'accordion-menu',
  templateUrl: 'accordion-menu.html'
})
export class AccordionMenuComponent<T> {

  // public _provider: any = {
  //   _filter: {}, _viewList: [] = [],
  //   _viewSelects: {'nom_programa':['ESTE']}, _viewSumReduces: {}
  // };
  // private _provider: GenericProvider<any>;
  public _provider: any;
  private _listaFlutuanteMunicipio = [];
  private _focus: boolean = false;

  private _situacao: string = "Filtro Limpo";

  @ViewChild('expandWrapper', { read: ElementRef }) expandWrapper;
  @Input('expanded') expanded;

  constructor(provider: ApuracaoProvider) {
    this._provider = provider;
  }


  // public get provider(): any {
  //   return this._provider;
  // }

  // public set provider(value: any) {
  //   this._provider = value;
  // }



  public get focus(): boolean {
    return this._focus;
  }

  public set focus(value: boolean) {
    this._focus = value;
  }



  public expand() {
    this._provider.toBuild()
      .then(() => { this._focus = !this._focus; })
      .catch()
  }

  limpar() {
    for (let b in this._provider._filter) {
      this._provider._filter[b] = null;
    }
    this._situacao = "Filtro Limpo";
    this.expand();
  }

  buscar() {
    this._situacao = "Filtro Preenchido";
    this.expand();
  }

  toggleFocus() {
    this._focus = !this._focus;
    if (this._focus) {
      this._provider._filter.municipio = "";
      this.search();
    } else {
    }

  }
  search() {
    this._listaFlutuanteMunicipio = this._provider.viewSelects['municipio']
      .filter((f, i, ff) => { return ff[i].toLowerCase().includes(this._provider._filter.municipio.toLowerCase()) });
  }

  seleciona(res) {
    this._focus = !this._focus;
    this._provider._filter.municipio = res;
  }

}
