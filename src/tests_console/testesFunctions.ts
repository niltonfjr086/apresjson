class Ex {

    _nm: any;
    _nn: any;
    constructor(nm: any, nn: any) {
        this._nm = nm;
        this._nn = nn;
    }
}
let fullList = [new Ex('p', 1), new Ex('p', 2), new Ex('i', 8), new Ex('i', 1)];


function testesIniciais() {
    let listaNM = fullList.map((elem) => {
        return elem._nm;
    });
    let totalNM = listaNM.reduce((prevVal, elem) => {
        return prevVal + elem;
    });
    let uniquesNM = listaNM.filter((f, i, ff) => {
        return ff.indexOf(f) === i;
    });
    let totalUniquesNM = uniquesNM.reduce((prevVal, elem) => {
        return prevVal + elem;
    });
    console.log(" | " + listaNM + " | " + totalNM + " | " + uniquesNM + " | " + totalUniquesNM + " | ");


    let listaNN = fullList.map((elem) => {
        return elem._nn;
    });
    let totalNN = listaNN.reduce((prevVal, elem) => {
        return prevVal + elem;
    });
    let uniquesNN = listaNN.filter((f, i, ff) => {
        return ff.indexOf(f) === i;
    });
    let totalUniquesNN = uniquesNN.reduce((prevVal, elem) => {
        return prevVal + elem;
    });
    console.log(" | " + listaNN + " | " + totalNN + " | " + uniquesNN + " | " + totalUniquesNN + " | ");
}


var filter = { _nm: "p", _nn: null };
var viewList: Ex[] = [];

let viewSelects = {
    _nm: [],
    _nn: []
}
let lNM;
let lNN;

function filtrar() {
    viewList = [];

    let lastKey = 0;
    for (const key in filter) {
        lastKey++;
    }

    fullList.forEach(element => {

        let index = 1;
        for (const key in filter) {

            if (element[key] === filter[key] || filter[key] === null || filter[key] === undefined) {
                if (index === lastKey) {
                    viewList.push(element);
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
filtrar();
console.log(viewList);


function constroiSelects() {
    for (let i = 0; i < viewList.length; i++) {
        for (let a in viewList[i]) {
            if (viewSelects[a].indexOf(viewList[i][a]) < 0) {
                viewSelects[a].push(viewList[i][a]);
            }
        }
    }
}
constroiSelects();
console.log(viewSelects);

