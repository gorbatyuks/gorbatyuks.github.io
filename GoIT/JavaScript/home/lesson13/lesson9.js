/**
 * Created by ���� on 22.12.2015.
 */
/**
 * Created by ���� on 22.12.2015.
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
    this.filterFood = function(filter) {
        return food.filter(filter);
    };

    this.removeFood = function(item) {
        var idx = food.indexOf(item);
        if (idx != -1) food.splice(idx, 1);
    };
    this.disable = function(){
        if(food.length > 0){
            throw new Error ("������ � ������������: "+ food.join(",")+ "!!!");
        }else{
            this._enabled = false;
        }
    };


}
var fridge = new Fridge(500);
fridge.enable();
fridge.addFood("���-���");
fridge.disable(); // ������, � ������������ ���� ���