class Brick {
    constructor(gameScreen, left, imgSrc){
        this.gameScreen = gameScreen;
        this.left = left;
        this.top = 10;
        this.width = 50;
        this.height = 25;

        this.element = document.createElement("img");
        this.element.classList.add("brick")
        this.element.src = imgSrc;
        this.element.style.position = "absolute";
        this.element.style.width = `${this.width}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
        this.gameScreen.appendChild(this.element);
    }

}