module.exports.getKeys = function(object){
  array = [];
  for (var property in object) {
    array.push(property);
  }
  return array;
};

module.exports.getValues = function(object){
  array = [];
  for (var property in object) {
    array.push(object[property]);
  }
  return array;
}

module.exports.objectToArray = function(object){
  array = [];
  for (var property in object) {
    array.push(property + " is " + object[property]);
  }
  return array;
}