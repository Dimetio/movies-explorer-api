class ConflictError extends Error {
  constructor(message = 'Такой email уже занят') {
    super(message);
    this.statusCode = 409;
  }
}

module.exports = ConflictError;
