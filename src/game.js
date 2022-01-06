import Player from "./player";
import Enemy from "./enemy";
import Background from "./background";
import Mothership from "./mothership";

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.altitude = 2500
        this.altitudeSpeed = 0
        this.background = new Background(this.dimensions, this.ctx);
        this.mothership = new Mothership(this.ctx);
        this.enemies = [];
        this.player = new Player(this.dimensions, this.ctx);
        this.recieveKeys();
        this.running = false;
        this.gameOver = false;
        this.instructions = document.getElementById("instructions")
        this.win = document.getElementById("win")
        this.lose = document.getElementById("lose")
    }
    
    
    addEnemies() {
        for (let i = 0; i < 40; i++) {
            this.enemies.push(new Enemy(this.ctx, this.dimensions));
        }
    }
    
    

    play() {
        this.addEnemies();
        this.animate();
    }

 
    recieveKeys(){
        window.addEventListener("keydown", this.onKeyDown.bind(this)) 

    }

    onKeyDown(e){
        if (!this.running) {
            this.instructions.style.display = 'none'
            this.play();
            this.running = true
            this.enemies.forEach(enemy => {
                if(enemy.dir <= 1) {
                    enemy.xspeed = Math.random() 
                    enemy.yspeed = 1
                }else {
                    enemy.xspeed = -Math.random() 
                    enemy.yspeed = 1
                }

            })
            this.background.speed = 1
            this.mothership.speed = 1.1
            this.altitudeSpeed  = 1
        }
        if (this.gameOver) {
            location.reload();
            // this.player.dir = 0
        }
        switch (e.code) {
            case "Space":
                if (this.player.shieldUp === true) {
                    this.player.shieldUp = false
                    // this.player.img = this.player.shieldown
                    // this.background.speed = 10
                    // this.mothership.speed = 10
                    
                } else {
                    this.player.shieldUp = true
                    this.background.speed = 1
                    // if (this.player.shieldUp && this.dir === 0) {
                    //     this.player.img = this.player.shieldUp
                    // } else if (this.player.shieldUp && this.dir > 0) {
                    //     this.player.img = this.player.glideRight
                    // } else {
                    //     this.player.img = this.player.glideLeft
                    // }
                }
                // this.player.updateShield();
                break;
            case "ArrowLeft":
                this.player.dir -= .2;
                break; 
            case "ArrowRight":
                this.player.dir += .2;
                break;
        }
 
    }

    animate(){
        //draw all classes
        this.ctx.clearRect(0, 0, 600, 400)
        this.ctx.drawImage(this.background.img, 0, this.background.y, 1200, 3500, 0, 0, 600, 1771);
        this.drawAltitude()
        this.ctx.drawImage(this.mothership.img, 400, this.mothership.y, this.mothership.width, this.mothership.height )
        this.ctx.drawImage(this.player.img, this.player.x, this.player.y, this.player.width, this.player.height)
        this.enemies.forEach(enemy => {
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
        })

        //move all classes
        this.background.move()
        if (this.background.y >= 2500) {
            this.gameWon()
            return 
        } 
        this.altitude -= this.altitudeSpeed

        // checks for collision before making the next animation frame
        if (this.gameOver === false){
        if (this.collidesWith()) {
            this.gameOver = true
            this.gameLost()
            this.running = false
            return
        } else {
            this.enemies.forEach(enemy => enemy.move())
            this.mothership.move()
            this.player.move()
            window.requestAnimationFrame(this.animate.bind(this))
        }
    }

    }

    collidesWith() {
        let collide = false
        let player = this.player
        this.enemies.forEach((enemy) => {
            if (collide === false)
                if (player.x + 10 > enemy.x + enemy.width || 
                    player.x + player.width < enemy.x + 10 || 
                    player.y + 10 > enemy.y + enemy.height || 
                    player.y + player.height < enemy.y + 10 
                ) { 
           
                } else {
                   
                    collide = true; 
                    this.gameOver = true
                }
        })

        return collide;
    }

    gameWon(){
       
        this.gameOver = true
        this.win.style.display = 'block'
         
    }   
    gameLost(){
        this.gameOver = true
        this.running = false
        this.lose.style.display = 'block'

    }



    drawAltitude(){
        this.ctx.font = "15pt Comfortaa";
        this.ctx.fillStyle = "rgba(211, 222, 226, 0.8)";
        this.ctx.fillText(`Altitude: ${this.altitude}`, 450, 30);
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 2;

    }
    
}




export default Game;