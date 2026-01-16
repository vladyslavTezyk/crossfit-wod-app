import recordService from "../services/recordService.js";

function getRecordForWorkout(req, res) {
  const {
    params: { workoutId },
  } = req;

  if (!workoutId) {
    res
      .status(400)
      .send({ status: "FAILED", message: "Workout id is required" });
  }

  try {
    const records = recordService.getRecordForWorkout(workoutId);
    res.status(200).send({ status: "OK", data: records });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

export default {
  getRecordForWorkout,
};
