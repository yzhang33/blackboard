//connection to server
let socket = io.connect('http://yz6637.itp.io:8080')

function init(){
    draw();
    socket.emit('init',{
        userName:user.name
    })
}

socket.on('initReturn',(data)=>{
    //console.log(data);
    user = data.userObj;
    posts=data.posts;
    setInterval(()=>{
        socket.emit('tik',{
            xVector:user.userData.x,
            yVector:user.userData.y
        })
    })
})

socket.on('tok',(data)=>{
    //console.log(data)
    users = data.users;
    document.querySelector('.user-board').innerHTML="";
    users.forEach((currUser)=>{
        document.querySelector('.user-board').innerHTML +=`
            <li class="userboard-user">${currUser.userData.name}</li>
        `
    })
})


//socket.on('')