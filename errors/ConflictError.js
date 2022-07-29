const errorMessages = require('../utils/constants');

class ConflictError extends Error {
  constructor(message = errorMessages.conflict) {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
