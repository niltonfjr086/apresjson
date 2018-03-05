import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProgramaOcorrencia } from '../../entities/ProgramaOcorrencia';
import { Filtro } from './filtrojson';

@Injectable()
export class BasejsonProvider {

  constructor(private http: HttpClient) {
  }

  listarTodos() {
    return new Promise(resolve => {
      this.http.get('../../assets/base-json/dados.json').subscribe(
        (retorno) => {
          resolve(retorno);
        }, err => {
          console.log(err);
        });
    });
  }

  listarPorNome(busca: string) {
    let listaFiltrada: ProgramaOcorrencia[] = [];

    return this.listarTodos().then(
      (retorno) => {
        (<ProgramaOcorrencia[]>retorno).filter(
          (item) => {
            if (item.nom_programa.toLowerCase().includes(busca.toLowerCase())) {
              listaFiltrada.push(item);
            }
          }
        );
        return listaFiltrada;
      }
    );
  }

  listarPorFiltro(filtrojson: Filtro) {
    let listaFiltrada: ProgramaOcorrencia[] = [];
    console.log();
    return this.listarTodos().then(
      (retorno) => {
        (<ProgramaOcorrencia[]>retorno).filter(
          (item) => {
            for (let i=0; i < filtrojson.campoBusca.length; i++) {
              
              if (item[filtrojson.campoBusca[i]].includes(filtrojson.valorBusca[i])) {
                listaFiltrada.push(item);
              }
            }
          }
        );
        return listaFiltrada;
      }
    );
  }

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
