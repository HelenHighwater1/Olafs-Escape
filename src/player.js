let OLAF = new Image()
OLAF.src = "images/gliding_left.png"

class Player {
    constructor(ctx){
        this.ctx = ctx
        this.x = 400
        this.y = 100
        this.velo = 0;
        this.width = 80;
        this.height = 80;
        this.speed = 1;
        
    }

    
    animate(){
        addEventListener('load', e => {
            this.ctx.drawImage(OLAF, this.x, this.y, this.width, this.height);
        });
        // this.drawPlayer()
    }
    // drawPlayer(){
    //     this.ctx.fillStyle = 'red'
    //     this.ctx.fillRect(60, 60, 200, 200)
    //     // this.ctx.fillRect(this.x, this.y, this.width, this.height)
    // }
}

export default Player;