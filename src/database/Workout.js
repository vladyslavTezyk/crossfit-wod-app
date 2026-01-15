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

function updateOneWorkout(workoutId, changes) {
  const indexForUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexForUpdate === -1) {
    console.log("indexForUpdate ", indexForUpdate);
    return;
  }

  const updatedWorkout = {
    ...DB.workouts[indexForUpdate],
    ...changes,
    updatedAt: new Date(),
  };

  console.log("updatedWorkout DAL", updatedWorkout);

  DB.workouts[indexForUpdate] = updatedWorkout;
  saveToDatabase(DB);
  return updatedWorkout;
}

function deleteOneWorkout(workoutId) {
  const indexForDelete = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexForDelete === -1) {
    return;
  }

  DB.workouts.splice(indexForDelete, 1);
  saveToDatabase(DB);
  return workoutId;
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
