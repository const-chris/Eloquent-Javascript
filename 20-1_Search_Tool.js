const { readFile, stat, readdir } = require("fs");

let [_, f, regexp, ...files] = process.argv;

function nodeGrep(regexp, ...files) {
	for (let file of files) {
		stat(file, (error, stats) => {
			if (error) throw error;
			let isDir = stats.isDirectory();
			if (isDir) {
				readdir(file, (error, contents) => {
					if (error) throw error;
					for (let i = 0; i < contents.length; i++) {
						contents[i] = file + '/' + contents[i];
					}
					nodeGrep(regexp, ...contents);
				});
			} else {
				readFile(file, "utf8", (error, text) => {
					if (error) throw error;
					let found = RegExp(regexp).test(text, 'g');
					if (found) console.log(file);
				});
			}
		});
	}
}

nodeGrep(regexp, ...files);
