let cards = [];

let gameHUD = document.getElementById("gameHUD").style.display = "none";

document.getElementById("newGame").addEventListener("click", startGame);
document.getElementById("pairNumber").addEventListener("input", isPairNumberValid);

function isPairNumberValid() {
    input = document.getElementById("pairNumber").value;
    if(isNaN(input) || input < 2 || input > 20) {
        document.getElementById("newGame").disabled = true;
    }else {
        document.getElementById("newGame").disabled = false;
    }
}

function startGame() {
    document.getElementById("newGameBtn").style.display = "none";

    gameHUD = document.getElementById("gameHUD");
    gameHUD.style.display = "flex";
    gameHUD.style.flexDirection = "row";
    gameHUD.style.justifyContent = "space-around";

    cards = [];
    pairNumber = document.getElementById("pairNumber").value;

    for(let i = 1; i <= pairNumber; i++) {
        cards.push(new Card(i, "resources/img/back.png", false));
        cards.push(new Card(i, "resources/img/back.png", false));
    }

    getBoard(cards);
}