/**
 * Created by ���� on 04.11.2015.
 */

function getWeekDay(date){
    var week = ['��', '��', '��', '��', '��', '��', '��'];
    return week[date.getDay()];
}
var date = new Date(2012,0,3); // 3 ������ 2012
console.log( getWeekDay(date) ); // ������ ������� '��'