const treeGraph = require('./22_fast');
const { cons, arrayFromList } = require('./Linked_List');

function findPath(a, b) {
	if (a == b) return [a];
	let paths = new Map();
	paths.set(a, cons(a, null));
	// paths.set(a, [a]);
	for (let [at, via] of paths) {
		for (let next of at.edges) {
			if (next == b) {
				let path = cons(next, via);
				// via.push(next);
				return arrayFromList(path);
				// return via;
			}
			if (paths.has(next)) continue;
			paths.set(next, cons(next, via));
			// paths.set(next, [...via, next]);
		}
	}
}

// let graph = treeGraph(4, 4);
// let root = graph[0], leaf = graph[graph.length - 1];
// console.log(findPath(root, leaf).length);
// // → 4

// leaf.connect(root);
// console.log(findPath(root, leaf).length);
// // → 2

module.exports = findPath;
