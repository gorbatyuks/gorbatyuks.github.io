/**
 * Created by ≈жик on 03.11.2015.
 */
//Add property to every object in array
function addAnswer(arr) {
    arr.forEach(function (item) {
        item.usersAnswer = null;
    });
    return arr;
}
var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];
console.log(addAnswer(questions));

