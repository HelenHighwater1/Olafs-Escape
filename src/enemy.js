// const CONSTANTS = {
//     ENEMY_HEIGHT = 10,
//     ENEMY_WIDTH = 30

// };

let SHIPLEFT = new Image()
SHIPLEFT.src = "images/enemy_ship_left.png"
let SHIPRIGHT = new Image()
SHIPRIGHT.src = "images/enemy_ship_right.png"

export default class Enemy {
    constructor(ctx, dimensions) {
        this.ctx = ctx
        this.x = Math.random() * dimensions.width
        this.y = 400 + Math.random() * 3500
        this.speed = 0
        this.width = 100
        this.height = 100  
        // this.dir = Math.random()  
    }

    // randomEnemy(){

    // }

    // moveEnemy(){
    //     // this.y ++
    //     // this.x += this.speed
    // }

    animate() {
        this.ctx.drawImage(SHIPLEFT, this.x, this.y, this.width, this.height)
        this.x -= 0.1
        this.y -= .5
        window.requestAnimationFrame(this.animate.bind(this))
    }
}

