class ForbiddenError extends Error {
  constructor(message = 'Недостаточно прав') {
    super(message);
    this.statusCode = 403;
  }
}

module.exports = ForbiddenError;
