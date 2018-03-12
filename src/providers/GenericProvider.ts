import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericFilter } from './GenericFilter';
import { ProgramaOcorrencia } from '../entities/ProgramaOcorrencia';

@Injectable()
export abstract class GenericProvider<T> {

    protected _objectToFilter: T;
    protected _objectToViewSelects: GenericFilter<T>;
    private _list: T[];
    private _filter: GenericFilter<T>;

    constructor(public http: HttpClient, protected basePath: string) {
        this._filter = new GenericFilter<T>();
    }

    public get list(): T[] {
        return this._list;
    }

    public set list(value: T[]) {
        this._list = value;
    }

    public get filter(): GenericFilter<T> {
        return this._filter;
    }

    public set filter(value: GenericFilter<T>) {
        this._filter = value;
    }

    public toFilter() {
        this._filter.toMakeFilter(this._objectToFilter);
    }

    protected toConsult() {
        return new Promise(resolve => {
            this.http.get(this.basePath).subscribe(
                (retorno) => {
                    // this._filtro.montarFiltro(retorno[0]);

                    (<T[]>retorno).forEach(element => {


                        for (let i in element) {

                            // console.log(typeof element[i] + " | " + element[i]);

                            // if (typeof element[i] !== "number") {
                            //   element[i] = (<number>0);
                            // if (typeof element[i] !== "number" && typeof e) {
                            //     element[i] = (<number>0);
                            // }
                        }
                    });
                    resolve(retorno);
                }, err => {
                    console.log(err);
                });
        })
    }

    public toConsult2() {
        let obj = { nom_programa: "Fomento Geral" };
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        let params = new HttpParams();
        for (let p in obj) {
            console.log(p + " | "+ obj[p]);
            params.set(p, obj[p]);
        }
        return new Promise(resolve => {
            this.http.get(this.basePath, {headers: headers, params: params}).subscribe(
                (retorno) => {
                    console.log(<ProgramaOcorrencia[]>retorno);
                    resolve(retorno);
                }, err => {
                    console.log(err);
                });
        })
    }

    public listAll() {
        return this.toConsult()
            .then((retorno) => {
                this._list = <T[]>retorno;

                // console.log(this._list);
            })
            .catch((e) => { console.error(e) });
    }

    private loadViewSelects() {
        this._list.forEach(element => {

            for (let attribute in element) {

            }
            // if (this._listaNomes.indexOf(element.nom_programa) < 0) {
            //     this._listaNomes.push(element.nom_programa);
            // }
        });
    }



}