const reverseString = function(text) {
  let reverseTextArr = [];

  // reverses text
  for (let i = 1; i <= text.length; i++){
    let reverseOrder = text.length - i;
    reverseTextArr.push(text[reverseOrder]);
  }

  // converts to string
  let reverseText = reverseTextArr.join('');

  return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
