import DB from './db.json' with {type: 'json'}
import { saveToDatabase } from './utils.js'

function getAllWorkouts(){
    return DB.workouts
}

function createNewWorkout(newWorkout){
    const isAlreadyAdded = 
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1
    if(isAlreadyAdded){
        return
    }
    DB.workouts.push(newWorkout)
    saveToDatabase(DB)
    return newWorkout
}

export default {
    getAllWorkouts,
    createNewWorkout
}