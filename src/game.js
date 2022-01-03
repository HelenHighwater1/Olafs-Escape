import Player from "./player";
import Obstacles from "./obstacles";
import Background from "./background";
import Mothership from "./mothership";

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.background = new Background(this.dimensions, this.ctx);
        this.mothership = new Mothership(this.ctx)
        // this.obstacles = []
        this.player = new Player(this.ctx)
        this.recieveKeys();
        this.running = false
        this.play();
    }


    play() {
        this.altitude = 50000;
        this.animate()
        
    }

    recieveKeys(){
        window.addEventListener("keydown", this.onKeyDown.bind(this)) 

    }

    onKeyDown(e){
        switch (e.code) {
        case "Space":
            if (!this.running) {
                this.running = true
                this.background.speed = 1
            }
            // this.player.updateShield();
            break;
        case "ArrowLeft":
            if (!this.running) {
                this.running = true
                this.background.speed = 10
            }
            this.player.dir -= .2;
            break;
        case "ArrowRight":
            this.player.dir += .2;
            break;
        }
    }


    // key(e){
    //     if (!this.running) {
    //         this.play()
    //     }
        
    // }


    
    // registerEvents() {
    //     this.boundClickHandler = this.click.bind(this);
    //     this.ctx.canvas.addEventListener("mousedown", this.boundClickHandler);
    // }

    // click(e) {
    //     if (!this.running) {
    //         this.play();
    //     }
    //     this.bird.flap();
    // }
    // gameOver() {
        //IF Altitude = 0  || collision detected
        //altitude method should be in...?
        // collision method in obsticals       
    // }

    animate(){
        this.background.animate()
        this.mothership.animate()
        this.player.animate()
        this.recieveKeys()
        // this.obstacles.animate(this.ctx)
        // this.drawAltitude()
        // if (this.gameOver()) {
        //     alert(this.altitude) //ADD WIN/ LOSE
        // }
    }

    // win(){
    
    // }
    // lose(){

    // }

    // drawAltitude(){
    //     this.ctx.font = "bold 20pt serif";
    //     this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    //     this.ctx.fillText(this.score, 550, 10);
    //     this.ctx.strokeStyle = "black";
    //     this.ctx.lineWidth = 2;

    // }
    
}


export default Game;