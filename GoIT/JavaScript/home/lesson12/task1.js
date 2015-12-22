/**
 * Created by Ежик on 16.12.2015.
 */
function f(x) {
    alert( x );
}
function delay(func, time){

    return function(){
        var arg = arguments;
        var ctx = this;
        setTimeout(function(){
            func.apply(ctx, arg);
        }, time);};
}
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд