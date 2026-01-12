import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.send(`Get all workouts from ${req.baseUrl}`)
})

router.get('/:workoutId', (req, res) => {
    res.send(`Get an existing workout with id ${req.params.workoutId} from ${req.baseUrl}`)
})

router.post('/', (req, res) => {
    res.send(`Create a new workout`)
})

router.patch('/:workout', (req, res) => {
    res.send(`Update an existing workout`)
})

router.delete('/:workout', (req, res) => {
    res.send(`Delete an existing workout`)
})
export default router