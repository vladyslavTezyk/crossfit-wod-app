import express from "express";
import v1WorkoutRoutes from "./v1/routes/workoutRoutes.js";

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use("/api/v1/workouts", v1WorkoutRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
