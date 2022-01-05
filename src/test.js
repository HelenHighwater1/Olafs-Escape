let player = {}
player.rightSide = 3
player.leftSide = 1
player.top = 1
player.bottom = 3

let enemy = {}
enemy.rightSide = 4
enemy.leftSide = 2
enemy.top = 2
enemy.bottom = 4


function collidesWith(player, enemies) {
    // console.log("inside collides with")
    let collide = false;
    const _hit = (player, enemy) => {
        if (player.leftSide > enemy.rightSide || //miss: 
            player.rightSide < enemy.leftSide || // 
            player.top > enemy.bottom || //
            player.bottom < enemy.top
            ){ //
            console.log("MISS")
            return false;
        } else {
            console.log('HIT')
            return true;
        }
    };

    enemies.forEach((enemy) => {
        if (_hit(player, enemy)) collide = true;
    });
    return collide;
}

console.log(collidesWith(player, [enemy]))