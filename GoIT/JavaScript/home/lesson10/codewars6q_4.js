/**
 * Created by ≈жик on 05.12.2015.
 */
//The main idea is to count all the occuring characters(UTF-8) in string. If you have string like this aba then the result should be { 'a': 2, 'b': 1 }

//What if the string is empty ? Then the result should be empty object literal { }
//http://www.codewars.com/kata/count-characters-in-your-string
function count (string) {
    var str= string.split('');
    var result = {};
    str.forEach(function(elem) {
        if (!result[elem]) {
            result[elem] = 1;
        } else {
            result[elem] += 1;
        }
    });

    return result;
}
console.log (count('aba'));