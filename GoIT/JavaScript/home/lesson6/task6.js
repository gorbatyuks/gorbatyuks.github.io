function unique(str){
    var result = [];
    outer: for(var i=0; i<str.length; i++){
        var item = str[i];

        for (var j = 0; j<result.length; j++)  {
            if (result[j] === item) continue  outer;
        }
        result.push(strings[i]);
    }
    return result;
}
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'харе', 'кришна', '8-()'];
console.log( unique(strings) ); // кришна, харе, 8-()