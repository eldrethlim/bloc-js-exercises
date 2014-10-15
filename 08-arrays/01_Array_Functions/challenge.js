module.exports.reversePlusOne = function(array){
  array.reverse().unshift(1);
  return array;
};

module.exports.plusesEverywhere = function(array){
  return array.join("+");
};

module.exports.arrayQuantityPlusOne = function(array){
  return array.length+1;
};