/**
 * Created by ≈жик on 04.12.2015.
 */
//http://www.codewars.com/kata/gradually-adding-parameters
//Gradually Adding Parameters
function add() {
    //CODE
    var sum= 0;
    for (var i =0; i< arguments.length;  i++)
        sum+=arguments[i]*(i+1);

    return sum;
}

console.log(add(1,4,-5,5));