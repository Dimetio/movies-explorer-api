const errorMessages = require('../utils/constants');

class ForbiddenError extends Error {
  constructor(message = errorMessages.forbidden) {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
