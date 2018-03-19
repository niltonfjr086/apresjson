import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class GenericProvider<T> {
    public _filter: any = {};
    private _fullList: T[] = [];
    private _viewList: T[] = [];

    private _viewSelects = {};

    constructor(public http: HttpClient, protected basePath: string, protected modelo: T) {

        this.toResolveSelect();

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

    private toResolveSelect() {
        Object.assign(this._viewSelects, this.modelo);
        for (let a in this._viewSelects) {
            // this._viewSelects[a] = [];
        }
        // console.log(this._viewSelects);
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

    public toBuildSelects() {

        return this.toFilter()
            .then(

                () => {
                    this.toResolveSelect();
                    // for (let a in this._viewList[0]) {
                    //     console.log("Atributo: " + a + " | " + "TYPEOF: " + typeof a);
                    //     console.log("VALOR: " + a + " | " + "TYPEOF: " + typeof this._viewSelects[<string>a]);
                    //     console.log("VALOR: " + this._viewList[0][a] + " | " + "TYPEOF: " + typeof this._viewList[0][a]);

                    // }
                    for (let a in this._viewSelects) {
                        console.log("Atributo: " + a + " | " + "TYPEOF: " + typeof a);
                        console.log("VALOR: " + this._viewSelects[a] + " | " + "TYPEOF: " + typeof this._viewSelects[a]);
                        console.log("VALOR: " + this._viewList[0][a] + " | " + "TYPEOF: " + typeof this._viewList[0][a]);
                    }



                    for (let i = 0; i < this._viewList.length; i++) {
                        for (let a in this._viewList[i]) {
                            // if (this._viewSelects[<string>a].indexOf(this._viewList[i][a]) < 0) {
                            //     this._viewSelects[<string>a].push(this._viewList[i][a]);
                            // }
                        }
                    }
                }
            )
            .catch((e) => { console.error(e) })
    }

    public tt() {
        console.log("OK");
    }

}