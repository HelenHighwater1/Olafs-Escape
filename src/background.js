// const BKG = document.getElementById("bkg")
const BKG = new Image()
BKG.src = "images/background.png"


class Background {
    constructor(dimensions) {
        this.speed = 1;
        this.width = dimensions.width
        this.height = dimensions.height

        

    }

    animate(ctx){

        // const bkg = document.getElementById("bkg")
        // console.log(bkg)
        // ctx.drawImage(bkg, 0, 0, this.width, this.height);
        // console.log(ctx)

        BKG.addEventListener('load', e => {
            ctx.drawImage(BKG, 0, 0, 600, 1771);
        });
    }
}





export default Background;