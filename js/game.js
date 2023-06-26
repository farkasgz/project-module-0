class Game {
    constructor() {
        this.startScreen = document.getElementById("start-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.scoreScreen = document.getElementById("score-screen");

        this.height = 600;
        this.width = 500;

        this.player = new Player;

        this.bricks = [];

        this.score = 0;
        this.lives = 3;

        this.gameIsOver = false;
    }

    start() {
        this.startScreen.style.display = 'none';
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.display = 'block';
        console.log("game started");
        this.gameloop();
    }

    gameloop() {
        if (this.gameIsOver){
            this.endGame();
        }
        this.update();
        window.requestAnimationFrame(() => this.gameloop());
    }

    update() {
        this.player.move();
    }

    endGame() {
        
    }
}