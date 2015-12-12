/**
 * Created by ≈жик on 04.12.2015.
 */
function sum (a,b){
    if(arguments[1]== undefined){
        return function(b){
            return a+b;
        }
    }else return a+b;
}
