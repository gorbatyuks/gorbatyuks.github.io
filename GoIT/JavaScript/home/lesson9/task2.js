/**
 * Created by ≈жик on 01.12.2015.
 */
function applyAll(func){
    return func.apply(null, [].slice.call(arguments, 1));
}

function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

console.log( applyAll(sum, 6, 6, 6) ); // 18
console.log( applyAll(mul, 7, 3, 1) ); // 21