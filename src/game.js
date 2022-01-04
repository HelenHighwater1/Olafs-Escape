import Player from "./player";
import Enemy from "./enemy";
import Background from "./background";
import Mothership from "./mothership";

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.background = new Background(this.dimensions, this.ctx);
        this.mothership = new Mothership(this.ctx)
        this.enemies = []
        this.player = new Player(this.dimensions, this.ctx)
        this.recieveKeys();
        this.running = false
        this.play();
    }


    play() {
        this.altitude = 50000;
        this.addEnemies()
        this.animate()
        
    }

    recieveKeys(){
        window.addEventListener("keydown", this.onKeyDown.bind(this)) 

    }

    onKeyDown(e){
        if (!this.running) {
            this.running = true
            this.background.speed = 1
            this.mothership.speed = 1.1
            this.enemies.forEach(enem => enem.animate())
        }
        if (this.gameOver) {
            this.background.speed = 0
            // this.player.dir = 0
        }
        switch (e.code) {
            case "Space":
                if (this.player.shieldUp === true) {
                    this.player.shieldUp = false
                    this.background.speed = 10
                } else {
                    this.player.shieldUp = true
                    this.background.speed = 1
                }
                this.player.updateShield();
                break;
            case "ArrowLeft":
                this.player.dir -= .2;
                break; 
            case "ArrowRight":
                this.player.dir += .2;
                break;
        }
        // refresh()
    }


    addEnemies(){
        for (let i = 0; i < 10; i++) {
            this.enemies.push(new Enemy(this.ctx, this.dimensions))
        }
        this.enemies.forEach(enemy => enemy.animate())
    }


    
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
        console.log(this.enemies)
        // this.enemies.forEach(en => en.animate())
        // this.enemy.animate()
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