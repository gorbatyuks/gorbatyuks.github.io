var arr = [ 2, 34, 'kolbasa', 1, 6, 'sosiska', 56, 33, 'pirozhenka', 76, 12 ];

arr.sort(function (a, b) {

    if (+a && +b) {
        return 0;
    } else
    if (+b) {
        return -1;
    } else {
        return 1;
    }

});


console.log(arr);