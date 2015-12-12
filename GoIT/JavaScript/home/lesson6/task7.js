function anClean(arr){

    var annagr = {};
    for (var i = 0; i<arr.length; i++){
        var itemSort = arr[i].toLowerCase().split('').sort().join('');
        annagr[itemSort] = arr[i];
    }
    var result =[];
    for (var key in annagr)    {
        result.push(annagr[key]);
    }

    return result;
}

var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор',];

console.log( anClean(arr) );