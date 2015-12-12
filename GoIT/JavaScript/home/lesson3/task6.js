function pow(x, n) {
    var i=1;
    for (var j = 1; j <= n; j++) {
        i *=x;
    }
    console.log(i);
}
pow(1, 100);
pow(3, 2);