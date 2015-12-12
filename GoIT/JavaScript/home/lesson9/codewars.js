/**
 * Created by ≈жик on 01.12.2015.
 */
// http://www.codewars.com/kata/unpacking-arguments

function spread(func, args) {
    // ...
    return func.apply(this, args);
}