class Game {
    constructor() {
        this.startScreen = document.getElementById("start-screen");
        this.gameScreen = document.getElementById("game-screen");
        this.scoreScreen = document.getElementById("score-screen");

        this.height = 600;
        this.width = 500;

        this.player = new Player(
            this.gameScreen,
            200,
            575,
            100,
            20,
            "./images/player.jpg"
        );
        this.ball = new Ball(this.gameScreen);

        this.bricks = [];

        this.score = 0;
        this.lives = 3;

        //this.gameIsOver = false;
    }

    start() {
        this.startScreen.style.display = 'none';
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.display = 'block';
        this.gameloop();
    }

    gameloop() {

        if (this.lives === 0){
            this.endGame();
            return;
        }
        this.update();
        window.requestAnimationFrame(() => this.gameloop());
    }

    update() {
        this.player.move();
        this.ball.move();

        if (this.bricks.length < 1){
            const brickImg = [
                "images/blueBrick.png",
                "images/grayBrick.png",
                "images/greenBrick.png",
                "images/pinkBrick.png",
                "images/tealBrick.png",
                "images/yellowBrick.png"
            ];

            for (let i=0; i<8; i++) {
                this.bricks.push(new Brick(this.gameScreen, 15+i*60, brickImg[Math.floor(Math.random()*6)]));
            }
        }

        if (this.ball.top > this.player.top) {
            this.lives--;
        };

        if (this.ball.hitPlayer(this.player)){
            this.ball.directionY *= (-1);
        }
        
        for(let i = 0; i < this.bricks.length; i++){
            const brick = this.bricks[i];
            if (this.ball.hitBrick(brick)){
                brick.element.remove();
                this.bricks.splice(i, 1);
                this.score ++;
                i--;
                this.ball.directionY *= (-1);
            }
        }

        document.getElementById("score").innerText  = `${this.score}`;
        document.getElementById("lives").innerText  = `${this.lives}`;
    }

    endGame() {
        this.player.element.remove();
        this.ball.element.remove();
        this.bricks.forEach((brick) => brick.element.remove());

        //this.gameIsOver = true;
        this.gameScreen.style.display = 'none';
        this.scoreScreen.style.display = 'block';
    }
}