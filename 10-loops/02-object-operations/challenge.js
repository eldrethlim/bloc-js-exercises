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
  var counter = 0;

  for (i = 0; i < array.length; i++) {
    if (object.hasOwnProperty(array[i])) {
      counter += 1;
    }
  }

  return (counter == array.length);
};