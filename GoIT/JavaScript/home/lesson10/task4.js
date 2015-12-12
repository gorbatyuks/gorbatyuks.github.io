/**
 * Created by ≈жик on 01.12.2015.
 */
function toUpperCase(str){
    var result = [];
    result = str.split(' ');
    for(var i = 0; i < result.length; i++){
        result[i] = result[i].charAt(0).toUpperCase()+ result[i].substring(1);
    }

    return result.join(' ');
}

console.log( toUpperCase('the quick brown fox'));

//через мап