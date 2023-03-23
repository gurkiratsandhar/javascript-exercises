const removeFromArray = function(array,num) {
    let arrLength=array.length
  let arglength=arguments.length
  let newarray= new Array()
  for (let q=1; q<(arrLength+1);++q){
    newarray[q-1]=arguments[q]
  }
  let newlength=newarray.length
  for (let j=0; j<newlength;j++){
    let numb=newarray[j];
  	for(let i=0; i<arrLength; i++){
   	 if(array[i]===numb){
    	  array.splice(i,1)
   	 }
  	}
 	 
}
return array
};

// Do not edit below this line
module.exports = removeFromArray;
