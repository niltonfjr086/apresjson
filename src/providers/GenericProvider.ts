import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class GenericProvider<T> {

    private _fullList: T[] = [];

    public _filter: any = {};
    private _viewList: T[] = [];

    public _viewSelects = {};
    public _viewSumReduces = {};

    constructor(public http: HttpClient, protected basePath: string, protected modelo: T) {

        this.toResolveViewComponents();

    }

    public get filter(): any {
        return this._filter;
    }

    public set filter(value: any) {
        this._filter = value;
    }

    public get viewList(): T[] {
        return this._viewList;
    }

    public set viewList(value: T[]) {
        this._viewList = value;
    }

    public get viewSelects(): any {
        return this._viewSelects;
    }

    public set viewSelects(value: any) {
        this._viewSelects = value;
    }

    public get viewSumReduces(): any {
        return this._viewSumReduces;
    }

    public set viewSumReduces(value: any) {
        this._viewSumReduces = value;
    }

    private toResolveSelect() {
        Object.assign(this._viewSelects, this.modelo);
        for (let a in this._viewSelects) {
            this._viewSelects[a] = [];
        }
    }

    private toResolveSum() {
        Object.assign(this._viewSumReduces, this.modelo);
    }

    private toResolveViewComponents() {
        this.toResolveSelect();
        this.toResolveSum();
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

    // Consultar um WebService é mais simples, a lógica de busca na base de dados é abstraída com parâmetros na URL
    // private toConsultExternalWS() {
    //     let obj = { nom_programa: "Fomento Geral" };
    //     let headers = new HttpHeaders();
    //     headers.append('Content-Type', 'application/json');
    //     let params = new HttpParams();
    //     for (let p in obj) {
    //         console.log(p + " | " + obj[p]);
    //         params.set(p, obj[p]);
    //     }
    //     return new Promise(resolve => {
    //         this.http.get(this.basePath, { headers: headers, params: params }).subscribe(
    //             (retorno) => {
    //                 console.log(<T[]>retorno);
    //                 resolve(retorno);
    //             }, err => {
    //                 console.log(err);
    //             });
    //     })
    // }


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
            })
            .catch((e) => { console.error(e) });
    }

    public toFilter() {
        return this.listAll()
            .then(
                () => {

                    let lastKey = 0;
                    for (const key in this._filter) {
                        lastKey++;
                    }

                    // if (lastKey === 0) {
                    //     this._viewList = this._fullList;
                    //     return;
                    // }

                    this._viewList = [];
                    this._fullList.forEach(element => {

                        let index = 1;
                        for (const key in this._filter) {

                            if (element[key] == this._filter[key] || this._filter[key] === null || this._filter[key] === undefined) {
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
            )
            .catch((e) => { console.error(e) });
    }

    public toBuild() {

        return this.toFilter()
            .then(
                () => {
                    let manipulated = [];

                    if (this._viewList.length > 0) {
                        manipulated = this._viewList;
                    } else {
                        manipulated = this._fullList;
                    }

                    this.toResolveSum();

                    for (let i = 0; i < manipulated.length; i++) {
                        for (let a in manipulated[i]) {

                            if (this._viewSelects[<string>a].indexOf(manipulated[i][a]) < 0) {
                                this._viewSelects[<string>a].push(manipulated[i][a]);
                            }
                            if (typeof manipulated[i][a] === "number") {
                                this._viewSumReduces[<string>a] += manipulated[i][a];
                            }
                        }
                    }
                    for (let a in this._viewSelects) {
                        this._viewSelects[a].sort();
                    }
                    console.log(this._viewSelects);
                    console.log(this._viewSumReduces);
                }
            )
            .catch((e) => { console.error(e) })
    }

}