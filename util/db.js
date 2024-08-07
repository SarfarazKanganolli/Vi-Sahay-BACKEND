const mongosse = require('mongoose');

require('dotenv').config();

// const URI = "mongodb://127.0.0.1:27017/mern_admin"

const URI  = process.env.MONGODB_URI

mongosse.connect(URI)

const connectDb = async () => {
try {
        await mongosse.connect(URI);
        console.log("succesfully connected database")
    } catch (error) {
        next(error)
        // console.log("databases connection failed")
        process.exit(0);
    }
}
    

module.exports = connectDb;
