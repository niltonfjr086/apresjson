import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';
import { Filtro } from './filtrojson';

@Injectable()
export class BasejsonProvider {

  private _lista: ProgramaOcorrencia[];
  private _listaNomes: string[] = [];
  private _listaMunicipios: string[] = [];

  constructor(private http: HttpClient) {
  }

  public get lista(): ProgramaOcorrencia[] {
    return this._lista;
  }


  listarTodos() {
    return new Promise(resolve => {
      this.http.get('../../assets/base-json/dados.json').subscribe(
        (retorno) => {
          resolve(retorno);
        }, err => {
          console.log(err);
        });
    })
      .then((retorno) => {
        this._lista = <ProgramaOcorrencia[]>retorno;

        if (this._listaNomes.length === 0 || this._listaMunicipios.length === 0) {
          this.carregaSelectsView();
        }

      })
      .catch((e) => { console.error(e) });
  }

  carregaSelectsView() {
    this._lista.forEach(element => {
      if (this._listaNomes.indexOf(element.nom_programa) < 0) {
        this._listaNomes.push(element.nom_programa);
      }
      if (this._listaMunicipios.indexOf(element.municipio) < 0) {
        this._listaMunicipios.push(element.municipio);
      }
    });
  }

  listarPorNome(busca: string): void {
    let listaFiltrada: ProgramaOcorrencia[] = [];

    this._lista.filter(
      (item) => {
        if (item.nom_programa.toLowerCase().includes(busca.toLowerCase())) {
          listaFiltrada.push(item);
        }
      }
    );
    this._lista = listaFiltrada;
  }

  listarPorAno(busca: number): void {
    let listaFiltrada: ProgramaOcorrencia[] = [];

    this._lista.filter(
      (item) => {
        if (item.ano == busca) {
          listaFiltrada.push(item);
        }
      }
    );
    this._lista = listaFiltrada;

  }

  listarPorMunicipio(busca: string): void {
    let listaFiltrada: ProgramaOcorrencia[] = [];

    this._lista.filter(
      (item) => {
        if (item.municipio.toLowerCase().includes(busca.toLowerCase())) {
          listaFiltrada.push(item);
        }
      }
    );
    this._lista = listaFiltrada;
  }

  public listarPorFiltro(filtro: Filtro) {
    return this.listarTodos().then(
      () => {
        for (let i = 0; i < filtro.valorBusca.length; i++) {
          if (filtro.campoBusca[i] == "nom_programa") {
            this.listarPorNome(filtro.valorBusca[i]);
          } else {
            if (filtro.campoBusca[i] == "ano") {
              this.listarPorAno(filtro.valorBusca[i]);
            } else {
              if (filtro.campoBusca[i] == "municipio") {
                this.listarPorMunicipio(filtro.valorBusca[i]);
              }
            }
          }
        }
      }
    );
  }

}
