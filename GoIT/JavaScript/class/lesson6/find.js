/**
 * Created by ≈жик on 04.11.2015.
 */
function find (arr, value){
    var findVal= [];
    for (var i=0; i<arr.length; i++){
        if (+arr[i] == value) findVal.push(i);
    }
    if (findVal.length === 0) return -1;
    else return findVal;
}
var num = [1, 2, 15, 1, 10, 11, 5, 15];

console.log(find(num, 15));