class CustomError extends Error {
    constructor({ statusCode, message }) {
        super();
        this.statusCode = statusCode;
        this.message = message
    }
}

const handleErrors = (err, req, res, next) => {
    let { statusCode, message } = err;

    console.error(message)

    if(!statusCode) statusCode = 500

    res.status(statusCode).json({
        staus: "error",
        statusCode,
        message,
    });

}

module.exports = {
    handleErrors,
    CustomError,
}