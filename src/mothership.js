const MSHIP = new Image()
MSHIP.src = "images/mothership.png"


export default class Mothership {
    constructor(ctx){
        this.ctx = ctx
        this.y = 0
        this.speed = 0
        this.width = 350
        this.height = 300
    }

    animate() {
        this.ctx.drawImage(MSHIP, 400, this.y, this.width, this.height);
        this.y -= this.speed
        window.requestAnimationFrame(this.animate.bind(this))
        
    }

}


//OLD CODE
// animate() {
//     addEventListener('load', e => {
//         this.ctx.drawImage(MSHIP, 400, this.y, this.width, this.height);
//         this.scroll()
//     });
//     // this.drawPlayer()

// }

// scroll(){
//     this.ctx.drawImage(MSHIP, 400, this.y);
//     this.y--

//     window.requestAnimationFrame(this.scroll.bind(this))


// }