const sumAll = function(firstInt, lastInt) {
  // use the sum of a sequence formula
  // S = n/2 (1st term + last term)
  if (typeof(firstInt) == "number" && typeof(lastInt) == "number" 
      && parseInt(firstInt) === firstInt && parseInt(lastInt) === lastInt
      && firstInt*lastInt >= 0) 
  {
    let numberOfInts = (lastInt > firstInt) ? (lastInt - firstInt) + 1 : (firstInt - lastInt) + 1; 
    let sumOfInts = (numberOfInts/2)*(firstInt + lastInt);
    return sumOfInts;
  } else {
    return "ERROR";
  }

};

// Do not edit below this line
module.exports = sumAll;
