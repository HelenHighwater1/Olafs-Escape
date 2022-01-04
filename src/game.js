import Player from "./player";
import Enemy from "./enemy";
import Background from "./background";
import Mothership from "./mothership";

class Game {
    constructor(canvas) {
        this.ctx = canvas.getContext("2d");
        this.dimensions = { width: canvas.width, height: canvas.height };
        this.background = new Background(this.dimensions, this.ctx);
        this.mothership = new Mothership(this.ctx);
        this.enemies = [];
        this.addEnemies();
        this.player = new Player(this.dimensions, this.ctx);
        this.recieveKeys();
        this.running = false;

        this.play();
    }

    addEnemies() {
        for (let i = 0; i < 15; i++) {
            this.enemies.push(new Enemy(this.ctx, this.dimensions))
        }

    }

    play() {
        this.altitude = 50000;
        // this.addEnemies()
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
            // this.enemies.forEach(enem => enem.animate())
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
        for (let i = 0; i < 15; i++) {
            this.enemies.push(new Enemy(this.ctx, this.dimensions))
        }
        
    }


    // gameOver() {
        //IF Altitude = 0  || collision detected
        //altitude method should be in...?
        // collision method in obsticals       
    // }

    animate(){
        // console.log(this.enemies)
        this.ctx.clearRect(0, 0, 600, 400)
        this.ctx.drawImage(this.background.img, 0, this.background.y, 1200, 3500, 0, 0, 600, 1771);
        this.ctx.drawImage(this.mothership.img, 400, this.mothership.y, this.mothership.width, this.mothership.height )
        this.ctx.drawImage(this.player.img, this.player.x, this.player.y, this.player.width, this.player.height)
        this.enemies.forEach(enemy => {
            // console.log(enemy.img)
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height)
        })
        this.background.move()
        if (this.background.y >= 2500) return gameWon
        this.mothership.move()
        this.player.move()
        this.enemies.forEach(enemy => { 
            if (this.collidesWith(this.player, enemy)){
             return false
            } else {
                enemy.move()
            }
            });
        window.requestAnimationFrame(this.animate.bind(this))

       // this.recieveKeys()
        // this.enemies.forEach(enemy => if collidesWith(this.player, enemy) game_over())
        // this.collidesWith()
        // this.drawAltitude()
        // if (this.gameOver()) {
        //     alert(this.altitude) //ADD WIN/ LOSE
        // }
   
    }

    collidesWith() {
        console.log("inside collides with")
        let hit = false;
        const _hit = (player, enemy) => {
            if (player.rightSide > enemy.leftSide ||
                player.leftSide < enemy.rightSide || 
                player.top > enemy.bottom ||
                player.bottom < enemy.top) {  
                return false;
            } else {
                console.log('confirmed hit')
                return true;
            }
        };

        this.enemies.forEach((enemy) => {
            if ( _hit(this.player, enemy))  hit = true; 
        });
        return hit;
    }

    gameWon(){
        console.log('GAME WON')
    }
    gameLost(){
        console.log("GAME LOST")
    }



    // drawAltitude(){
    //     this.ctx.font = "bold 20pt serif";
    //     this.ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    //     this.ctx.fillText(this.score, 550, 10);
    //     this.ctx.strokeStyle = "black";
    //     this.ctx.lineWidth = 2;

    // }
    
}


export default Game;