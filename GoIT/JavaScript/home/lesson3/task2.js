var i; lastNumber=10;
out: for(i=2;i<=lastNumber; i++){
    for (var j=2; j<i; j++){
        if(i%j == 0){
            continue out;
        }
    }
    console.log(i);
}