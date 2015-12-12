var obj = {
    className: 'my menu menu'
};

function removeClass(obj, cls){
    var test = obj.className.split(' ');
    var result = [];
    for ( var i = 0; i<test.length; i++){
        if (test[i] != cls) result.push(test[i]);
    }
    obj.className = result.join(' ');
    }

removeClass(obj, 'menu');
console.log (obj.className);