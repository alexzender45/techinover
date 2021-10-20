const calculateAmountRouter = require("../core/routerConfig");
const calculateAmountController = require("../controller/calculateAmount");

calculateAmountRouter
  .route("/calculate")
  .get(calculateAmountController.CalculateTotalAmount);

calculateAmountRouter
  .route("/create-amount")
  .post(calculateAmountController.createAmount);

module.exports = calculateAmountRouter;
