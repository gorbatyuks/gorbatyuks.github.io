/**
 * Created by ≈жик on 23.12.2015.
 */
//http://www.codewars.com/kata/array-dot-prototype-dot-reverse
//Array.prototype.reverse()
Array.prototype.reverse = function() {
    // ...
    for (i=0, j= this.length-1; i<j; i++, j--){
        var tmp = this[i];
        this[i]=this[j];
        this[j]=tmp;
    }
    return this;
};