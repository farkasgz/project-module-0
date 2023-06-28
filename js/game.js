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

        this.bricks = [];
        this.ball = new Ball(this.gameScreen);

        this.score = 0;
        this.lives = 3;
        this.speed = 2;
    }

    start() {
        this.startScreen.style.display = 'none';
        this.gameScreen.style.height = `${this.height}px`;
        this.gameScreen.style.width = `${this.width}px`;
        this.gameScreen.style.display = 'block';
        let intervalId;
        window.addEventListener("keydown", (event) => {
            if(event.key === " "){
                this.intervalId = setInterval(() => this.speed++,5000);
                if(this.ball.directionY === 0){
                    this.ball.directionX = -1 + Math.random()*2;
                    this.ball.directionY = 0 - (this.speed-Math.abs(this.ball.directionX));
                }
            }
        });
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

        if (this.bricks.length <= 20){
            this.bricks.forEach((elem) => {
                elem.top += 35;
                elem.updatePosition();
            });

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

        if (this.ball.top > this.player.top + this.player.height) {
            this.lives--;
            this.ball.element.remove();
            clearInterval(this.intervalId);
            this.speed = 2;
            this.ball = new Ball(this.gameScreen);
        };

        if (this.ball.hitObject(this.player)){
            this.ball.directionX = (((this.ball.left + this.ball.width/2) - (this.player.left + this.player.width/2)) / (this.player.width/2)) * (this.speed/2);
            this.ball.directionY = 0 - (this.speed-Math.abs(this.ball.directionX));
        }
        
        for(let i = 0; i < this.bricks.length; i++){
            const brick = this.bricks[i];
            const hit = this.ball.hitObject(brick);
            if (hit){
                brick.element.remove();
                this.bricks.splice(i, 1);
                this.score ++;
                i--;
                if (hit === "side"){
                    this.ball.directionX *= (-1);
                }
                if (hit === "bottom"){
                    this.ball.directionY = 0 + (this.speed-Math.abs(this.ball.directionX));
                }
                if (hit === "top"){
                    this.ball.directionY = 0 - (this.speed-Math.abs(this.ball.directionX));
                }
            }
        }

        document.getElementById("score").innerText  = `${this.score}`;
        document.getElementById("lives").innerText  = `${this.lives}`;
    }

    endGame() {
        this.player.element.remove();
        this.ball.element.remove();
        this.bricks.forEach((brick) => brick.element.remove());

        this.gameScreen.style.display = 'none';
        this.scoreScreen.style.display = 'block';
    }
}