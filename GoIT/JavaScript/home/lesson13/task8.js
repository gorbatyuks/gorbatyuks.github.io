/**
 * Created by Ежик on 22.12.2015.
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
    this.filterFood = function(filter) {
        return food.filter(filter);
    };

    this.removeFood = function(item) {
        var idx = food.indexOf(item);
        if (idx != -1) food.splice(idx, 1);
    };

}

var fridge = new Fridge(500);
fridge.enable();
fridge.addFood({
    title: "котлета",
    calories: 100
});
fridge.addFood({
    title: "сок",
    calories: 30
});
fridge.addFood({
    title: "зелень",
    calories: 10
});
fridge.addFood({
    title: "варенье",
    calories: 150
});

var dietItems = fridge.filterFood(function(item) {
    return item.calories < 50;
});

fridge.removeFood("нет такой еды");
alert( fridge.getFood().length );

dietItems.forEach(function(item) {
    alert( item.title );
    fridge.removeFood(item);
});

alert( fridge.getFood().length );