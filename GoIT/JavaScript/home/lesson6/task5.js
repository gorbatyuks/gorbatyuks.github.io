function isPal(word){
    word = word.toLowerCase().split('');
    for (var i = 0; i<word.length; i++){

        if (word[i] == " ") word.splice(i,1), i-=1;
        else continue; }

    var original = word.join('').concat();
    var originalReverse = word.concat().reverse().join('');
    return  original == originalReverse;

    }

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
