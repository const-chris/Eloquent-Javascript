const min = (a, b) => a <= b ? a : b;

console.log(min(1,2), min(3,3), min(4,2));

// Now with unlimited arguments
const minV2 = (...args) =>
	args.reduce((accumulator, current) => {
		return accumulator <= current ? accumulator : current;
	});

console.log(minV2(1,2), minV2(3,3), minV2(4,2), minV2(1,2,3), minV2(3,2,2));
