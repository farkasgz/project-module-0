class Heart {
    constructor(){
        this.width = 25;
        this.height = 25;

        this.element = document.createElement("img");
        this.element.src = "images/life.png";
        this.element.style.width = `25px`;
        this.element.style.height = `25px`;
        document.getElementById("lives").appendChild(this.element);
    }
}