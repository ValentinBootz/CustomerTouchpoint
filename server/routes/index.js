const express = require('express')
const router = express.Router()
const customerService = require('../services/customerService') 
const serviceService = require('../services/serviceService')

router.get('/customer', function(req, res) {
    customerService.get(req, res)
})

router.post('/customer', function(req, res) {
    customerService.create(req, res)
})

router.put('/customer', function(req, res) {
    customerService.update(req, res)
})

router.delete('/customer', function(req, res) {
    customerService.reset(req, res)
})

router.get('/service', function(req, res) {
    serviceService.get(req, res)
})

router.post('/service', function(req, res) {
    serviceService.create(req, res)
})

router.put('/service', function(req, res) {
    serviceService.update(req, res)
})

router.delete('/service', function(req, res) {
    serviceService.reset(req, res)
})

module.exports = router;