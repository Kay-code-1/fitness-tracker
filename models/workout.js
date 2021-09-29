const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema(
  {
    day: {
      // For the schema of this attribute, define type and default
      type: Date,
      default: () => new Date(),
    },
    exercises: [
      // Schema for each item in exercises array
      {
        type: {
          type: String,
          trim: true,
          required: [true, "Workout type is Required"]
        },
        name: {
          type: String,
          trim: true,
          required: [true, "Workout name is Required"]
        },
        duration: {
          type: Number, 
          required: [true, "Duration of Workout is required"],
        },
        weight: {
          type: Number, 
        },
        reps: {
          type: Number, 
        },
        sets: {
          type: Number, 
        },
        distance: {
          type: Number, 
        },
      },
    ],
  },

);

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;
