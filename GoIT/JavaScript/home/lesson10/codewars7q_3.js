/**
 * Created by ≈жик on 04.12.2015.
 */
//http://www.codewars.com/kata/descending-order
//Descending Order
// Your task is to make a function that can take any non-negative integer as a argument and return
// it with it's digits in descending order. Descending order means that you take the highest
// digit and place the next highest digit immediately after it.

function descendingOrder(n){
    //...
    function reverseSort(a,b){
        return b-a;
    }
    return +(String(n).split('').sort(reverseSort).join(''))
}