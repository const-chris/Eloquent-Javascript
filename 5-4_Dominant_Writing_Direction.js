const SCRIPTS = require('./5-X_scripts.js');

const text = '英国的狗说"woof", 俄罗斯的狗说"тяв", ࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠࢠ:';

console.log(dominantDirection(text));

function dominantDirection(text) {
	let direction = countBy(text, char => {
		let script = characterScript(char.codePointAt(0));
		return script ? script.direction : 'none';
	}).filter(({name}) => name !== 'none')
		.reduce((a, b) => a.count > b.count ? a : b);

	return direction;
}

function countBy(items, groupName) {
	let counts = [];
	for (let item of items) {
		let name = groupName(item);
		let known = counts.findIndex(c => c.name == name);
		if (known == -1) {
			counts.push({name, count: 1});
		} else {
			counts[known].count++;
		}
	}
	return counts;
}

function characterScript(code) {
	for (let script of SCRIPTS) {
		if (script.ranges.some(([from, to]) => {
			return code >= from && code < to;
		})) {
			return script;
		}
	}
	return null;
}
