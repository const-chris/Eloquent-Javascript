function deepEqual(a, b) {
	if (typeof a !== typeof b) return false;
	else if (typeof a !== 'object') return a === b;
	else if (a === null || b === null) return a === b;
	else if (Object.keys(a).length !== Object.keys(b).length) return false;
	else {
		for (let key of Object.keys(a)) {
			if (!deepEqual(a[key], b[key])) return false;
		}
		return true;
	}
}

// So. Many. Tests.
// Hopefully I thought of all the corner cases
console.log(                                      //Expected:
	deepEqual(1,1),                                   //true
	deepEqual([1,2,3], [1,2,3]),                      //true
	deepEqual(Math.max(1,2), Math.min(2,3)),          //true
	deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 }),        //true
	deepEqual({ a: 1, b: { c: 2, d: 2 } },
		        { a: 1, b: { c: 2, d: 2 } }),           //true
	deepEqual(1,2),                                   //false
	deepEqual([1,2,3], [1,2,4]),                      //false
	deepEqual([1,2,3], [1,2,3,3]),                    //false
	deepEqual(Math.max(1,0), Math.min(2,3)),          //false
	deepEqual({ a: 1, b: 3 }, { a: 1, b: 2 }),        //false
	deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 }),        //false
	deepEqual({ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }),  //false
	deepEqual({ a: 1, b: 2 }, null),                  //false
	deepEqual({}, null),                              //false
	deepEqual(undefined, null),                       //false
	deepEqual(0, null),                               //false
	deepEqual(undefined, 0)                           //false
);
