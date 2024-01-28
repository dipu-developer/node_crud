import mongoose from "mongoose";

//Define Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Types.Decimal128,
    required: true,
    validate: (v) => v >= 5000.0,
  },
});

//Create Models

const studentModle =mongoose.model("student", studentSchema);

export default studentModle;
