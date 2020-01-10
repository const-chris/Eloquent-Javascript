const treeGraph = require('./22_fast');

function findPath(a, b) {
  let paths = [[a]];
  for (let path of paths) {
    let end = path[path.length -1];
    if (end == b) return path;
    for (let next of end.edges) {
      if (paths.every(path => !path.includes(next))) {
        let newPath = path.concat([next]);
        paths.push(newPath);
      }
    }
  }
}

let graph = treeGraph(4, 4);
let root = graph[0], leaf = graph[graph.length - 1];
console.log(findPath(root, leaf).length);
// → 4

leaf.connect(root);
console.log(findPath(root, leaf).length);
// → 2

module.exports = findPath;
