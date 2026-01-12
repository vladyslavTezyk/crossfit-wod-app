import workoutService from "../services/workoutService"

function getAllWorkouts(req,res){
    const allWorkouts = workoutService.getAllWorkouts()
    res.send('Get all workouts')
}

function getOneWorkout(req, res){
    const workout = workoutService.getOneWorkout()
    res.send(`Get an existing workout ${req.params.workoutId}`)
}

function createNewWorkout(req, res){
    const createdWorkout = workoutService.createNewWorkout()
    res.send('Create a new workout')
}

function updateOneWorkout(req, res){
    const updatedWorkout = workoutService.updateOneWorkout()
    res.send('Update an existing workout')
}

function deleteOneWorkout(req, res){
    const deletedWorkout = workoutService.deleteOneWorkout()
    res.send('Delete an existing workout')
}

export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}