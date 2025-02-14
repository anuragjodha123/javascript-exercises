const removeFromArray = function(array, ...args) {
  let inputArr = [...array];

  for (const elementToRemove of args) {
    let i = 0;
    for (i = 0; i < inputArr.length; i++) {
      if (inputArr[i] === elementToRemove) {
        inputArr.splice(i, 1);
        i = 0;
      } 
    }
  }

  return inputArr;
};

// [] rethink and rewrite the entire logic
// console.log(removeFromArray(['a', 'b', 'b', 'c'], 'b'))

// Do not edit below this line
module.exports = removeFromArray;
