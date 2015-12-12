/**
 * Created by ≈жик on 04.11.2015.
 */
function toCamelCase(str){
    var camelCase = str.split('-');
    for (i=1; i<camelCase.length; i++){
        camelCase[i] = camelCase[i].charAt(0).toUpperCase()+ camelCase[i].substring(1);
    }
    camelCase = camelCase.join('');
    return camelCase;

}
console.log(toCamelCase('background-color')); // 'backgroundColor';
console.log(toCamelCase('list-style-image')); // 'listStyleImage';
console.log(toCamelCase('-webkit-transition'));
