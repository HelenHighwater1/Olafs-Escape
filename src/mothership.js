const MSHIP = new Image()
MSHIP.src = "images/mothership.png"


export default class Mothership {
    constructor(ctx){
        this.ctx = ctx
        this.y = -70
        this.width = 350
        this.height = 350
    }

    animate() {
        addEventListener('load', e => {
            this.ctx.drawImage(MSHIP, 400, this.y, this.width, this.height);
        });
        // this.drawPlayer()
    }
}