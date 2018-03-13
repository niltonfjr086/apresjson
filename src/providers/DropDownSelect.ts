import { GenericFilter, Critery } from "./GenericFilter";
import { GenericProvider } from "./GenericProvider";

export class DropDownSelect<T> extends GenericFilter<T> {

    private _list: T[] = [];

    constructor(private provider: GenericProvider<T>) {
        super();

    }

    //SOBRESCRITO
    public toMakeFilter(objectToFilter: T): void {
        for (let attribute in objectToFilter) {

            // this.provider.toConsult().then();
            if (attribute && typeof attribute !== "function" && !attribute.startsWith("_")) {
                // console.log(" | " + attribute + " | " + objectToFilter[attribute] + " | ");
                // console.log("LALA" + objectToFilter[attribute]);
                if (this.criteries.length === 0) {
                    this.criteries.push(new Critery(attribute, [objectToFilter[attribute]]));
                } else {

                    for (let i = 0; i < this.criteries.length; i++) {
                        // console.log(objectToFilter[attribute]);
                        // console.log(this.criteries[i].value);
                        // console.log(this.criteries[i].field);
                        // console.log(attribute);

                        if (this.criteries[i].field.indexOf(attribute) < 0) {
                            this.criteries.push(new Critery(attribute, [objectToFilter[attribute]]));
                        } else {

                        }
                    }

                }
            }

            // this.criteries.push(new Critery(attribute, objectToFilter[attribute].toString()));
        }
        console.log(this.criteries);
    }


    onChange() {

        // for (let i in this._manipulated) {
        //     if (i && typeof i !== 'function') {

        //     }
        // }
    }



}

