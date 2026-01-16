## TODO list

- [] Add validation with express-validor or Zod or Joi
- [] Add endpoints for records and members
- [] In order to avoid complex logic nesting like /api/v1/workouts/:workoutId/records/members/:memberId set memberId nad member ("/members/memberId") keys for each record. This will indicate for a frontend to use member endpoint to fetch respective member of a specific record
- [] Receive all workouts that require a barbell: /api/v1/workouts?equipment=barbell
- [] Get only 5 workouts: /api/v1/workouts?length=5
- [] When using pagination, receive the second page: /api/v1/workouts?page=2
- [] Sort the workouts in the response in descending order by their creation date: /api/v1/workouts?sort=-createdAt
- [] Combine the parameters, to get the last 10 updated workouts for example: /api/v1/workouts?sort=-updatedAt&length=10
- [] Add security
  - [] authentication classic with hashed password
  - [] autorizations: add roles admin, user
  - [] sepration of privilege: only autenticated admin can create, modify, delete workouts, members
  - [] sepration of privilege: only autenticated user can create, modify, delete his record
    Should be used like this:

  ```js
  // Custom made middlewares
  const authenticate = require("../../middlewares/authenticate");
  const authorize = require("../../middlewares/authorize");

  router.post("/", authenticate, authorize, workoutController.createNewWorkout);
  ```

- [] Add unitary tests
- [] Set redis cache (watch Aurelien's course)
- [] Add documentation for each endpoint
