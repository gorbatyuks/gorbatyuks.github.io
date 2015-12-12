/**
 * Created by Ежик on 04.12.2015.
 */
//http://www.codewars.com/kata/find-duplicates
//Find Duplicates
function duplicates(arr) {
    var result = [];
    for (i = 0; i < arr.length; i++) {
        var n = arr[i];
        if (arr.indexOf(n, i + 1) >= 0 && result.indexOf(n) < 0) {
            result.push(n);
        }
    }
    return result;
}

console.log(duplicates([1,2,3,4,4,5,6,6,2,7]));