const leapYears = function(year) {
// check if divisible by 100
// if yes -> check divisible if divisible by 400
// if also yes -> leap year "wow"
// else check if divisible by 4
// if yes ->  leap year "wow"
// else not leap year

if (year % 100 === 0) {
  if (year % 400 === 0) return true;
  else return false;
} else if(year % 4 === 0) {
  return true;
} else {
  return false;
}

};

// Do not edit below this line
module.exports = leapYears;
