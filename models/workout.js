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
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        duration: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }],
    totalDuration: {
        type: Number,
    }
});

// Creates model based on the above schema, using mongoose's model method
const Workout = mongoose.model("Workout", WorkoutSchema);

// Export the Workout model
module.exports = Workout;