import express from 'express'
import v1WorkoutRoutes from './v1/routes/workoutRoutes.js'

const app = express()

const port = process.env.PORT || 3000

app.use("/api/v1", v1WorkoutRoutes)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
