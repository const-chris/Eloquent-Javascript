// node --experimental-modules 7-2...
// strange behavior where it runs the call to compareRobots from ./7-1...
import { findRoute, roadGraph, goalOrientedRobot } from './7_chapter';
import { compareRobots } from './7-1_Measuring_a_Robot';

function myRobot({place, parcels}, route) {
  let routes = [];
  if (route.length == 0 || routes.length == 0) {
    for (let parcel of parcels) {
      if (parcel.place != place) {
        routes.push(findRoute(roadGraph, place, parcel.place));
      } else {
        routes.push(findRoute(roadGraph, place, parcel.address));
      }
    }
  }
  route = routes.reduce((a, v) => a.length < v.length ? a : v);
  return {direction: route[0], memory: route.slice(1)};
}

//runRobotAnimation(VillageState.random(), myRobot, []);
compareRobots(myRobot, [], goalOrientedRobot, []);
