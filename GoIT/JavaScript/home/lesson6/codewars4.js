// Created by ≈жик on 03.11.2015.
//Use reduce() to calculate the sum of the values in an array

 function sum(array) {
 var result = array.reduce(function(sum, current) {
  return sum + current;
 });
  return result;
}

var someNumbers = [1,2,3,4,5,6,7,8,9,10];
console.log(sum(someNumbers));