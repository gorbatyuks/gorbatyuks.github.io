/**
 * Created by ≈жик on 04.11.2015.
 */
function filterRange(array, min, max){
    var filteredArray = [];
    for (var i=0; i<array.length; i++){
        if( array[i]>= min && array[i]<=max) filteredArray.push(array[i]);
    }
    return filteredArray;

}
var arr = [5, 7, 4, 8, 3, 0];
var filtered = filterRange(arr, 3, 5);
console.log (filtered);
console.log (arr);