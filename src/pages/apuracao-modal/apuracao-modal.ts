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

      console.log(provider.objectToFilter);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApuracaoModalPage');
  }

  public buscar() {
    console.log("buscando");

    this.provider.toFilterConsult()
      .then(
        () => {
          this.closeModal();
        }
      )
      .catch()
  }

  closeModal() {
    this.view.dismiss();
  }

}
