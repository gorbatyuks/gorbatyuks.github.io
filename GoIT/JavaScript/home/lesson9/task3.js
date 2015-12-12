/**
 * Created by ≈жик on 01.12.2015.
 */
function work(a) {
   }

function makeLogging(funk, log) { /* ваш код */
    function  wrap(a){
        log.push([].slice.call(arguments));
        return funk.apply(this, arguments);
    }
    return wrap;
}

var log = [];
work = makeLogging(work, log);

work(1); // 1, добавлено в log
work(5); // 5, добавлено в log

for (var i = 0; i < log.length; i++) {
    alert( 'Ћог:' + log[i] );
}