const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const dropoffSchema = new Schema(
  {
    route: {
      type: Number,
      required: true,
      unique: true,
    },
    dropoffLocation: {
      type: Array,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    strictQuery: "throw",
  }
);

dropoffSchema.plugin(uniqueValidator, { message: "{TYPE} must be unique." });

const DropoffModel = model("Dropoff", dropoffSchema);
module.exports = DropoffModel;
