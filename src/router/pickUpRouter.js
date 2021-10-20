const pickupRoute = require("../core/routerConfig");
const pickupController = require("../controller/pickUpController");

pickupRoute.route("/pickup/location").post(pickupController.createPickup);

module.exports = pickupRoute;
