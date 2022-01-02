class Player {
    constructor(){
        this.x = 150
        this.y = 150
        this.vy = 0;
        this.width = 30
        this.height = 40
        this.speed = 1;
        
    }

    

    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}

export default Player;