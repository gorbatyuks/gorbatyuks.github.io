
// return a function that returns n
function always(n) {
    var localVariable = n;
    return function() { return localVariable; };
}
var three = always(3);
console.log(three());