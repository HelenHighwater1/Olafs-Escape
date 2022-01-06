let SHIPLEFT = new Image()
SHIPLEFT.src = "images/enemy_ship_left.png"
let SHIPRIGHT = new Image()
SHIPRIGHT.src = "images/enemy_ship_right.png"



export default class Enemy {
    constructor(ctx, dimensions) {
        this.ctx = ctx
        this.x = Math.random() * dimensions.width
        this.y = 300 + Math.random() * 2400
        this.yspeed = 0
        this.xspeed = 0
        this.width = 150
        this.height = 100  

        this.dir = Math.ceil(Math.random()*2)
        if (this.dir <= 1) {
            this.img = SHIPLEFT

        } else {
            this.img = SHIPRIGHT
        }
    
    }

    // randomEnemy(){

    // }

    move(){
        this.y -= this.yspeed
        this.x += this.xspeed
    }




}
