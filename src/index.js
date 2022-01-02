
import Game from "./game";

document.addEventListener(
    "DOMContentLoaded",
    function () {
        const canvas = document.getElementById('game-canvas');
        new Game(canvas);
    }
)






