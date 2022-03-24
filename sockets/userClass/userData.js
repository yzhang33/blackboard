class UserData{
    constructor(userName,settings){
        this.name = userName;
        this.x = Math.floor(settings.defaultCanvasWidth*Math.random()+10);
        this.y = Math.floor(settings.defaultCanvasWidth*Math.random()+10);
        this.radius = settings.defaultSize;
        this.color = this.getRandomColor();
    }

    getRandomColor(){
        const r = Math.floor((Math.random() * 200)+50);
        const g = Math.floor((Math.random() * 200)+50);
        const b = Math.floor((Math.random() * 200)+50);
        return `rgb(${r},${g},${b})`;
    }
}

module.exports = UserData;