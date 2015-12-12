function random(min, max){
    var ran = min + Math.random()*(max-min);
    ran= Math.round(ran);
    return ran;

}
console.log(random(1, 11));