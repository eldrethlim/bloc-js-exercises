module.exports.sumNumbers = function(array){
  var x = 0;
  for (i = 0; i < array.length; i++) {
    x += array[i];
  }
  return x;
};

module.exports.splitAndLowerCaseString = function(inputString) {
  return inputString.toLowerCase().split(",");
};

module.exports.addIndex = function(array) {
  var index = [];
  for (i = 0; i < array.length; i++) {
    index[i] = i + " is " + array[i];
  }
  return index;
};