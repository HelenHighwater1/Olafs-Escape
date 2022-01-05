// const CONSTANTS = {
//     ENEMY_HEIGHT = 10,
//     ENEMY_WIDTH = 30

// };

let SHIPLEFT = new Image()
SHIPLEFT.src = "images/enemy_ship_left.png"
let SHIPRIGHT = new Image()
SHIPRIGHT.src = "images/enemy_ship_right.png"
let SHIPOTHER = new Image()
SHIPOTHER.src = "images/enemy_ship_other.png"



export default class Enemy {
    constructor(ctx, dimensions) {
        this.ctx = ctx
        this.img = SHIPLEFT
        this.x = Math.random() * dimensions.width
        this.y = 400 + Math.random() * 2100
        this.speed = 0
        this.width = 150
        this.height = 100  
        this.leftSide = this.x
        this.rightSide = this.x + this.width
        this.top = this.y
        this.bottom = this.y + this.height
        // this.dir = Math.random()  
    }

    // randomEnemy(){

    // }

    move(){
        this.y -= 1
        this.x += this.speed
    }




}
//OLD CODE

    // animate() {
    //     // while (!gameOver()){
    //         this.ctx.drawImage(SHIPRIGHT, this.x, this.y, this.width, this.height)
    //         this.x += 0.12
    //         this.y -= .5
    //         window.requestAnimationFrame(this.animate.bind(this))
    //     // }
    // }
