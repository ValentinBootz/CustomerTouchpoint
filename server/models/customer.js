mongoose = require('mongoose')
const Schema = mongoose.Schema

const customer = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    birthday: { type: String },
    address: { type: String },
    area_code: { type: String },
    community: { type: String },
    email: { type: String },
    phone: { type: String },
    contact_method: { type: String },
    brand: { type: String },
    model: { type: String },
    licence: { type: String },
    vin: { type: String },
    registration: { type: String },
    kilometers: { type: String },
})

module.exports = mongoose.model('customer', customer)