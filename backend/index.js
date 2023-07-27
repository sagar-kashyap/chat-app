const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').Server(app);
const PORT = 4000
const io = require('socket.io')(http, {
    cors: {
        origin: "http://localhost:3000"
    }
});

app.use(cors())
const users={}

io.on('connection',socket=>{
    socket.on('new-user-joined',name=>{
        users[socket.id]=name;
        console.log(users)
        socket.broadcast.emit('user-joined',name)
    })


socket.on('send', message=>{
    console.log(message)
    socket.broadcast.emit('receive',{message:message,name:users[socket.id]})
    socket.emit('receive',{message:message,name:users[socket.id]})
})
})

http.listen(PORT)