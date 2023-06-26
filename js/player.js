class Player {
    constructor (gameScreen, left, top, width, height, imgSrc) {
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = top;
        this.width = width;
        this.height = height;

        this.directionX = 0;

        this.element = document.createElement("img");
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;

        this.gameScreen.appendChild(this.element);
    }

    move() {
        this.left += this.directionX;

        if (this.left < 10) this.left = 10;
        if (this.left > this.gameScreen.offsetWidth - this.width - 10) {
            this.left = this.gameScreen.offsetWidth - this.width - 10;
        }

        this.updatePosition();
    }

    updatePosition() {
        this.element.style.left = `${this.left}px`;
    }
}