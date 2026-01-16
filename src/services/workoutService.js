import { v4 } from "uuid";
import Workout from "../database/Workout.js";

function getAllWorkouts(filterParams) {
  try {
    const workouts = Workout.getAllWorkouts(filterParams);
    return workouts;
  } catch (error) {
    throw error;
  }
}

function getOneWorkout(workoutId) {
  try {
    const workout = Workout.getOneWorkout(workoutId);
    return workout;
  } catch (error) {
    throw error;
  }
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

  try {
    const createdWorkout = Workout.createNewWorkout(newWorkoutToInsert);
    return createdWorkout;
  } catch (error) {
    throw error;
  }
}

function updateOneWorkout(workoutId, changes) {
  try {
    const updatedWorkout = Workout.updateOneWorkout(workoutId, changes);
    return updatedWorkout;
  } catch (error) {
    throw error;
  }
}

function deleteOneWorkout(workoutId) {
  try {
    Workout.deleteOneWorkout(workoutId);
  } catch (error) {
    throw error;
  }
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
