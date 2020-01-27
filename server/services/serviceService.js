const Service = require('../models/service')
const ReadPreference = require('mongodb').ReadPreference

require('../mongo').connect();

function get(req, res) {
    const docquery = Service.find({}).read(ReadPreference.NEAREST)
    docquery.exec().then(service => res.json(service))
        .catch(err => {
            res.status(500).send(err)
        })
}

function create(req, res) {
    
    const { date, name, price } = req.body
    const service = new Service({ date, name, price })

    service.save().then(() => {
        res.json(service)
    }).catch(err => {
        res.status(500).send(err);
    })
}

function reset(req, res) {
    Service.findOneAndRemove({}).then(service => {
        res.json(service)
    }).catch(err => {
        res.status(500).send(err)
    })
}

module.exports = {
    get,
    create,
    reset
}