const mongosse = require('mongoose');

require('dotenv').config();



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

// Databases connection

module.exports = connectDb;
