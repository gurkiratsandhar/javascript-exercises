const sumAll = function(num1,num2) {
    array=[]
    let sum=0
    if(num1 > 0 && num2 > 0 && typeof num1 =="number" && typeof num2 =="number"){
    if(num1>num2){
      while (num2<=num1){
        array.push(num2);
        ++num2;}
        
      }else if(num1<num2){
        while (num1<=num2){
          array.push(num1);
          ++num1;}
        }
    arrlength=array.length
    for (let i=0;i<arrlength;i++){
        sum+=Number(array[i])
    }
   
} else{
    sum="ERROR"
}
 return sum
}

// Do not edit below this line
module.exports = sumAll;
