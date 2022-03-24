

//=========Draw=========
//

// $("body").mousemove(function(e) {
//     posX = e.pageX;
//     posY = e.pageY;
// })
canvas.addEventListener('mousemove',(e)=>{
    if(user.socketId != null){
        user.userData.x=e.pageX;
        user.userData.y=e.pageY;
    }
  
})
// const img = new Image();
// img.src = './images/fireworks.png';


function draw(){
    //ctx.save();
    ctx.clearRect(0,0,canvas.width,canvas.height);
    
    // ctx.setTransform(1,0,0,1,0,0);
    // const camX=posX-canvas.width/2;
    // const camY =posY-canvas.height/2;
    // ctx.translate(camX,camY);

    //console.log(posX,posY);
    
    //draw all users
    users.forEach((u)=>{
        ctx.beginPath();
        ctx.fillStyle = u.userData.color;
        ctx.arc(u.userData.x,u.userData.y,30,0,2*Math.PI);
        ctx.fill();
        ctx.lineWidth = 2;
        ctx.strokeStyle='rgb(0,255,100)';
        ctx.stroke();
        ctx.fillStyle='rgb(0,0,0)';
        ctx.font = "30px Arial";
        ctx.fillText(u.userData.name, u.userData.x-15, u.userData.y+10);
        //collusion detection - animation
        if(u.socketId != user.socketId){
            console.log('compare');
            let ret = collides(u,user);
            if(ret[0]){
            //   ctx.drawImage(img,ret[1],ret[2]);
                ctx.fillText("🌶️🌶️🌶️",ret[1],ret[2]);
            }
        }
    })
    
    requestAnimationFrame(draw);
}

function collides(other,user){
    var oX = other.userData.x;
    var oY = other.userData.y;
    var x = user.userData.x;
    var y = user.userData.y;
    var dist = Math.sqrt((oX-x)*(oX-x)
                        +(oY-y)*(oY-y));
    if(dist < 50){
        return [true,(oX+x)/2,(oY+y)/2];
    }
    return false;
}

