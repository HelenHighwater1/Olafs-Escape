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

