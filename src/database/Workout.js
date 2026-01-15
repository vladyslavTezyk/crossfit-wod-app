import DB from "./db.json" with { type: "json" };
import { saveToDatabase } from "./utils.js";

function getAllWorkouts() {
  return DB.workouts;
}

function getOneWorkout(id) {
  for (const workout of DB.workouts) {
    if (workout.id === id) {
      return workout;
    }
  }
  return null;
}

function createNewWorkout(newWorkout) {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
  if (isAlreadyAdded) {
    return;
  }
  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
};
