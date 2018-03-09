import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';
import { Filtro } from './filtrojson';

@Injectable()
export class BasejsonProvider {

  private _lista: ProgramaOcorrencia[];
  private _listaFiltrada: ProgramaOcorrencia[] = [];
  private _listaNomes: string[] = [];
  private _listaMunicipios: string[] = [];

  constructor(private http: HttpClient) {
    // this.listarTodos();
  }


  public get listaFiltrada(): ProgramaOcorrencia[] {
    return this._listaFiltrada;
  }

  public get listaNomes(): string[] {
    return this._listaNomes;
  }

  public get listaMunicipios(): string[] {
    return this._listaMunicipios;
  }

  public listarTodos() {
    return new Promise(resolve => {
      this.http.get('../../assets/base-json/dados.json').subscribe(
        (retorno) => {
          (<ProgramaOcorrencia[]>retorno).forEach(element => {
            if (typeof element.valor_financiado !== "number") {
              element.valor_financiado = 0;
            }
            if (typeof element.valor_subvencionado !== "number") {
              element.valor_subvencionado = 0;
            }
          });
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
        console.log(this.listaNomes);
      })
      .catch((e) => { console.error(e) });
  }

  private carregaSelectsView() {
    this._lista.forEach(element => {
      if (this._listaNomes.indexOf(element.nom_programa) < 0) {
        this._listaNomes.push(element.nom_programa);
      }
      if (this._listaMunicipios.indexOf(element.municipio) < 0) {
        this._listaMunicipios.push(element.municipio);
      }
    });
  }

  private listarPorNome(busca: string): void {
    let listaFiltrada: ProgramaOcorrencia[] = [];

    this._listaFiltrada.filter(
      (item) => {
        if (item.nom_programa.toLowerCase().includes(busca.toLowerCase())) {
          // if (typeof item.valor_financiado !== "number") {
          //   item.valor_financiado = 0;
          // }
          // if (typeof item.valor_subvencionado !== "number") {
          //   item.valor_subvencionado = 0;
          // }
          listaFiltrada.push(item);
        }
      }
    );
    this._listaFiltrada = listaFiltrada;
  }

  private listarPorAno(busca: number): void {
    let listaFiltrada: ProgramaOcorrencia[] = [];

    this._listaFiltrada.filter(
      (item) => {
        if (item.ano == busca) {
          // if (typeof item.valor_financiado !== "number") {
          //   item.valor_financiado = 0;
          // }
          // if (typeof item.valor_subvencionado !== "number") {
          //   item.valor_subvencionado = 0;
          // }
          listaFiltrada.push(item);
        }
      }
    );
    this._listaFiltrada = listaFiltrada;

  }

  private listarPorMunicipio(busca: string): void {
    let listaFiltrada: ProgramaOcorrencia[] = [];

    this._listaFiltrada.filter(
      (item) => {
        if (item.municipio.toLowerCase().includes(busca.toLowerCase())) {
          // if (typeof item.valor_financiado !== "number") {
          //   item.valor_financiado = 0;
          // }
          // if (typeof item.valor_subvencionado !== "number") {
          //   item.valor_subvencionado = 0;
          // }
          listaFiltrada.push(item);
        }
      }
    );
    this._listaFiltrada = listaFiltrada;
  }

  public listarPorFiltro(filtro: Filtro) {
    return this.listarTodos().then(
      () => {
        if (filtro.campoBusca.length > 0) {
          this._listaFiltrada = this._lista;
        }

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
