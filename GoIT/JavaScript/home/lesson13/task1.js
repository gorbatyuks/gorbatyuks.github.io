/**
 * Created by ���� on 18.12.2015.
 */
function CoffeeMachine(power, capacity) {
    //...
    this.setWaterAmount = function(amount) {
        if (amount < 0) {
            throw new Error("�������� ������ ���� �������������");
        }
        if (amount > capacity) {
            throw new Error("������ ������ ���� ������, ��� " + capacity);
        }

        waterAmount = amount;
    };

    this.getWaterAmount = function() {
        return waterAmount;
    };

    this.getPower = function() {
        return power;
    };

}