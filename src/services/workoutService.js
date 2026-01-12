import Workout from '../database/Workout.js'

function getAllWorkouts(){
    const workouts = Workout.getAllWorkouts()
    return workouts;
}

function getOneWorkout(){
    return;
}

function createNewWorkout(){
    return;
}

function updateOneWorkout(){
    return;
}

function deleteOneWorkout(){
    return;
}

export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}