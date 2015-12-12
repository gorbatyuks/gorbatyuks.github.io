/**
 * Created by ≈жик on 04.12.2015.
 */
//Case swapping
//Given a string, swap the case for each of the letters.

//e.g. CodEwArs --> cODeWaRS

function swap(str){
    var result =[];
    for(var i = 0; i< str.length; i++){
        if(str[i]!= str[i].toLowerCase()){
            result.push(str[i].toLowerCase());
        }
        else result.push(str[i].toUpperCase());
    }
    return result.join('');
}
    console.log(swap('Hello-World'));
