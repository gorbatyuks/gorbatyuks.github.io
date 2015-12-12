function strLength(str){
    if(str.length<=19){
        console.log(str);}else{
        console.log(str.substr(0,20)+'...');
    }
}
strLength('Lorem ipsum dolor sit amet, consectetur adipisicing elit. ');