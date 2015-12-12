/**
 * Created by ≈жик on 04.11.2015.
 */
function factorial(x){

    if(x != 1){
        return x * factorial(x-1)
    }else{
        return x;
    }
}

console.log(factorial(5));
