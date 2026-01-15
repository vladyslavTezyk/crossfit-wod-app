import workoutService from "../services/workoutService.js";

function getAllWorkouts(req, res) {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
}

function getOneWorkout(req, res) {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  console.log("id ", workoutId);
  const workout = workoutService.getOneWorkout(workoutId);
  res.status(200).send({ status: "OK", data: workout });
}

function createNewWorkout(req, res) {
  const { body } = req;
  // TODO : add validation middleware : express-validator or other (it is not the role of contoller to validate the input data)
  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
}

function updateOneWorkout(req, res) {
  const {
    params: { workoutId },
    body,
  } = req;
  if (!workoutId || workoutId != body.id) {
    return;
  }

  const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
  res.status(200).send({ status: "OK", data: updatedWorkout });
}

function deleteOneWorkout(req, res) {
  const {
    params: { workoutId },
  } = req;
  if (!workoutId) {
    return;
  }
  workoutService.deleteOneWorkout(workoutId);
  res.status(204).send();
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
