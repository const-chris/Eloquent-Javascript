const { writeFile } = require("fs");
const { readFile } = require("fs").promises;

exports.backup = function(data) {
	writeFile('backup.txt', data, (err) => {
		if (err) throw err;
	});
}

exports.restoreFromBackup = function() {
	return new Promise((resolve, reject) => {
		resolve(readFile('backup.txt', 'utf8'));
	});
}
