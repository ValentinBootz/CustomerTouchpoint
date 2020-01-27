mongoose = require('mongoose')
const Schema = mongoose.Schema

const service = new Schema({
    date: { type: String },
    name: { type: String },
    price: { type: String },
})

module.exports = mongoose.model('service', service)