const mongoose = require("mongoose");
const colors = require('colors')

//  function mongodb database cnnection

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL),
            console.log(`connected to database Successfully:${mongoose.connection.host}`.bgBlue.green)

    } catch (error) {
        console.log('db error', error, colors.bgYellow);

    }
}

module.exports = connectdb