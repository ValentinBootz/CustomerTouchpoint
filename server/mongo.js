const mongoose = require('mongoose')

mongoose.Promise = global.Promise

mongoUri = 'mongodb://touchpoint-cosmos-db:daqCuTWm7CBAqla2bW6ITuKp5VaJFH9J87zFe0oCf2FHh6P952ezWnlx0whi4sFeA6TFwUySaoGNuWAo0MFEjw==@touchpoint-cosmos-db.documents.azure.com:10255/?ssl=true'

function connect() {
    return mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

module.exports = {
    connect,
    mongoose
}