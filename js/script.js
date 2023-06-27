window.onload = function () {
    const startButton = document.getElementById("start-button");
    const menuButton = document.getElementById("menu-button");
    let game;

    startButton.addEventListener("click", function() {
        startGame();
    })

    menuButton.addEventListener("click", function() {
        backToMenu();
    })

    function startGame() {
        game = new Game;
        game.start();
    }

    function backToMenu() {
        location.reload();
    }

    window.addEventListener("keydown", inputPress);
    window.addEventListener("keyup", inputRelease);

    function inputPress (event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowRight",
        ];

        if (possibleKeystrokes.includes(key)) {
            switch (key) {
                case "ArrowLeft": 
                    game.player.directionX = (-0.67)*game.speed;
                    break;
                case "ArrowRight":
                    game.player.directionX = (0.67)*game.speed;
                    break;
            }
        }
    }

    function inputRelease (event) {
        const key = event.key;
        const possibleKeystrokes = [
            "ArrowLeft",
            "ArrowRight",
        ];

        if (possibleKeystrokes.includes(key)) {
            game.player.directionX = 0;
        }
    }
}