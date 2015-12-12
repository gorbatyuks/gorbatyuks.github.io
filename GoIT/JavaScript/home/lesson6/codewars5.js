//Take a Ten Minute Walk
function isValidWalk(walk) {
    var n =0, s =0, e =0, w = 0;
    for (var i = 0; i < walk.length; i++) {
        switch (walk[i]) {
            case 'n':
                n += 1;
                break;
            case 's':
                s += 1;
                break;
            case 'e':
                e += 1;
                break;
            case 'w':
                w += 1;
                break;
        }
    }
    if ((n + s + e + w) != 10) return false;
    else if ((n + w) == (e + s)) return true;
    else return false;
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','w','e' ]));