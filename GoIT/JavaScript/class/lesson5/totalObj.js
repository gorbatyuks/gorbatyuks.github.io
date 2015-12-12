/**
 * Created by ≈жик on 04.11.2015.
 */
var sala = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};
function salaries (obj){
    var total= 0;
    for(var key in obj){
        total +=obj[key];
    }
    return total;
}
console.log(salaries(sala));