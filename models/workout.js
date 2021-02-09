const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        name: {
            type: String,
            trim: true,
            required: "Name of the exercise is required."
        },
        exerciseType: {
            type: String,
            trim: true,
            required: "Exercise type is required."
        },
        weight: {
            type: Number,
            trim: true,
            required: "Enter your weight is required in order for us to track your daily workout progress."
        },
        sets: {
            type: Number,
            trim: true
        },
        reps: {
            type: Number,
            trim: true
        },
        duration: {
            type: Number,
            trim: true,
            required: "Enter your workout duration for today in order for us to track your daily workout progress."
        },
        distance: {
            type: Number,
            trim: true
        }
    }]
});

// Creates model based on the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the Workout model
module.exports = Workout;