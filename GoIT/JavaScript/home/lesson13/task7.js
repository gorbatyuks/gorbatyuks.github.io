/**
 * Created by Ежик on 18.12.2015.
 */

function Machine(power){
    this._power = power;
    this._enabled = false;
    this.enable = function(){
        this._enabled = true;
    };
    this.disable = function(){
        this._enabled = false;
    };
}

function Fridge(power){
    Machine.apply(this, arguments);
    var food=[];
    this.addFood = function(){
        if(!this._enabled){alert('Холодильник вимкнений!');}
        if(food.length + arguments.length >= this._power/100){alert('Не вистачить потужності, краще зЇж щось!');}
        for(var i = 0; i< arguments.length; i++){
            food.push(arguments[i]);
        }
    };
    this.getFood = function(){
        return food;
    };

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("котлета");
fridge.addFood("сок", "зелень");
fridge.addFood("варенье", "пирог", "торт");
console.log(fridge.getFood());