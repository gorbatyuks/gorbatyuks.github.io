/**
 * Created by Ежик on 04.11.2015.
 */

function getWeekDay(date){
    var week = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
    return week[date.getDay()];
}
var date = new Date(2012,0,3); // 3 января 2012
console.log( getWeekDay(date) ); // Должно вывести 'вт'