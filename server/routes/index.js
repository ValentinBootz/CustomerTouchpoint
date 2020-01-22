const express = require('express')
const router = express.Router()
const customerService = require('../services/customerService') 

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

module.exports = router;