/**
  Created by ≈жик on 30.11.2015.
Lazily executing a function*/
    function add (a, b){
    return a+b;
}
function double (a){
    return 2*a;
}
var make_lazy = function() {
    var args = arguments;

    return function(){
        return args[0].apply(args, [].splice.call(args, 1));
    }
};

var lazy_sum = make_lazy(add, 2, 3);
var lazyDouble = make_lazy(double, 15);
console.log(lazy_sum());
console.log(lazyDouble());