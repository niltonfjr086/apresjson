class Ex {

    _nm: any;
    _nn: any;
    constructor(nm: any, nn: any) {
        this._nm = nm;
        this._nn = nn;
    }
}
let lista = [new Ex('p', 1), new Ex('p', 2), new Ex('i', 8), new Ex('i', 1)];



let listaNM = lista.map((elem) => {
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
// console.log(" | " + listaNM + " | " + totalNM + " | " + uniquesNM + " | " + totalUniquesNM + " | ");


let listaNN = lista.map((elem) => {
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
// console.log(" | " + listaNN + " | " + totalNN + " | " + uniquesNN + " | " + totalUniquesNN + " | ");


var filtro = { _nm: "i", _nn: 1 };

var uniqueItens = lista.filter((f, i, ff) => {
    return ff.indexOf(f) === i;
});

let estrutura = {
    _nm: [],
    _nn: []
}
let lNM;
let lNN;
for (let i = 0; i < lista.length; i++) {
    for (let a in lista[i]) {
        if (filtro[a] !== undefined) {
            estrutura[a].push(lista[i][a]);
            if (lista[i][a] === filtro[a]) {
                // if (estrutura[a].indexOf(lista[i][a]) < 0) {
                //     estrutura[a].push(lista[i][a]);
                // }
                // console.log(lista[i][a]);
                
            }
        }
    }
}

console.log(estrutura);

// var filteredItens = lista.filter(condizAoFiltro);

// function condizAoFiltro(value, index, list) {
//     return list.some(filtro);
// }
// console.log(filteredItens);