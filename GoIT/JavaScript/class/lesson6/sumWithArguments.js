/**
 * Created by ≈жик on 04.11.2015.
 */
function sum (){
    var total = 0;
    for (var i=0; i<arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(sum (1,2,3,4));