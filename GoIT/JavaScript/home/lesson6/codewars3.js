/**
 * Created by ≈жик on 03.11.2015.
 */
//Find Your Villain Name
function getVillainName(birthday){
    var mounth =["The Evil", "The Vile", "The Cruel", "The Trashy", "The Despicable", "The Embarrassing",
        "The Disreputable", "The Atrocious", "The Twirling", "The Orange", "The Terrifying", "The Awkward"];
    var day = ["Mustache", "Pickle", "Hood Ornament", "Raisin", "Recycling Bin", "Potato", "Tomato", "House Cat",
        "Teaspoon", "Laundry Basket"];
    return mounth[birthday.getMonth()]+' '+day[(birthday.getDate()+'').substr(-1)];
}
var birthday = new Date (1988,10,18);
console.log(getVillainName(birthday));