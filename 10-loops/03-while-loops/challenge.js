module.exports.stream = function(conditionalFn, actionFn){
  while (conditionalFn() == true) {
    actionFn();
  };
};

module.exports.sumNumbers = function(array){
  x = 0;
  sum = 0;
  while (x < array.length) {
    sum += array[x];
    x += 1;
  }
  return sum;
};