export class GenericFilter<T> {

    private _criteries: Critery[] = [];

    constructor() {
    }

    public get criteries(): Critery[] {
        return this._criteries;
    }

    public set criteries(value: Critery[]) {
        this._criteries = value;
    }

    public toMakeFilter(objectToFilter: T): void {
        for (let attribute in objectToFilter) {
            if (objectToFilter[attribute] && typeof attribute !== "function" && !attribute.startsWith("_")) {
                this._criteries.push(new Critery(attribute, objectToFilter[attribute]));
            }
        }

        this._criteries.forEach(element => {
            // console.log(element);
        });
    }



}

export class Critery {
    private _field: any;
    private _value: any;

    constructor(field: any, value: any) {
        this._field = field;
        this._value = value;
    }

    public get field(): any {
        return this._field;
    }

    public set field(value: any) {
        this._field = value;
    }

    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
    }

}