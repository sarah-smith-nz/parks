const express = require('express')
const path = require('path')

const parkRoutes = require('./routes/parks')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/park', parkRoutes)

module.exports = server
