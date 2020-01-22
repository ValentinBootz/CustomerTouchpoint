mongoose = require('mongoose')
const Schema = mongoose.Schema

const customer = new Schema({
    firstName: { type: String },
    lastName: { type: String }
})

module.exports = mongoose.model('customer', customer)