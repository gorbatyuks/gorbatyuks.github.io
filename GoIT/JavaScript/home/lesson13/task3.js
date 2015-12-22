/**
 * Created by ���� on 18.12.2015.
 */
function CoffeeMachine(power, capacity) {
    var waterAmount = 0;

    var WATER_HEAT_CAPACITY = 4200;

    function getTimeToBoil() {
        return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    }

    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ������, ��� " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function(amount){
        return waterAmount;
    };

    function onReady() {
        alert( '���� �����!' );
    }
    this.setOnReady = function(newOnReady) {
        onReady = newOnReady;
    };
    this.run = function() {
        setTimeout(function(){
            onReady();
        }, getTimeToBoil());
    };

   }

var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(150);

coffeeMachine.run();

coffeeMachine.setOnReady(function() {
    var amount = coffeeMachine.getWaterAmount();
    alert( '����� ����: ' + amount + '��' ); // ����� ����: 150 ��
});