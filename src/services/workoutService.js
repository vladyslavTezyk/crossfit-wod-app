import { v4 } from "uuid";
import Workout from "../database/Workout.js";

function getAllWorkouts() {
  const workouts = Workout.getAllWorkouts();
  return workouts;
}

function getOneWorkout() {
  return;
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

function updateOneWorkout() {
  return;
}

function deleteOneWorkout() {
  return;
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
