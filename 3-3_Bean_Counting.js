const countBs = function(str) {
	return countChar(str, 'B');
};

function countChar(str, character) {
	let count = 0;
	for (let i = 0; i < str.length; i++) {
		if (str[i] === character) count ++;
	}
	return count;
}

console.log(countBs('BaBaBlackSheep'));
