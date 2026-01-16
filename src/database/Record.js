import DB from "./db.json" with { type: "json" };

function getRecordForWorkout(workoutId) {
  try {
    const records = DB.records.filter((record) => record.workout === workoutId);
    if (!records || records.length === 0) {
      throw {
        status: 400,
        message: `No records found with the workout id ${workoutId}`,
      };
    }
    return records;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
}

export default {
  getRecordForWorkout,
};
