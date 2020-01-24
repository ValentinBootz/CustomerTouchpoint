const express = require('express')
const next = require('next')
const cors = require('cors')
const fs = require('fs')
const https = require('https')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.PORT || 8080

app.prepare()
    .then(() => {
        const server = express()

        server.use(bodyParser.json())
        server.use(bodyParser.urlencoded({ extended: true }))
        server.use(cors())

        server.use('/api', require('./routes/index'))

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        https.createServer({
            key: fs.readFileSync('server.key'),
            cert: fs.readFileSync('server.cert')
        }, server)
            .listen(port, (err) => {
                if (err) throw err
                console.log('> Ready on https://localhost:' + port)
            })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })