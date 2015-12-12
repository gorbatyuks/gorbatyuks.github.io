/**
 * Created by ≈жик on 03.11.2015.
 */
//Return the Missing Element
function getMissingElement(superImportantArray){
    function sum(a,b){
        var sumNumber = 0;
        for (var i = a; i<= b; i++ ){
            sumNumber+= i;
        }
        return sumNumber;
    }
    var result = superImportantArray.reduce(function(sum, current) {
        return sum + current;
    });
    return (sum(0,9) - result );
}