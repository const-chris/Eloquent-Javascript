class MultiplicatorUnitFailure extends Error {};

function primitiveMultiply(a, b) {
	if (Math.random() < 0.2) return a * b;
	else throw new MultiplicatorUnitFailure();
}

function multiplyUntilSuccess(a, b) {
	while (true) {
		try {
			console.log(`trying to multiply ${a} and ${b}...`);
			return primitiveMultiply(a, b);
		} catch(e) {
			if (e instanceof MultiplicatorUnitFailure) {
				console.log('dammit, gotta try again.');
				continue;
			}
			else throw e;
		}
	}
}

console.log(multiplyUntilSuccess(5, 6));
