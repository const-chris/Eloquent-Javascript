const box = {
	locked: true,
	unlock() { this.locked = false },
	lock() { this.locked = true },
	_content: [],
	get content() {
		if (this.locked) throw new Error('Locked!');
		return this._content;
	}
};

function withBoxUnlocked(f) {
	let initiallyLocked = box.locked;
	box.unlock();
	try {
		return f();
	}
	finally {
		if (initiallyLocked) box.lock();
	}
}

// tests
withBoxUnlocked(function() {
	box.content.push('gold piece');
});

try {
	withBoxUnlocked(function() {
		throw new Error('Pirates on the horizon! Abort!');
	});
} catch(e) {
	console.log('Error raised: ', e);
}

console.log(box.locked);
withBoxUnlocked(function() {
	console.log(box.content);
});
