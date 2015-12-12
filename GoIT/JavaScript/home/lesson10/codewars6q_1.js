/**
 * Created by ≈жик on 04.12.2015.
 */
//The function 'fibonacci' should return an array of fibonacci numbers.
// The function takes a number as an argument to decide how many no. of elements to produce.
// If the argument is less than or equal to 0 then return empty array
//http://www.codewars.com/kata/complete-fibonacci-series/javascript

function fibonacci(n) {
    //return fibonacci array of n elements
    if(n<=0){return [];}else{
        var fib=[0,1];
        for (var i=2; i<n; i++ ){
            fib.push(fib[i-1] + fib[i-2]);
        }
        return fib;

    }

}
console.log(fibonacci(7));