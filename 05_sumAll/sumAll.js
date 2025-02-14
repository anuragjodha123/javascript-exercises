const sumAll = function(firstInt, lastInt) {
  // use the sum of a sequence formula
  // S = n/2 (1st term + last term)
  if (!Number.isInteger(firstInt) || !Number.isInteger(lastInt)) return "ERROR";
  if (firstInt < 0 || lastInt < 0) return "ERROR";

  let numberOfInts = (lastInt > firstInt) ? (lastInt - firstInt) + 1 : (firstInt - lastInt) + 1; 
  let sumOfInts = (numberOfInts/2)*(firstInt + lastInt);
  return sumOfInts;

// Note: (after seeing the official solution) my code is too messy, isn't very readable
};

// Do not edit below this line
module.exports = sumAll;
