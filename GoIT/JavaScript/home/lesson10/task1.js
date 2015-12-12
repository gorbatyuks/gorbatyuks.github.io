/**
 * Created by ≈жик on 01.12.2015.
 */
var obj = {
    person1Age: 20,
    person1Name: 'Ivanov',
    person2Age: 30,
    person2Name: 'Petrov',
    person3Age: 40,
    person3Name: 'Sidorov',
    extractNumber: function(){
        var result1=[];
        for (var key in obj) {if (!isNaN(obj[key]) )                 result1.push(obj[key]);  }
        console.log("Ages: " + result1); },
    extractString: function(){
        var result2=[];
        for (var key in obj) {if ( ((typeof (obj[key])) == "string") )     result2.push(obj[key]);  }
        console.log("Names: " + result2); }
};


obj.extractNumber();
obj.extractString();
