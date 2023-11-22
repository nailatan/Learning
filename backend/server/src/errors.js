const config = require("./config");

class LearningApiError extends Error {
  constructor(code, message) {
    super();
    this.name = "LearningApiError";
    this.code = code;
    this.message = message;
  }
}

const catchErrors =
  (routeHandler) =>
  async (req, res, next, ...args) => {
    try {
      await routeHandler(req, res, next, ...args);
    } catch (err) {
      next(err);
    }
  };

const errorHandler = (err, req, res, next) => {
  if (err.name === "LearningApiError") {
    const { code, message } = err;
    return res.status(code).send({ error: message });
  }
  // // Mongoose validation errors
  // if (err.name === "ValidationError") {
  //   message = Object.getOwnPropertyNames(err.errors).reduce(
  //     (message, prop) => `${message} - ${err.errors[prop].message}.`,
  //     ""
  //   );
  //   return res.status(400).send({ error: message });
  // }

  res.status(500).send({
    error: config.isEnvelopment
      ? `Internal Server Error: ${err}`
      : `Internal Error`,
  });
};

module.exports = {
  catchErrors,
  LearningApiError,
  errorHandler,
};
