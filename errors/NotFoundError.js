const errorMessages = require('../utils/constants');

class NotFoundError extends Error {
  constructor(message = errorMessages.notFound) {
    super(message);
    this.statusCode = 404;
  }
}

module.exports = NotFoundError;
