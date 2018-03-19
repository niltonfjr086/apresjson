import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';
import { ApuracaoProvider } from '../../providers/ApuracaoProvider';


@IonicPage()
@Component({
  selector: 'page-apuracao-modal',
  templateUrl: 'apuracao-modal.html',
})
export class ApuracaoModalPage {


  constructor(public navCtrl: NavController, public navParams: NavParams
    , private view: ViewController, private provider: ApuracaoProvider) {

  }

  ionViewDidLoad() {

  }

  public limpar() {
    this.provider._filter = {};
  }

  public buscar() {
    this.provider.toBuild()
      .then(
        () => {
          this.closeModal();
        }
      )
      .catch((e) => { console.error(e) })
  }

  closeModal() {
    this.view.dismiss();
  }

}
