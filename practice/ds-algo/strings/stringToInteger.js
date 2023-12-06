function customParseInt(str) {
    let intValue = 0;
    let sign = 1;
    let startIndex = 0;
  
    if (str[0] === "-") {
      sign = -1;
      startIndex = 1;
    }
  
    for (let i = startIndex; i < str.length; i++) {
      const charCode = str.charCodeAt(i) - 48; // Convert character to integer value
      if (charCode >= 0 && charCode <= 9) {
        intValue = intValue * 10 + charCode;
      } else {
        // If the character is not a digit, break or handle the error as needed.
        break;
      }
    }
  
    return intValue * sign;
  }
  
  const str = "42"; // Replace "42" with your desired string
  
  const intValue = customParseInt(str);
  
  if (!isNaN(intValue)) {
    console.log(intValue);
  } else {
    console.log("Conversion failed. The input is not a valid integer.");
  }
  