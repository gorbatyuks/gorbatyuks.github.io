/**
 * Created by Ежик on 23.10.2015.
 */
/*
//ялинка
var i="#";
for(var b=0; b<7; b++){
    console.log (i);
    i+="#";
}*/
/*
for (var i = 1; i<101; i++){
   if( i%5 ===0 && i%3 ===0) console.log("FizzBuzz");
    else if (i%3===0) console.log("Fizz");
    else if (i%5===0) console.log("Buzz");
    else console.log(i);
}
 */
/*
// шахматна доска
var size = 8;
var myBoard ="";
for(i=1; i<=size*size + size; i++) {
    if (i % (size+1) === 0) {
        myBoard += "\n";
        }
    else if ( i % 2 != 0) {
        myBoard += "#";
    }
    else {
        myBoard += " ";
    }
}
console.log(myBoard);
*/
/*
function min(a,b){
    if (a<b) return a;
    else return b;
}
console.log(min(0,-10));
    */
/*
function isEven(n){
    if (n<0) return isEven(n*=-1);
    else if (n === 0 ) return true;
    else if (n === 1) return false;
    else if (n > 1) return isEven(n-2);
}
console.log(isEven(-50));*/
/*
function countBs(x){
    var bobCount=0;
    for( var count= 0; count< x.length; count++){
        if (x.charAt(count) === "b"){
            bobCount++;
        }
            }
    return bobCount;
}
console.log(countBs("trulalab"));

function countChar(text, find){
    var bobCount=0;
    for( var count= 0; count< text.length; count++){
        if (text.charAt(count) === find){
            bobCount++;
        }
    }
    return bobCount;
}
console.log(countChar("trulalaaaab", "a"));*/
var arr;
function range (one, two){
    arr = [];
    for(var i = one; i<= two; i++){
        arr.push(i);
    }
    return arr;
}
/*console.log(range(1,10));*/
function sum(arr){
    var sumNumber = 0;
    for (var i = arguments.length; i<= 0; i-- ){
        sumNumber+= arr.pop();
        console.log(sumNumber);
    }
    return sumNumber;
}
range(1,10);
console.log(sum(arr));