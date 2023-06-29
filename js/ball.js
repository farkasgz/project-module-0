class Ball{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = 235;
        this.top = 540;
        this.width = 24;
        this.height = 24;

        this.directionX = 0;
        this.directionY = 0;

        this.element = document.createElement("img");
        this.element.src = "./images/ball.png";
        this.element.style.position = "absolute";
        this.element.style.borderRadius = 12;
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;
        this.top += this.directionY;

        if (this.left < 10) {
            this.left = 10;
            this.directionX *= (-1);
        }
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
            this.directionX *= (-1);
        }

        if (this.top < 0) {
            this.top = 0;
            this.directionY *= (-1);
        }
        if (this.top > this.gameScreen.offsetHeight - this.height) {
            this.top = this.gameScreen.offsetHeight - this.height;
            this.directionY *= (-1);
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }

    hitObject(object) {
        const objectRect = object.element.getBoundingClientRect();
        const ballRect = this.element.getBoundingClientRect();
        const ballX = ballRect.left + ballRect.width/2;
        const ballY = ballRect.top + ballRect.height/2;
        const objectX = objectRect.left + objectRect.width/2;
        const objectY = objectRect.top + objectRect.height/2;

        if(
            objectRect.left < ballRect.right &&
            objectRect.right > ballRect.left &&
            objectRect.top < ballRect.bottom &&
            objectRect.bottom > ballRect.top
        ){
            if(Math.abs(ballX - objectX) - objectRect.width/2 > Math.abs(ballY - objectY) - objectRect.height/2) {
                if(ballX - objectX > 0){
                    return "right";
                }
                if(ballX - objectX < 0){
                    return "left";
                }
            } else if(ballY > objectY){
                return "bottom";
            } else {
                return "top"
            }
        } else {
            return false;
        }
    }
}