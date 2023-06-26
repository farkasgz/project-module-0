window.onload = function () {
    const startButton = document.getElementById("start-button");
    const menuButton = document.getElementById("menu-button");
    let game;

    startButton.addEventListener("click", function() {
        startGame();
    })

    function startGame() {
        game = new Game;
        game.start();
    }
}