/**
 * Created by ≈жик on 04.11.2015.
 */
function isEmpty(obj) {
    var counter = 0;
    for(var key in obj){
        counter ++;
    }
    return counter == 0;
}
var todoList = {};
console.log( isEmpty(todoList) );

todoList['homework'] = 'lesson5';
console.log( isEmpty(todoList) );