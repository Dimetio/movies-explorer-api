const errorMessages = require('../utils/constants');

class UnauthorizedError extends Error {
  constructor(message = errorMessages.unauthorized) {
    super(message);
    this.statusCode = 401;
  }
}

module.exports = UnauthorizedError;
