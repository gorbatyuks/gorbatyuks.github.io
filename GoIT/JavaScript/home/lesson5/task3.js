function calcSum(){
    var arr = [];
    while (true){
        var enterNumber = prompt("Enter number", '');
        if (!enterNumber) break;
        else if(enterNumber== null ) break;
        else if(!isFinite(enterNumber)) break;
        else arr.push(+enterNumber);
    }
    var sunResult = arr.reduce(function(sum, current) {
        return sum + current;
    });
    return sunResult;

}
console.log(calcSum());