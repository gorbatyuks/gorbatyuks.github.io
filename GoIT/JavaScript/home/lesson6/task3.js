/**
 * Created by ≈жик on 01.11.2015.
 */
var arr = [1, 2, 3, 4, 5];
function randomSort(a,b){
    var ran =a + Math.random()*(a-b);
    ran= Math.round(ran);
    return ran;
}
arr.sort(randomSort);

console.log( arr );