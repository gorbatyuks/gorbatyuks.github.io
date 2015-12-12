/**
 * Created by ≈жик on 04.12.2015.
 */
    //Basic JS - Calculating averages
    // http://www.codewars.com/kata/basic-js-calculating-averages
    
var Calculator = {
    average: function() {
        // Your code here...
        var sum =0, count = 0;
        for (var i = 0; i< arguments.length; i++){
            sum += arguments[i];
            count ++;}
        if (count === 0) return 0;
        else return sum/count;

    }
};