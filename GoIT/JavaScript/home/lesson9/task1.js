/**
 * Created by ���� on 01.12.2015.
 */
function sumArgs() {
    /* ��� ��� */
    return [].reduce.call(arguments, function(a,b){
        return a+b;
    });
}

alert( sumArgs(1, 2, 3) );