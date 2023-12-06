var gcdOfStrings = function(str1, str2) {
   
    let divisibleStr = "";
    for(let i=0; i<Math.min(str1.lenght, str2.length); i++) {
        if(str1[i] === str2[i]) {
            divisibleStr+=str1[i];
        } else {
            return divisibleStr;
        }
    }
    return divisibleStr;
};


console.log('gcdOfStrings ==>', gcdOfStrings("ABCABC", "ABC"))