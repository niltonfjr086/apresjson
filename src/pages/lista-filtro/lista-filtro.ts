import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Filtro } from '../../providers/basejson/filtrojson';
import { BasejsonProvider } from '../../providers/basejson/basejson';

@IonicPage()
@Component({
  selector: 'page-lista-filtro',
  templateUrl: 'lista-filtro.html',
})
export class ListaFiltroPage {

  private filtrojson: Filtro;

  private nomePrograma: string;
  private ano: number;
  private municipio: string;

  constructor(public navCtrl: NavController, private basejson: BasejsonProvider,
    private navParams: NavParams, private view: ViewController) {
  }

  public closeModal() {
    this.view.dismiss();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFiltroPage');
  }

  public montarPeloFiltro() {
    this.montarFiltro();
    console.log(this.filtrojson.valorBusca);
    console.log(this.filtrojson.campoBusca)
    this.basejson.listarPorFiltro(this.filtrojson).then(
      
      () => {
        this.closeModal();
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
