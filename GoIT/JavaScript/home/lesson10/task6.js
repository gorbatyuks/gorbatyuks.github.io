/**
 * Created by ≈жик on 01.12.2015.
 */
function returnType(str){
    return typeof(str);
}
console.log(returnType({}));
console.log(returnType(true));
console.log(returnType(function(){return 5;}));
console.log(returnType(5));
console.log(returnType('dfhdfg'));
console.log(returnType(undefined));