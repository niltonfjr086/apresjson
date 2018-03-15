import { GenericFilter, Critery } from "./GenericFilter";
import { GenericProvider } from "./GenericProvider";

export class DropDownSelect<T> {

    private selects: Select[] = [];

    constructor(private provider: GenericProvider<T>) {

    }

    // public toMakeFilter(objectToFilter: T): void {
    //     for (let attribute in objectToFilter) {
    //         if (objectToFilter[attribute] && typeof attribute !== "function" && !attribute.startsWith("_")) {
    //             this.criteries.push(new Critery([attribute, objectToFilter[attribute]], []));
    //         }
    //     }

    onChange() {
        // for (let i in this._manipulated) {
        //     if (i && typeof i !== 'function') {
        //     }
        // }
    }



}

export class Select {
    private field: string;
    private registries: any[];
}

