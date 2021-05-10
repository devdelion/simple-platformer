import { Level } from './Level.js'
import { Display } from './Display.js'
import { GameState } from './GameState.js'



const simpleLevel = [
    ['*', '*', '*', '*', '*'],
    ['*', 'C', '*', '*', '*'],
    ['#', '#', '*', 'C', '*'],
    ['*', 'P', '*', '*', '*'],
    ['#', '#', '#', '#', '#'],
]

let keys = [];
document.addEventListener("keydown", event => (keys[event.key] = true));
document.addEventListener("keyup", event => (keys[event.key] = false));

(function runGame() {
    function play() {
        if (newGame.update(keys)) {
            alert("GAME OVER");
            document.location.reload();
            window.cancelAnimationFrame(ref);
        }
        newGame.draw(display);

        let ref = window.requestAnimationFrame(play);
    }

    const level = new Level(simpleLevel);
    const newGame = new GameState(level);
    newGame.init();

    const display = new Display(newGame);

    play();
})();