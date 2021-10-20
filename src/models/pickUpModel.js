const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const pickupSchema = new Schema(
  {
    route: {
      type: Number,
      required: true,
      unique: true,
    },
    pickupLocation: {
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

pickupSchema.plugin(uniqueValidator, { message: "{TYPE} must be unique." });

const PickupModel = model("Pickup", pickupSchema);
module.exports = PickupModel;
