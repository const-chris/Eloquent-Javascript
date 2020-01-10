// node --experimental-modules 7-1...
import { VillageState, goalOrientedRobot, routeRobot } from './7_chapter';

export function compareRobots(robot1, memory1, robot2, memory2) {
	const results1 = [],
	      results2 = [];
	for (let i = 0; i < 100; i++) {
		const test = VillageState.random();
		results1.push(run(test, robot1, memory1));
		results2.push(run(test, robot2, memory2));
	}
	const avg1 = results1.reduce((a, v) => a + v) / 100,
	      avg2 = results2.reduce((a, v) => a + v) / 100;
	console.log(`Robot 1 finished 100 tests in an average of ${avg1} turns per test.`);
	console.log(`Robot 2 finished 100 tests in an average of ${avg2} turns per test.`);
}

export function run(state, robot, memory) {
	for (let turn = 0; ; turn++) {
		if (state.parcels.length == 0) {
			return turn;
		}
		let action = robot(state, memory);
		state = state.move(action.direction);
		memory = action.memory;
	}
}

//compareRobots(routeRobot, [], goalOrientedRobot, []);
