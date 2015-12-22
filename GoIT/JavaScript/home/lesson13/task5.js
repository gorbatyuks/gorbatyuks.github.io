/**
 * Created by Ежик on 18.12.2015.
 */

function Machine(){
    this._enabled = false;
    this.enable = function(){
        this._enabled = true;
    };
    this.disable = function(){
        this._enabled = false;
    };
}
function CoffeeMachine(power, capacity) {
    Machine.call(this);
    var waterAmount = 0;
    var WATER_HEAT_CAPACITY = 4200;
    var timerId;

    this.isRunning = function(){
        return !(!timerId);
    };
    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function(amount){
        return waterAmount;
    };


    function onReady() {
        alert( 'Кофе готов!' );
    }
    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };
    this.run = function() {
        if(!this._enabled){
            throw new Error('кофеварка выключена!');
        }else{
            timerId = setTimeout(function(){
                timerId= null;
                onReady();
            }, getTimeToBoil());
        }};

}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.enable();
coffeeMachine.run();

