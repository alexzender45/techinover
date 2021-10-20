const { error, success } = require("../utils/baseController");
const { throwError } = require("./handleErrors");

exports.validateParameters = (expectedParameters, actualParameters) => {
  const messages = [];
  let isValid = true;

  if (!actualParameters) {
    throwError("Invalid Parameters");
  }

  expectedParameters.forEach((parameter) => {
    const actualParameter = actualParameters[parameter];

    if (
      actualParameter === null ||
      actualParameter === undefined ||
      actualParameter === ""
    ) {
      messages.push(`${parameter} is required`);
      isValid = false;
    }
  });
  return { isValid, messages };
};
