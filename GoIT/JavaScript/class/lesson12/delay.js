/**
 * Created by Ежик on 05.11.2015.
 */
/*function f(){
    console.log("hello");
    }
var f1000= delay(f(), 1000);

//var timerId = setTimeout(func / code, delay[, arg1, arg2...])
console.log(f1000());
*/
function func() {
    alert( 'Привет' );
}

setTimeout(func, 1000);