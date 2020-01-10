const myObj = {
	thing1: 'a',
	hasOwnProperty: 'b'
};

console.log(Object.hasOwnProperty.call(myObj, 'thing1'));
console.log(Object.hasOwnProperty.call(myObj, 'hasOwnProperty'));
console.log(Object.hasOwnProperty.call(myObj, 'otherProperty'));


const anotherObj = new Map([['thing1', 'a'], ['has', 'b']]);

console.log(anotherObj.has('has'));
