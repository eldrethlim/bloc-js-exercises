module.exports.addItem = function(item,list){
  if (list.indexOf(item) == -1) {
    list.push(item);
    return list;
  }
  else {
    return list;
  }
};

module.exports.reverseSortedList = function(array){
  return array.sort().reverse();
};