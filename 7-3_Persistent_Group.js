class PGroup {
	constructor(members) {
		this.members = members;
	}
	add(value) {
		if (this.has(value)) return this;
		else return new PGroup(this.members.concat([value]));
	}
	delete(value) {
		if (!this.has(value)) return this;
		else return new PGroup(this.members.filter(v => v !== value));
	}
	has(value) {
		return this.members.includes(value);
	}
};

PGroup.empty = new PGroup([]);

console.log(PGroup.empty);
let myPGroup = PGroup.empty.add(3);
console.log(myPGroup);
myPGroup = myPGroup.add(6);
console.log(myPGroup);
myPGroup = myPGroup.delete(3);
console.log(myPGroup);
