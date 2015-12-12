/**
 * Created by ≈жик on 01.12.2015.
 */
function longestWord(str){
    var word, wordLength, arr=[];
    arr = str.split(' ');
    for(var i = 0; i < arr.length; i++){
        if  (word === undefined) {
            word = arr[i];
            wordLength = arr[i].length;
        }
        if(arr[i].length>wordLength){
            word = arr[i];
            wordLength = arr[i].length;
        }
    }
    return word;
}

console.log( longestWord('Web Development Tutorial'));