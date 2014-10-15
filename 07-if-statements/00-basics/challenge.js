module.exports.favoriteNumber = function(fav, guess){
  if (guess > fav) {
    return "Too high";
  }
  else if (guess < fav) {
    return "Too low";
  }
  else {
    return "You got it!";
  }
};
module.exports.checkLock = function(num1,num2,num3,num4){
  if ((num1 == 3 || num1 == 5 || num1 == 7) && (num2 == 2) && (num3 < 101 && num3 > 4) && (num4 < 9 || num4 > 20)) {
    return "correct";
  }
  else {
    return "incorrect";
  }
};
  
module.exports.canIGet = function(item,money){
  if (item == "MacBook Air" && money >= 999) {
    return true;
  }
  else if (item == "MacBook Pro" && money >= 1299) {
    return true;
  }
  else if (item == "Mac Pro" && money >= 2499) {
    return true;
  }
  else if (item == "Apple Sticker" && money >= 1) {
    return true;
  }
  else {
    return false;
  }
};