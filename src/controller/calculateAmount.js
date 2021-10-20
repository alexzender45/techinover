const { error, success } = require("../utils/baseController");
const { logger } = require("../utils/logger");
const CalculateAmount = require("../service/calulateAmount");

exports.createAmount = async (req, res) => {
    try {
      const amount = await new CalculateAmount(req.body).createAmount();
      return success(res, { amount });
    } catch (err) {
      logger.error("Error occurred at creating amount", err);
      return error(res, { code: err.code, message: err });
    }
  };

exports.CalculateTotalAmount = async (req, res) => {
  try {
    const finalAmount = await new CalculateAmount(req.query).calculateAmount();
    return success(res, { finalAmount });
  } catch (err) {
    logger.error("Error occurred calculating final amount", err);
    return error(res, { code: err.code, message: err });
  }
};
