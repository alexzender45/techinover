const { Schema, model } = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const amountSchema = new Schema(
  {
    route: {
      type: Array,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
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

amountSchema.plugin(uniqueValidator, { message: "{TYPE} must be unique." });

const AmountModel = model("Amount", amountSchema);
module.exports = AmountModel;
