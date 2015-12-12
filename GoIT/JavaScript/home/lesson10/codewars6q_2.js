/**
 * Created by ≈жик on 04.12.2015.
 */

//Detect Pangram
//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence
// "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
//Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string) {
    var str = string.toUpperCase().split(' ').join("").split('').sort();
    var check = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var arr =[];
    if (str.length < 26) {
        return false;
    }
    else {
        for (var i = 0; i < check.length; i++) {
            var item = check[i];
            for (var j = 0; j < str.length; j++) {
                if (str[j] === item) {
                    arr.push(str[j]);
                    break;
                }
            }
        }
    }
    return arr.length === 26;
}

str ="The quick brown fox jumps over the lazy dog.";
console.log(isPangram(str));
