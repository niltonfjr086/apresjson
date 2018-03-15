var Ex = /** @class */ (function () {
    function Ex(nm, nn) {
        this._nm = nm;
        this._nn = nn;
    }
    return Ex;
}());
var fullList = [new Ex('SC Rural', 1), new Ex('SC Rural', 2), new Ex('i', 8), new Ex('i', 1)];
function testesIniciais() {
    var listaNM = fullList.map(function (elem) {
        return elem._nm;
    });
    var totalNM = listaNM.reduce(function (prevVal, elem) {
        return prevVal + elem;
    });
    var uniquesNM = listaNM.filter(function (f, i, ff) {
        return ff.indexOf(f) === i;
    });
    var totalUniquesNM = uniquesNM.reduce(function (prevVal, elem) {
        return prevVal + elem;
    });
    console.log(" | " + listaNM + " | " + totalNM + " | " + uniquesNM + " | " + totalUniquesNM + " | ");
    var listaNN = fullList.map(function (elem) {
        return elem._nn;
    });
    var totalNN = listaNN.reduce(function (prevVal, elem) {
        return prevVal + elem;
    });
    var uniquesNN = listaNN.filter(function (f, i, ff) {
        return ff.indexOf(f) === i;
    });
    var totalUniquesNN = uniquesNN.reduce(function (prevVal, elem) {
        return prevVal + elem;
    });
    console.log(" | " + listaNN + " | " + totalNN + " | " + uniquesNN + " | " + totalUniquesNN + " | ");
}
var filter = { _nm: "SC Rural" };
var viewList = [];
var viewSelects = {
    _nm: [],
    _nn: []
};
var lNM;
var lNN;
function filtrar() {
    viewList = [];
    var lastKey = 0;
    for (var key in filter) {
        lastKey++;
    }
    fullList.forEach(function (element) {
        var index = 1;
        for (var key in filter) {
            if (element[key] === filter[key] || filter[key] === null || filter[key] === undefined) {
                if (index === lastKey) {
                    viewList.push(element);
                    break;
                }
                index++;
                continue;
            }
            else {
                break;
            }
        }
    });
}
filtrar();
console.log(viewList);
function constroiSelects() {
    for (var i = 0; i < viewList.length; i++) {
        for (var a in viewList[i]) {
            if (viewSelects[a].indexOf(viewList[i][a]) < 0) {
                viewSelects[a].push(viewList[i][a]);
            }
        }
    }
}
constroiSelects();
console.log(viewSelects);
