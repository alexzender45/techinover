const { error, success } = require("../utils/baseController");
const { logger } = require("../utils/logger");
const PickUp = require("../service/pickUp");

exports.createPickup = async (req, res) => {
  try {
    const pickUp = await new PickUp(req.body).createPickup();
    return success(res, { pickUp });
  } catch (err) {
    logger.error("Error occurred at creating pickup", err);
    return error(res, { code: err.code, message: err });
  }
};
