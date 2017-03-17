/**
 * Created by ≈жик on 23.12.2015.
 */
//http://www.codewars.com/kata/broken-counter
//Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
    this.value = 0;
}

Counter.prototype.increase = function(){
    this.value++;
};

Counter.prototype.getValue= function() {
    return this.value;
};

Counter.prototype.reset= function() {
    this.value = 0;
};
var counter = new Counter;
counter.increase();
counter.reset();
console.log(counter.getValue());