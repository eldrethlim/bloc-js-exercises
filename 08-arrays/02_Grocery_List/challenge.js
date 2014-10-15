module.exports.addItem = function(item,list){
  itemIsHere = false;
  
  for (i = 0; i < list.length; i++) {
    if (list[i] == item)
      itemIsHere = true;
  };

  if (itemIsHere == true) {
    return list
  }
  else {
    list.push(item);
    return list;
  }
};

module.exports.reverseSortedList = function(array){
  array.sort().reverse();
  return array;
};