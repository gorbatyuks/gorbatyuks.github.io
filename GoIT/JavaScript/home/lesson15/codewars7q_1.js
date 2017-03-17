/**
 * Created by ≈жик on 23.12.2015.
 */
//http://www.codewars.com/kata/re-open-class
/*Ruby and Javascript lets you re-open classes so you can add new functionality to existing classes and objects.

 In this kata, you'll have to add a new method in the String class that calls the upcase method (toUpperCase() in Javascript), so that:*/
String.prototype.myNewMethod = function(){

    return this.toUpperCase();
};

console.log ("ajkjbc".myNewMethod());

//String.prototype.myNewMethod =String.prototype.toUpperCase;