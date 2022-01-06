
import Game from "./game";

document.addEventListener(
    "DOMContentLoaded",
    function () {
        const canvas = document.getElementById('game-canvas');
        new Game(canvas);
        // window.style.backgroundImage = "url(yggdrasil.png)"
    }
)






