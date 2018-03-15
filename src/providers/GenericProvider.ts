import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenericFilter } from './GenericFilter';
import { ProgramaOcorrencia } from '../entities/ProgramaOcorrencia';
import { DropDownSelect } from './DropDownSelect';

@Injectable()
export abstract class GenericProvider<T> {
    private _filter: any = {};
    private _fullList: T[] = [];
    private _viewList: T[] = [];

    private _viewSelects = { f: [], w: [] };

    constructor(public http: HttpClient, protected basePath: string, protected modelo: T) {
        // this._viewSelects = new DropDownSelect<T>(this);
        // this._filter = new GenericFilter<T>();
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

    private toConsult2() {
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
                this._fullList = <T[]>retorno;

                this._fullList.forEach(e => {
                    for (const key in e) {
                        if (typeof this.modelo[key] === "number" && <any>e[key] === "NULL") {
                            e[key] = <any>0;
                        }
                    }
                });
                console.log(this._fullList);
            })
            .catch((e) => { console.error(e) });
    }

    public toFilterConsult() {
        this._filter.toMakeFilter(this._filter);
        return this.listAll()
            .then(
                () => {

                    let filteredList: T[];

                    this._fullList.forEach(element => {
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
        this._fullList.forEach(element => {

            for (let attribute in element) {

            }
            // if (this._listaNomes.indexOf(element.nom_programa) < 0) {
            //     this._listaNomes.push(element.nom_programa);
            // }
        });
    }

    private filtrar() {
        this._viewList = [];

        let lastKey = 0;
        for (const key in filter) {
            lastKey++;
        }

        this._fullList.forEach(element => {

            let index = 1;
            for (const key in this._filter) {

                if (element[key] === this._filter[key] || this._filter[key] === null || this._filter[key] === undefined) {
                    if (index === lastKey) {
                        this._viewList.push(element);
                        break;
                    }
                    index++;
                    continue;

                } else {
                    break;
                }
            }
        });

    }



    private constroiSelects() {
        for (let i = 0; i < this._viewList.length; i++) {
            for (let a in this._viewList[i]) {
                // if (this._viewSelects[a].indexOf(this._viewList[i][a]) < 0) {
                //     this._viewSelects[a].push(this._viewList[i][a]);
                // }
            }
        }
    }
    // constroiSelects();
    // console.log(viewSelects);



}