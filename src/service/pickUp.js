const pickupSchema = require("../models/pickUpModel");
const { throwError } = require("../utils/handleErrors");
const { validateParameters } = require("../utils/util");

class PickUp {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  async createPickup() {
    let parameters = this.data;
    const { isValid, messages } = validateParameters(
      ["route", "pickupLocation"],
      parameters
    );
    if (!isValid) {
      throwError(messages);
    }
    return await new pickupSchema(parameters).save();
  }
}

module.exports = PickUp;
