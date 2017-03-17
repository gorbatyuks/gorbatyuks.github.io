/**
 * Created by Åæèê on 23.12.2015.
 */
//http://www.codewars.com/kata/singleton-pattern
//ÏÀÒÅĞÍ ÑÈÃÍËÒÎĞÍ

var Singleton = function(){
    // implement singleton Class
    if (Singleton.__instanñe){
        return Singleton.__instanñe;
    }
    Singleton.__instanñe = this;
};