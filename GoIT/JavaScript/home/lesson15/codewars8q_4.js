/**
 * Created by Åæèê on 23.12.2015.
 */
//http://www.codewars.com/kata/object-oriented-piracy
/*Ahoy matey!

 You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty eficient system to identify ships with a heavy booty on board.

 Unfortunattely for you, people weigh a lot this days, so how do you know if a ship if full of gold and not people?*/
function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
}


Ship.prototype.isWorthIt = function(){
    if (this.draft - this.crew*1.5 >20) {return true;}
    else{return false;}
};