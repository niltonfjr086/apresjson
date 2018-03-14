import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericFilter } from './GenericFilter';
import { ProgramaOcorrencia } from '../entities/ProgramaOcorrencia';
import { DropDownSelect } from './DropDownSelect';

@Injectable()
export abstract class GenericProvider<T> {
    private _objectToFilter: any = {};
    private _list: T[] = [];

    private _viewSelects: DropDownSelect<T>;
    private _filter: GenericFilter<T>;

    constructor(public http: HttpClient, protected basePath: string, protected modelo: T) {
        this._viewSelects = new DropDownSelect<T>(this);
        this._filter = new GenericFilter<T>();
    }

    public get objectToFilter(): T {
        return this._objectToFilter;
    }

    public set objectToFilter(value: T) {
        this._objectToFilter = value;
    }

    public get list(): T[] {
        return this._list;
    }

    public set list(value: T[]) {
        this._list = value;
    }

    public get viewSelects(): DropDownSelect<T> {
        return this._viewSelects;
    }

    public set viewSelects(value: DropDownSelect<T>) {
        this._viewSelects = value;
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

    private toConsult() {
        return new Promise(resolve => {
            this.http.get(this.basePath).subscribe(
                (retorno) => {
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
            console.log(p + " | " + obj[p]);
            params.set(p, obj[p]);
        }
        return new Promise(resolve => {
            this.http.get(this.basePath, { headers: headers, params: params }).subscribe(
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

                this._list.forEach(e => {
                    for (const key in e) {
                        if (typeof this.modelo[key] === "number" && <any>e[key] === "NULL") {
                            e[key] = <any>0;
                        }
                    }
                });
                console.log(this._list);
            })
            .catch((e) => { console.error(e) });
    }

    public toFilterConsult() {
        this._filter.toMakeFilter(this._objectToFilter);
        return this.listAll()
            .then(
                () => {
                    this.filter.criteries.forEach(element => {

                    });
                    console.log(this._filter.criteries);

                    let filteredList: T[];

                    this._list.forEach(element => {
                        for (let a in element) {
                            // if (this._filter.criteries["field"][a]) {
                            //     filteredList.push(element);
                            // }
                        }

                    });
                }
            )
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