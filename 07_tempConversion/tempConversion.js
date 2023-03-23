const convertToCelsius = function(Fahr) {
  let output=((Fahr-32)*5)/9;
 	oulength=output.toString().length
  output=Number(output)
  if (oulength>1){
  output=output.toFixed(1);
  return Number(output);
  }else{
  return Number(output)
  }
}

const convertToFahrenheit = function(cels) {
  let output1=(1.8*cels)+32;
  oulength=output1.toString().length
  output1=Number(output1)
  if(oulength>1){
  output1=output1.toFixed(1);
  return Number(output1)}
  else{
    return Number(output1)
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
