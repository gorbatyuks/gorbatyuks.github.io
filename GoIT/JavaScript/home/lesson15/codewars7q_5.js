/**
 * Created by ≈жик on 23.12.2015.
 */
//http://www.codewars.com/kata/javascript-namespacing
//Javascript Namespacing


var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function(str) {
   this.sayHello = function () {
        return str;
    };
};

    var myObject = new MyNamespace.MyClass('Hello!');

    var phrase = myObject.sayHello(); // phrase should be 'Hello!'

    console.log(phrase);
