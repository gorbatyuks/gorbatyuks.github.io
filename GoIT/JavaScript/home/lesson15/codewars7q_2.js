/**
 * Created by ���� on 23.12.2015.
 */
//http://www.codewars.com/kata/singleton-pattern
//������ ���������

var Singleton = function(){
    // implement singleton Class
    if (Singleton.__instan�e){
        return Singleton.__instan�e;
    }
    Singleton.__instan�e = this;
};