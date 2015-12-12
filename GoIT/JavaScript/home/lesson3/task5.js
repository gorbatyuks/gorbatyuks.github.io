/*var textEven = ' #';
var textOdd = '# ';
var areaWidth = 8;
for (var i = 1; i < areaWidth / 2; i++) {
    textEven += ' #';
}
for (var j = 1; j < areaWidth / 2; j++) {
    textOdd += '# ';
}

for (var a = 1; a <= areaWidth; a++) {
    switch (a % 2) {
        case 0:
            console.log(textEven);
            break;
        default:
            console.log(textOdd);
            break;
    }
}
//http://codepen.io/puzankov/pen/epEaEY?editors=001*/
var size = 8;
var myBoard ="";
for(i=1; i<=size*size + size; i++) {
    if (i % (size+1) === 0) {
        myBoard += "\n";
    }
    else if ( i % 2 != 0) {
        myBoard += "#";
    }
    else {
        myBoard += " ";
    }
}
console.log(myBoard);