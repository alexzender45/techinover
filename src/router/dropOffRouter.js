const dropoffRouter = require("../core/routerConfig");
const dropoffController = require("../controller/dropOffController");

dropoffRouter.route("/dropoff/location").post(dropoffController.createDropOff);

module.exports = dropoffRouter;
