const db = require("../models");

module.exports = function (app) {
  // GET ROUTES
  // GET all the exercises
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        dbWorkout.forEach((workout) => {
            let sum = 0;
            workout.exercises.forEach((n) => {
                sum += n.duration;
            });
            workout.totalDuration = sum;
        });
        res.json(dbWorkout);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

  // GET exercises in range
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch(({ message }) => {
        console.log(message);
      });
  });

  // PUT to add an exercise
  app.put("/api/workouts/:id", (req, res) => {
    if (req.body.exerciseType === "cardio") {
      db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            exercises: [
              {
                exerciseType: "cardio",
                name: req.body.name,
                distance: req.body.distance,
                duration: req.body.duration,
              },
            ],
          },
        }
      )
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    } else {
      db.Workout.findOneAndUpdate(
        { _id: req.params.id },
        {
          $push: {
            exercises: [
              {
                exerciseType: "resistance",
                name: req.body.name,
                weight: req.body.weight,
                sets: req.body.sets,
                reps: req.body.reps,
                duration: req.body.duration,
              },
            ],
          },
        }
      )
        .then((dbWorkout) => {
          res.json(dbWorkout);
        })
        .catch((err) => {
          res.json(err);
        });
    }
  });

  // POST ROUTES
  // Post new created exercise
  app.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
