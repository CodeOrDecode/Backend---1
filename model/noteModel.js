const mongoose = require("mongoose");

const Noteschema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, default: Date.now }
}, { versionKey: false })

const Notemodel = mongoose.model("note", Noteschema);

module.exports = Notemodel;