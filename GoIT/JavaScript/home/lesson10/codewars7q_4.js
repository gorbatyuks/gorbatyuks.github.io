/**
 * Created by ≈жик on 04.12.2015.
 */
//http://www.codewars.com/kata/complete-the-pattern-number-10-parallelogram
//Complete The Pattern #10 - Parallelogram

function pattern(n){
    var output="";
    // Happy Coding ^_^
    var result = [];
    var i,line;
    if(n<0){
        return "";
    }
    if ( n>=0 && n <100){
        line = Array(n).join(' ');
        for (i=1; i<=n; i++){
            line +=(i%10);
        }
        result.push(line);

        for(i =1; i<n; i++)  {
            result.push(result[i-1].substring(1)+" ");
        }
        output = result.join('\n');
    } else {return '';}
    return output;
}
console.log(pattern(5));