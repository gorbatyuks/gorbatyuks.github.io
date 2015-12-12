/**
 * Created by Ежик on 04.11.2015.
 */
var arr = ['Есть', 'жизнь', 'на', 'Марсе'];
/*var arrLength = [];
 for (var i = 0; i < arr.length; i++) {
 arrLength[i] = arr[i].length;
 }
 console.log( arrLength ); // 4,5,2,5*/

var arrLength = arr.map(function(arr) {
    return arr.length;
});
console.log( arrLength );