const mongoose = require("mongoose");


const destinationSchema = new mongoose.Schema ({
    airport: {
        type: String
    },
    arrival: {
        type: Date
    }
})

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
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
    },
    destinations: [destinationSchema],
})

module.exports = mongoose.model('Flight', flightSchema);