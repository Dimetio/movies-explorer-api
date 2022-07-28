const errorMessages = require('../utils/constants');

class BadRequestError extends Error {
  constructor(message = errorMessages.badRequest) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
