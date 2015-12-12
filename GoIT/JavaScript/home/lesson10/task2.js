/**
 * Created by ≈жик on 01.12.2015.
 */

function getMaxNumber(arr){
    var max;
    for (var i = 0; i < arr.length; i++){
        if(max === undefined ) max = arr[i];
        if(arr[i]> max) max = arr[i];
    }
    return max;
}
console.log(getMaxNumber([-1,30,40,2,7])); // 40
console.log(getMaxNumber([1,15,-20,2,-7])); // 15