/**
 * Created by ���� on 18.12.2015.
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
        if(!this._enabled){alert('����������� ���������!');}
        if(food.length + arguments.length >= this._power/100){alert('�� ��������� ���������, ����� �� ����!');}
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
fridge.addFood("�������");
fridge.addFood("���", "������");
fridge.addFood("�������", "�����", "����");
console.log(fridge.getFood());