export class Filtro {
    private _valorBusca: any[] = [];
    private _campoBusca: any[] = [];


    public get valorBusca(): any[] {
        return this._valorBusca;
    }

    public set valorBusca(value: any[]) {
        this._valorBusca = value;
    }

    public get campoBusca(): any[] {
        return this._campoBusca;
    }

    public set campoBusca(value: any[]) {
        this._campoBusca = value;
    }

}