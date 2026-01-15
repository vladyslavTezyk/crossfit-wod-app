import { v4 } from "uuid";
import Workout from "../database/Workout.js";

function getAllWorkouts() {
  const workouts = Workout.getAllWorkouts();
  return workouts;
}

function getOneWorkout(id) {
  const workout = Workout.getOneWorkout(id);
  return workout;
}

function createNewWorkout(newWorkout) {
  const id = v4();
  const createdAt = new Date();
  const updatedAt = new Date();

  const newWorkoutToInsert = {
    ...newWorkout,
    id,
    createdAt,
    updatedAt,
  };

  const createdWorkout = Workout.createNewWorkout(newWorkoutToInsert);
  return createdWorkout;
}

function updateOneWorkout(workoutId, changes) {
  const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
  //   console.log("updatedWorkout ", updatedWorkout);
  return updatedWorkout;
}

function deleteOneWorkout(workoutId) {
  const deletedWorkout = Workout.deleteOneWorkout(workoutId);
  return deletedWorkout;
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
