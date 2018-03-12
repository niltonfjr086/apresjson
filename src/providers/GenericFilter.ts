export class GenericFilter<T> {

    // private objectToFilter: T;
    private _criteries: Critery[] = [];

    constructor() {
    }
    // constructor(objectToFilter: T) {
    //     this._objectToFilter = objectToFilter;
    // }


    public get criteries(): Critery[] {
        return this._criteries;
    }

    public set criteries(value: Critery[]) {
        this._criteries = value;
    }

    public toMakeFilter(objectToFilter: T): void {
        for (let attribute in objectToFilter) {
            if (attribute && typeof attribute !== "function" && attribute.startsWith("_")) {
                this._criteries.push(new Critery(attribute, objectToFilter[attribute].toString()));
            }
        }
        console.log(this._criteries);
    }



}

class Critery {
    private _field: string;
    private _value: any;

    constructor(field: string, value: string) {
        this._field = field;
        this._value = value;
    }

    public get field(): string {
        return this._field;
    }

    public set field(value: string) {
        this._field = value;
    }

    public get value(): any {
        return this._value;
    }

    public set value(value: any) {
        this._value = value;
    }

}