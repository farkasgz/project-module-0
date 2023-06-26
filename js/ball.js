class Ball{
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = 230;
        this.top = 540;
        this.width = 40;
        this.height = 40;

        this.directionX = 1;
        this.directionY = 1;

        this.element = document.createElement("img");
        this.element.src = "./images/ball.png";
        this.element.style.position = "absolute";
        this.element.style.borderRadius = 20;
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
}