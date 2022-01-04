const MSHIP = new Image()
MSHIP.src = "images/mothership.png"


export default class Mothership {
    constructor(ctx){
        this.ctx = ctx
        this.img = MSHIP
        this.y = 0
        this.speed = 0
        this.width = 350
        this.height = 300
    }

    move() {
        this.y -= this.speed        
    }

}

//OLD CODE

// animate() {
//     this.ctx.drawImage(MSHIP, 400, this.y, this.width, this.height);
//     this.y -= this.speed
//     window.requestAnimationFrame(this.animate.bind(this))

// }