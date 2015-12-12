/**
 * Created by ≈жик on 04.11.2015.
 */
var obj = {
    className: 'open menu'
};
function addClass(obj, item){
    var forSerch = obj.className.split(' ');
    for(i=0; i<forSerch.length; i++){
        if(forSerch[i] == item ) return;
    }
    forSerch.push(item);
    obj.className = forSerch.join(' ');
}
addClass(obj, 'new');
addClass(obj, 'open');
addClass(obj, 'me');
console.log(obj.className);