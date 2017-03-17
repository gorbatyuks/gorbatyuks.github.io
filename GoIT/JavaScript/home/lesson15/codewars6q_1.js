/**
 * Created by ≈жик on 23.12.2015.
 */
//http://www.codewars.com/kata/this-is-an-other-problem/

function NamedOne(first, last) {
// -- SHOULD be changed --
    this.firstName = first;
    this.lastName = last;
    this.fullName = function(){
        if(!!arguments)
        return firstName + ' ' + lastName;}

}
var namedOne = new NamedOne("Naomi","Wang");

namedOne.firstName = "John";
namedOne.lastName = "Doe";

console.log (namedOne.fullName());