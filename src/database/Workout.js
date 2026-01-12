import DB from './db.json' with {type: 'json'}

function getAllWorkouts(){
    return DB.workouts
}

export default {
    getAllWorkouts
}