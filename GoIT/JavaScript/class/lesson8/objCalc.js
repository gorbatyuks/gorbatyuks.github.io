/**
 * Created by ≈жик on 05.11.2015.
 */
var calculator ={
    read : function(){
        this.a = +prompt("a=", '');
        this.b = +prompt("b=", '');
    },
    sum: function (){
        return this.a + this.b;
    },
    mul: function(){
        return this.a * this.b;
    }

};

calculator.read();
console.log( calculator.sum() );
console.log( calculator.mul() );