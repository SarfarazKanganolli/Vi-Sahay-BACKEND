const errorMiddleware = (err,req,res,next) => {

    const status = err.status || 500;
    const message = err.message || "Backend ERROR";
    const errDetails = err.errDetails || "Some error from backend";

    return res.status(status).json({ message, errDetails});
} 

module.exports = errorMiddleware