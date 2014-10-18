module.exports.stream = function(conditionalFn, actionFn){
  while (conditionalFn()) {
    actionFn();
  };
};

module.exports.sumNumbers = function(array){
  var x = 0;
  var sum = 0;
  while (x < array.length) {
    sum += array[x];
    x += 1;
  }
  return sum;
};