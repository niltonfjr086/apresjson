import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApuracaoProvider } from '../../providers/ApuracaoProvider';

@Component({
  selector: 'page-about',
  templateUrl: 'lista.html'
})
export class ListaPage {

  private _situacao: string = "Selecione parâmetros do filtro";
  private _isExpanded: boolean = false;

  constructor(public navCtrl: NavController, public provider: ApuracaoProvider) {

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
