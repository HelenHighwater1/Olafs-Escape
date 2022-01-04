let OLAF = new Image()
OLAF.src = "images/gliding_right.png"

class Player {
    constructor(dimensions, ctx){
        this.dimensions = dimensions
        this.ctx = ctx
        this.x = 100
        this.y = 100
        this.velo = 0;
        this.width = 100;
        this.height = 100;
        this.dir = 0;
        this.shieldUp = false;
        this.leftSide = this.x
        this.rightSide = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
    }

    
    animate(){
        // this.ctx.drawImage(OLAF, this.x, this.y, this.width, this.height);
        // this.ctx.clearRect(0, 0, this.x, this.y)
        this.ctx.drawImage(OLAF, this.x, this.y, this.width, this.height);
        this.x += this.dir
        if (this.x > this.dimensions.width) {
            this.x = 0
        } else if (this.x < -this.width) {
            this.x = this.dimensions.width
        }
        window.requestAnimationFrame(this.animate.bind(this))

   
    }

    updateShield(){
        if (this.shieldUp) {
            this.shieldUp = false
        } else {
            this.shieldUp = true
        }
    }
}

export default Player;

