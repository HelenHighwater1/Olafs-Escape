// import Game from "./game";

const BKG = new Image()
BKG.src = "images/background.png"


class Background {
    constructor(dimensions, ctx) {
        this.ctx = ctx;
        this.img = BKG;
        this.speed = 0;
        this.width = dimensions.width;
        this.height = dimensions.height;
        this.y = 0;
        // this.gameWon = true
    }


    move() {
        this.y += this.speed
    }


}   





export default Background;



//OLD CODE
// animate() {
//     this.ctx.clearRect(0, 0, 600, 400)
//     this.ctx.drawImage(BKG, 0, this.y, 1200, 3500, 0, 0, 600, 1771);
//     this.y += this.speed
//     console.log(this.y)
//     if (this.y >= 2400) {
//         return this.gameWon = true
//     } else {
//         window.requestAnimationFrame(this.animate.bind(this))
//     }

// }