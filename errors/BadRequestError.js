class BadRequestError extends Error {
  constructor(message = 'Данные не прошли валидацию') {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = BadRequestError;
