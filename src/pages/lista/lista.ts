import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { ApuracaoProvider } from '../../providers/ApuracaoProvider';
import { AccordionMenuComponent } from '../../components/accordion-menu/accordion-menu';

@Component({
  selector: 'page-about',
  templateUrl: 'lista.html'
})
export class ListaPage {

  private _situacao: string = "Selecione parâmetros do filtro";
  private _isExpanded: boolean = false;

  private _accordionListaPage: AccordionMenuComponent<ApuracaoProvider>;

  constructor(public view: ViewController, public navCtrl: NavController, public provider: ApuracaoProvider) {

    this._accordionListaPage = new AccordionMenuComponent(provider);
    // this._accordionListaPage._provider = provider;

  }

  public get situacao(): string {
    return this._situacao;
  }

  public set situacao(value: string) {
    this._situacao = value;
  }

  public expand() {
    this.provider.toBuild()
      .then(() => { this._isExpanded = !this._isExpanded; })
      .catch()
  }





}
