const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const socket = require("socket.io");
const io = socket(server);
const router = express.Router()

// app.get('/', (req, res) => {
//     // io.sockets.sockets[req.query.gg].emit('res', 'dodo');
//     // io.emit('res', "reverstion");
//     const userssend = ['John', 'Jane', 'Bob'];
//     // console.log(`users`, req.query.gg);
//     var clients = io.sockets.clients();
//     console.log(Object.keys(io.engine.clients));
//     res.json(users);

// })
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (client) => {
    console.log('a user connected');
    console.log(client.id);
    var x;
    client.on('msg', (data) => {
        console.log(data + ": " + client.id);
        // io.sockets.sockets[client.id].emit('res', 'message');
        // x=data
        client.broadcast.emit('res', data)
    })
    

});

server.listen(3000, '0.0.0.0', () => {
    console.log('listening on *:3000');
});
























































// const express = require('express')
// const app = express()
// const mysql = require('mysql')
// const myconn = require('express-myconnection')
// const router = require('./routes')
// const http = require('http')
// const server = http.createServer(app)
// const io = require('socket.io')(server)
// const dbOption = {
//     host: 'localhost',
//     port: 3306,
//     user: 'root',
//     password: '',
//     database: 'node'
// }


// /// socket io ..............................

// io.on('connection', (client) => {
//     console.log(`new client connected `)
//     console.log(client.id);
// })






// // server run ----------------------------------
// app.set('port', 3000)
// server.listen(app.get('port'), () => {
//         console.log(`server runing on http://127.0.0.1:${app.get('port')} `);
//     })
//     // middleware--------------------------------------
// app.use(myconn(mysql, dbOption, 'single'))
// app.use(express.json())
// app.use('/api', router)

// /// router ----------------------------------------
// app.get('/', (req, res) => {
//     res.send('welcome from api ')
// })