/**
 * Created by ≈жик on 20.10.2015.
 */
var image = {
    width: 100,
    height: 400,
    title: 'Cool image'
};

function multiplyNumeric(x){
    for(var key in x){
        if (typeof(x[key])=="number" ) x[key]*=2;
    }
    console.log(image);
}

multiplyNumeric(image);
