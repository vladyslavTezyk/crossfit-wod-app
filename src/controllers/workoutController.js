import workoutService from "../services/workoutService.js";

function getAllWorkouts(req, res) {
  const { mode } = req.query;
  try {
    const allWorkouts = workoutService.getAllWorkouts({ mode });
    res.send({ status: "OK", data: allWorkouts });
  } catch (error) {
    res.status(error?.message || 500).send({
      status: "FAILED",
      data: { error: error?.message || error },
    });
  }
}

function getOneWorkout(req, res) {
  const { workoutId } = req.params;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      message: "Parameter workoutId can not be empty",
    });
    return;
  }
  try {
    const workout = workoutService.getOneWorkout(workoutId);
    res.status(200).send({ status: "OK", data: workout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { erorr: error?.message || error } });
  }
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
    res.status(400).send({
      status: "FAILED",
      message:
        "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
    });
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

function updateOneWorkout(req, res) {
  const {
    params: { workoutId },
    body,
  } = req;
  if (!workoutId || workoutId != body.id) {
    res.status(400).send({
      status: "FAILED",
      message:
        "Parameter workoutId can not be empty or different from payload id",
    });
    return;
  }
  try {
    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.status(200).send({ status: "OK", data: updatedWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

function deleteOneWorkout(req, res) {
  const { workoutId } = req.params;
  if (!workoutId) {
    res.status(400).send({
      status: "FAILED",
      message:
        "Parameter workoutId can not be empty or different from payload id",
    });
    return;
  }
  try {
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send();
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

export default {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
