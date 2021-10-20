const dropoffSchema = require("../models/dropOffModel");
const pickupSchema = require("../models/pickUpModel");
const amountSchema = require("../models/amountModel");
const { throwError } = require("../utils/handleErrors");
const { DELIVERY_TYPE } = require("../utils/constants");
const { validateParameters } = require("../utils/util");

class CalculateAmount {
  constructor(data) {
    this.data = data;
    this.errors = [];
  }

  async createAmount() {
    let parameters = this.data;
    const { isValid, messages } = validateParameters(
      ["route", "amount"],
      parameters
    );
    if (!isValid) {
      throwError(messages);
    }
    return await new amountSchema(parameters).save();
  }

  async calculateAmount() {
    const pickup = await pickupSchema
      .findOne({
        pickupLocation: {
          $in: [this.data.pickupAddress.toUpperCase()],
        },
      })
      .orFail(() => {
        throwError("Pickup location not found", 404);
      });
    if (pickup.route === 11) {
      throwError(
        "Your Pickup Location is Extreme, no Price for this Route",
        404
      );
    }
    const dropoff = await dropoffSchema
      .findOne({
        dropoffLocation: {
          $in: [this.data.dropoffAddress.toUpperCase()],
        },
      })
      .orFail(() => {
        throwError("Dropoff location not found", 404);
      });
    if (pickup.route === 11) {
      throwError(
        "Your Dropoff Location is Extreme, no Price for this Route",
        404
      );
    }
    const finalAmount = await amountSchema.findOne({
      route: [pickup.route, dropoff.route],
    });
    const calculate = finalAmount.amount;
    if (this.data.type !== undefined) {
      if (this.data.type.toUpperCase() === DELIVERY_TYPE.EXPRESS) {
        return {
          message: `Total Money For Your Delivery, Express`,
          amount: calculate * 2,
        };
      }
    } else {
      return {
        message: `Total Money For Your Delivery, Regular`,
        amount: calculate,
      };
    }
  }
}

module.exports = CalculateAmount;
