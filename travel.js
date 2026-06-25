const mongoose = require("mongoose");

const travelSchema = new mongoose.Schema({

    travelerName: {
        type: String,
        required: true
    },

    destination: {
        type: String,
        required: true
    },

    source: {
        type: String,
        required: true
    },

    travelDate: {
        type: Date,
        required: true
    },

    transportType: {
        type: String,
        required: true
    },

    ticketPrice: {
        type: Number,
        required: true
    }

});

module.exports = mongoose.model("Travel", travelSchema);