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
    const { firstName, lastName } = req.body

    const customer = new Customer({ firstName, lastName })

    customer.save().then(() => {
        res.json(customer)
    }).catch(err => {
        res.status(500).send(err);
    })
}

function update(req, res) {
    const { firstName, lastName } = req.body
    Customer.findOne({}).then(customer => {
        customer.firstName = firstName;
        customer.lastName = lastName;
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