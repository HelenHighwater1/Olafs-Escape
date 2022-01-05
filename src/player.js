// let SHIELDUP = new Image()
// SHIELDUP.src = "images/shield_up.png"
// let SHIELDDOWN = new Image()
// SHIELDDOWN.src = "images/shield_down.png"
let GLIDINGRIGHT = new Image()
GLIDINGRIGHT.src = "images/gliding_right.png"
// let GLIDINGLEFT = new Image()
// GLIDINGLEFT.src = "images/gliding_left.png"

class Player {
    constructor(dimensions, ctx){
        this.img = GLIDINGRIGHT;
        this.dimensions = dimensions;
        this.ctx = ctx;
        this.x = 400;
        this.y = 140;
        this.velo = 0;
        this.width = 60;
        this.height = 60;
        this.dir = 0;
        this.shieldUp = false;

    }

    
    move(){
        this.x += this.dir
        if (this.x > this.dimensions.width) {
            this.x = 0
        } else if (this.x < -this.width) {
            this.x = this.dimensions.width
        }
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

