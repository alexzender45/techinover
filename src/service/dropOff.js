const dropoffSchema = require("../models/dropOffModel");
const { throwError } = require("../utils/handleErrors");
const { validateParameters } = require("../utils/util");

class Dropoff {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  async createDropOff() {
    let parameters = this.data;
    const { isValid, messages } = validateParameters(
      ["route", "dropoffLocation"],
      parameters
    );
    if (!isValid) {
      throwError(messages);
    }
    return await new dropoffSchema(parameters).save();
  }
}

module.exports = Dropoff;
