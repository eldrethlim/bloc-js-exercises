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
	return !(module.exports.inBetween(10,number,20) || module.exports.inBetween(43,number,75) || module.exports.inBetween(2,number,5))
};

module.exports.nameAndPrice = function(name, price) {
	return (name == "NYTimes" || name == "LATimes") && price >= 1;
};