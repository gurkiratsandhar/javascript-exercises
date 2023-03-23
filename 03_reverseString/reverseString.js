const reverseString = function(string) {
    let strlength=string.length
    let reverse=""
    for (let i=0;i<=strlength;i++){
      reverse+=string.charAt(strlength-i)
    }
    return reverse
};

// Do not edit below this line
module.exports = reverseString;
