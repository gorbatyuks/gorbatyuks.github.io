/**
 * Created by ���� on 01.12.2015.
 */
function work(a) {
   }

function makeLogging(funk, log) { /* ��� ��� */
    function  wrap(a){
        log.push([].slice.call(arguments));
        return funk.apply(this, arguments);
    }
    return wrap;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, ��������� � log
work(5); // 5, ��������� � log

for (var i = 0; i < log.length; i++) {
    alert( '���:' + log[i] );
}