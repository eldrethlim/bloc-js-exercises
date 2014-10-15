module.exports.equalStrings = function(stringOne, stringTwo) {
	return stringOne == stringTwo;
};

module.exports.notEqual = function(one, two) {
	return one !== two;
};

module.exports.inBetween = function(lower, middle, upper) {
	return (upper >= middle) && (middle >= lower);
};

module.exports.outsideRanges = function(number) {
	return !((21 > number && number > 9) || (76 > number & number > 42) || (6 > number && number > 2))
};

module.exports.nameAndPrice = function(name, price) {
	return (name == "NYTimes" || name == "LATimes") && price >= 1;
};