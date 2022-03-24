//main socket stuff will go
const io=require("../servers").io;
//classes
const User = require('./userClass/user')
const UserData=require('./userClass/userData')
let settings={
    defaultCanvasWidth:500,
    defaultCanvasHeigh:500,
    defaultSize:6
}
let users = []
//boardcast 
setInterval(()=>{
    if(users.length > 0){
        io.to('board').emit('tok',{
            users
        });
    }
},33);//update users information every 30fps

io.sockets.on('connect',(socket)=>{
    let user ={};
    //waiting for client to connect
    socket.on('init',(data)=>{
        //let userConfig = new UserConfig();
        //name space for people in the board
        socket.join('board');
        let userData = new UserData(data.userName, settings);
        user = new User(socket.id,userData);
        //send some dummy data
        socket.emit('initReturn',{
            userObj:user,
            posts:[500,500,200,200,600,500]
        });
        users.push(user);
        console.log("new user created:"+user.userData.name);
    })
    //receiveing user information
    socket.on('tik',(data)=>{
        //console.log(data);
        //console.log(user);
        if(user.socketId != null){
            user.userData.x=data.xVector;
            user.userData.y=data.yVector;
        }
    })

})

module.exports = io;