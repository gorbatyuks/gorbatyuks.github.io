/**
 * Created by ≈жик on 18.12.2015.
 */
function Factory(color,size){
    this.color = color || 'blue';
    this.size = 600;

    this.name = this.color + this.size;
    this.fill = function(vol, temp){
        this.vol = vol;
        this.temp = temp;
    }
}
var cup1 = new Factory('blue', 1000);
cup1.fill(300, 90);
var stacan = {color: 'transparent'};
cup1.fill.call(stacan, 600, 60)

console.log(cup1);
console.log(stacan);