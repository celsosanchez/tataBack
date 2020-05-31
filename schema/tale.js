const mongoose = require("mongoose");

const tale = mongoose.Schema(
    {
        Title: String,
        Body: String,
        Type: String,
        Add_Time: Date,



    });

module.exports = mongoose.model("Tale", tale)

