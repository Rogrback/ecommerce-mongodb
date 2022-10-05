import http from 'http'
import config from './config/index.js'
import api from './api/api.js'
import init from './config/database.js'

const server = http.createServer(api)

server.on('listening', () => {
    console.info('Server executing in port', config.server.port)
})

server.on('error', (e) => {
    console.error('Error running the server')
    if (e.code === 'EADDRINUSE') {
        console.error('The port', config.server.port, 'is already in use')
    }
})

server.listen(config.server.port)
init()