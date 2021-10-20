const { error, success } = require("../utils/baseController");
const { logger } = require("../utils/logger");
const Dropoff = require("../service/dropOff");

exports.createDropOff = async (req, res) => {
  try {
    const dropOff = await new Dropoff(req.body).createDropOff();
    return success(res, { dropOff });
  } catch (err) {
    logger.error("Error occurred at creating drop off", err);
    return error(res, { code: err.code, message: err });
  }
};
