import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Filtro } from './basejson/filtrojson';

@Injectable()
export abstract class GenericProvider<T> {

    protected _lista: T[];
    protected filtro: Filtro;

    constructor(public http: HttpClient, protected basePath: string) {
    }

    protected consultar() {
        return new Promise(resolve => {
            this.http.get(this.basePath).subscribe(
                (retorno) => {
                    (<T[]>retorno).forEach(element => {


                        for (let i in element) {
                            console.log(typeof element[i] + " | " + element[i]);
                            // if (typeof element[i] !== "number") {
                            //   element[i] = (<number>0);
                        }


                        // if (typeof element.valor_financiado !== "number") {
                        //   element.valor_financiado = 0;
                        // }
                        // if (typeof element.valor_subvencionado !== "number") {
                        //   element.valor_subvencionado = 0;
                        // }
                    });
                    resolve(retorno);
                }, err => {
                    console.log(err);
                });
        })
    }

    public listarTodos() {
        return this.consultar()
            .then((retorno) => {
                this._lista = <T[]>retorno;

                // if (this._listaNomes.length === 0 || this._listaMunicipios.length === 0) {
                //     this.carregaSelectsView();
                // }
                console.log(this._lista);
            })
            .catch((e) => { console.error(e) });
    }

    private carregaSelectsView() {
        this._lista.forEach(element => {


            // if (this._listaNomes.indexOf(element.nom_programa) < 0) {
            //     this._listaNomes.push(element.nom_programa);
            // }
            // if (this._listaMunicipios.indexOf(element.municipio) < 0) {
            //     this._listaMunicipios.push(element.municipio);
            // }
        });
    }



}