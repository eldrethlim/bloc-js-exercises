module.exports.copy = function(object){
  var newObject = {};
  for (var property in object) {
    newObject[property] = object[property];
  };
  return newObject;
};

module.exports.extend = function(dest, src){
  for (var property in src) {
    dest[property] = src[property];
  };
  return dest;
};

module.exports.hasElems = function(object, array){
  counter = 0;
  for (var property in object) {
    for (i = 0; i < array.length; i++) {
      if (property == array[i]) {
        counter += 1;
      }
    };
  };

  if (counter < array.length) {
    return false;
  }
  else {
    return true;
  }
};