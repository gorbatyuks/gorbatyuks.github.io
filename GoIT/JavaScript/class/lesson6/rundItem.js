/**
 * Created by ≈жик on 04.11.2015.
 */
var fruits = ['apple', 'orange', 'kiwi', 'pear', 'apricot', 'peach'];
function getRandomValue(arr){
    var num = Math.floor(Math.random() * (arr.length + 1));
    return arr[num];
}

console.log(getRandomValue(fruits));
