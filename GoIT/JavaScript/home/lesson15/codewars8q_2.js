/**
 * Created by ≈жик on 23.12.2015.
 */
//http://www.codewars.com/kata/color-ghost
/*Color Ghost

 Create a class Ghost

 Ghost objects are instantiated without any arguments.

 Ghost objects are given a random color attribute of white" or "yellow" or "purple" or "red" when instantiated*/
var Ghost = function() {
    // your code goes here
    this._color = ['white', 'yellow', 'purple', 'red'];
    var num = Math.floor(Math.random() * (this._color.length));
    this.color =  this._color[num];
};
var ghost = new Ghost();
console.log(ghost.color());