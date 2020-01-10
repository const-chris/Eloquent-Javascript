class Vec {
	constructor(x, y) {
		this.x = x,
		this.y = y
	}
	plus(vector) {
		return new Vec(this.x + vector.x, this.y + vector.y);
	}
	minus(vector) {
		return new Vec(this.x - vector.x, this.y - vector.y);
	}
	get length() {
		return Math.sqrt(this.x ** 2 + this.y ** 2);
	}
}

const myVec = new Vec(3,4);
const myOtherVec = new Vec(1,1);
console.log(myVec.length);
console.log(myVec.plus(myOtherVec));
