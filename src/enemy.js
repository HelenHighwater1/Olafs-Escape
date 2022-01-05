let SHIPLEFT = new Image()
SHIPLEFT.src = "images/enemy_ship_left.png"
let SHIPRIGHT = new Image()
SHIPRIGHT.src = "images/enemy_ship_right.png"



export default class Enemy {
    constructor(ctx, dimensions) {
        this.ctx = ctx
        this.x = Math.random() * dimensions.width
        this.y = 400 + Math.random() * 2100
        this.yspeed = 0
        this.xspeed = 0
        this.width = 150
        this.height = 100  
        this.leftSide = this.x
        this.rightSide = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        this.dir = Math.ceil(Math.random()*2)
        this.img 
        if (this.dir <= 1) {
            this.img = SHIPRIGHT
        } else {
            this.img = SHIPLEFT
        }
        // this.dir = Math.random()  
    }

    // randomEnemy(){

    // }

    move(){
        this.y -= this.yspeed
        this.x += this.xspeed
    }




}
