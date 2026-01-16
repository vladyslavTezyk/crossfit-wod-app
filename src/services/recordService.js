import Record from "../database/Record.js";

function getRecordForWorkout(workoutId) {
  try {
    const records = Record.getRecordForWorkout(workoutId);
    return records;
  } catch (error) {
    throw error;
  }
}

export default {
  getRecordForWorkout,
};
