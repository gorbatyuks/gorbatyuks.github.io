function fib(n){
    fib1=1;
    fib2=1;
    var i=2;
    while(i<n){
        fibSum=fib1+fib2;
        fib1=fib2;
        fib2=fibSum;
        i++;
    }
    console.log(fibSum);
}
fib(3);
fib(7);
fib(77);