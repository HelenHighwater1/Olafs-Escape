let OLAF = new Image()
OLAF.src = "images/gliding_right.png"

class Player {
    constructor(ctx){
        this.ctx = ctx
        this.x = 100
        this.y = 100
        this.velo = 0;
        this.width = 100;
        this.height = 100;
        this.dir = 0;
        // this.shield = 'up';
        
    }

    
    animate(){
        // this.ctx.drawImage(OLAF, this.x, this.y, this.width, this.height);
        // this.ctx.clearRect(0, 0, this.x, this.y)
        this.ctx.drawImage(OLAF, this.x, this.y, this.width, this.height);
        this.x += this.dir
        window.requestAnimationFrame(this.animate.bind(this))

   
    }



    scroll() {
   
        this.ctx.clearRect(0, 0, this.x, this.y)
        this.ctx.drawImage(OLAF, this.x, this.y);
        this.x += this.dir

        window.requestAnimationFrame(this.animate.bind(this))
        

    }

    updateShield(){
        if (this.shield === up) {
            this.shield = down
        } else {
            this.shield = 'up'
        }
    }
}

export default Player;


/// OLD CODE

// animate(){
//     addEventListener('load', e => {
//         this.ctx.drawImage(OLAF, this.x, this.y, this.width, this.height);
//         this.scroll(this.ctx)
//     });

// }



// scroll() {

//     this.ctx.clearRect(0, 0, this.x, this.y)
//     this.ctx.drawImage(OLAF, this.x, this.y);
//     this.x += this.dir

//     window.requestAnimationFrame(this.scroll.bind(this))


// }