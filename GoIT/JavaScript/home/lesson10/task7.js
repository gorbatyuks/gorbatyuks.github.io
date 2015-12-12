/**
 * Created by ≈жик on 01.12.2015.
 */
function suffle(arr){
    for (var i = arr.length - 1; i > 0; i--){
        var num = Math.floor(Math.random() * (i + 1));
        var d = arr[num];
        arr[num] = arr[i];
        arr[i] = d;
    }
    return arr;
}

console.log( suffle(['Web', 'Development', 'Tutorial', 5, 51 ,78, 4, 7, 12]));