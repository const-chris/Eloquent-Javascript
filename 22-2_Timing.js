const findPath = require('./22-3_Optimizing');
const treeGraph = require('./22_fast');

let graph = treeGraph(5, 5);
let root = graph[0], leaf = graph[graph.length - 1];

let numTrials = 10000;
let start = Date.now();
for (let i = 0; i < numTrials; i++) {
	findPath(root, leaf).length;
}
let time = Date.now() - start;
let avgTime = time / numTrials;
console.log(`test took ${time / 1000} s, an average of ${avgTime} ms`);
