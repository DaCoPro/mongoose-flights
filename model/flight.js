const { Mongoose } = require("mongoose");

const flightSchema = new mongoose.Schema ({
    airline: {
        type: String,
    },
    airport: {
        type: String,
        default: 'DIA'
    },
    flightNo: {
        type: Number,
        required: true
        //need to require 10 - 9999
    }
    departs: {
        type: Date,
        //need to default to one year from date created
    }
})

module.exports = mongoose.model('Flight', flightSchema);