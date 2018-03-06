import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';
import { Filtro } from './filtrojson';

@Injectable()
export class BasejsonProvider {

  private _lista: ProgramaOcorrencia[];

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
      .then((retorno) => { this._lista = <ProgramaOcorrencia[]>retorno; })
      .catch((e) => { console.error(e) });
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

  listarPorFiltro(valores: any[], ...campos) {
    return this.listarTodos().then(
      () => {
        // if (valores.length == 3) {
        //   this.listarPorNome(valores[0]);
        //   this.listarPorAno(valores[1]);
        //   this.listarPorMunicipio(valores[2]);
        // } else {
        //   if(valores.length == 2){

        //   }
        // }
        for (let i = 0; i < valores.length; i++) {
          console.log(valores.length + campos[i])
          if (campos[i] == "nom_programa") {
            console.log("tem nome");
            this.listarPorNome(valores[i]);
            continue;
          } else {
            if (campos[i] == "ano") {
              console.log("tem ANO");
              this.listarPorAno(valores[i]);
              continue;
            } else {
              if (campos[i] == "municipio") {
                console.log("tem municipio");
                this.listarPorMunicipio(valores[i]);
                continue;
              }
            }
          }
        }
      }
    );
  }

  // listarPorFiltro(filtrojson: Filtro) {
  //   let listaFiltrada: ProgramaOcorrencia[] = [];
  //   console.log();
  //   return this.listarTodos().then(
  //     (retorno) => {
  //       (<ProgramaOcorrencia[]>retorno).filter(
  //         (item) => {
  //           for (let i = 0; i < filtrojson.campoBusca.length; i++) {

  //             if (item[filtrojson.campoBusca[i]].includes(filtrojson.valorBusca[i])) {
  //               listaFiltrada.push(item);
  //             }
  //           }
  //         }
  //       );
  //       return listaFiltrada;
  //     }
  //   );
  // }

  //ANO | PROGRAMA | CIDADE

  // listarTodos(): any {

  //   return fetch('../../assets/base-json/dados.json')
  //     .then(function (response) {
  //       return response.json();
  //     })
  //     .then(function (jsonData) {
  //       return jsonData;
  //     })
  //     .catch(function (err) {
  //       console.log("Opps, Something went wrong!", err);
  //     })

  // }


}
