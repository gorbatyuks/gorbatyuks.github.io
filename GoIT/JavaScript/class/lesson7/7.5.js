/**
 * Created by ≈жик on 05.11.2015.
 */
//"use strict";
function add (a,b){
    return a + b;
}
function mul (a,b){
    return a*b;
}

function identityf(a){
    return function(){
        return a;}
}
var idf = identityf(3);
//console.log(idf()); // 3
function addf (a){
    return function (b){
        return a+b;
    }
}
//console.log (addf(3)(4));


function applyf(binary) {
    return function(x) {
        return function(y) {
            return binary(x,y);
        }
    }
}

var addf2 = applyf(add);
console.log(addf2(3)(4)); //7
console.log(applyf(mul)(3)(4));