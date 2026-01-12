function getAllWorkouts(req,res){
    res.send('Get all workouts')
}

function getOneWorkout(req, res){
    res.send(`Get an existing workout ${req.params.workoutId}`)
}

function createNewWorkout(req, res){
    res.send('Create a new workout')
}

function updateOneWorkout(req, res){
    res.send('Update an existing workout')
}

function deleteOneWorkout(req, res){
    res.send('Delete an existing workout')
}

export default {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}