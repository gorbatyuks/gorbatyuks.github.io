function checkSpam(x){
    x=x.toLowerCase();
    if(x.indexOf('sex')<0 && x.indexOf('spam')<0){
        console.log('There are no spam');
    }else{
        console.log('It is spam!');
    }
}
checkSpam('get new Sex videos');
checkSpam('[SPAM] How to earn fast money?');
checkSpam('New PSD template');