/**
 * Created by ≈жик on 04.12.2015.
 */
//reverseIt
//http://www.codewars.com/kata/reverseit-1
function reverseIt(data){

    if (typeof data == 'number' )
    {
        var result  = String(data).split('').reverse().join('');
        return +result;}
    if (typeof data == 'string')
    {return data.split('').reverse().join('');}
    else return data;
}
console.log(reverseIt("1234"));