const io = require('socket.io')(8800, {
  cors :{
    origin: "https://localhost:3000"
  }
});

let activeUsers = []

io.on('connection', (socket) => {

  // add new User
socket.on('new-user-add', (newUserid) => {
  //if user is nor added previously
if(!activeUsers.some((user) => user.user.id === newUserid)){
   activeUsers.push({
    userid: newUserid,
    socketid: socket.id,
   });
}
  
io.emit('get-Users', activeUsers);  
  })
})
