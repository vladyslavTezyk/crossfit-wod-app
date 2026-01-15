import express from "express";
import workoutController from "../../controllers/workoutController.js";

const router = express.Router();

router.get("/", workoutController.getAllWorkouts);

router.get("/:workoutId", workoutController.getOneWorkout);

router.post("/", workoutController.createNewWorkout);

router.patch("/:workout", workoutController.updateOneWorkout);

router.delete("/:workout", workoutController.deleteOneWorkout);

export default router;
