const Customer = require('../models/customer')
const ReadPreference = require('mongodb').ReadPreference

require('../mongo').connect();

function get(req, res) {
    const docquery = Customer.find({}).read(ReadPreference.NEAREST)
    docquery.exec().then(customer => res.json(customer))
        .catch(err => {
            res.status(500).send(err)
        })
}

function create(req, res) {
    
    const { firstName, lastName, birthday, address, area_code, community, email, phone, contact_method, brand, model, licence, vin, price, registration, kilometers_monthly, consumption, insurance_monthly } = req.body
    const customer = new Customer({ firstName, lastName, birthday, address, area_code, community, email, phone, contact_method, brand, model, licence, vin, price, registration, kilometers_monthly, consumption, insurance_monthly })

    customer.save().then(() => {
        res.json(customer)
    }).catch(err => {
        res.status(500).send(err);
    })
}

function update(req, res) {
    const { firstName, lastName, birthday, address, area_code, community, email, phone, contact_method, brand, model, licence, vin, price, registration, kilometers_monthly, consumption, insurance_monthly } = req.body
    Customer.findOne({}).then(customer => {
        customer.firstName = firstName;
        customer.lastName = lastName;
        customer.birthday = birthday;
        customer.address = address;
        customer.area_code = area_code;
        customer.community = community;
        customer.email = email;
        customer.phone = phone;
        customer.contact_method = contact_method;
        customer.brand = brand;
        customer.model = model;
        customer.licence = licence;
        customer.vin = vin;
        customer.price = price;
        customer.registration = registration;
        customer.kilometers_monthly = kilometers_monthly;
        customer.consumption = consumption;
        customer.insurance_monthly = insurance_monthly;
        customer.save().then(res.json(customer))
    }).catch(err => {
        res.status(500).send(err)
    })
}

function reset(req, res) {
    Customer.findOneAndRemove({}).then(customer => {
        res.json(customer)
    }).catch(err => {
        res.status(500).send(err)
    })
}

module.exports = {
    get,
    create,
    update,
    reset
}