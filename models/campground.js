const mongoose = require("mongoose");

// SCHEMA SETUP
const campgroundSchema = new mongoose.Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
        username: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
});

module.exports = mongoose.model("Campground", campgroundSchema);
