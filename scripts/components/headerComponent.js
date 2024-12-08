let cards = [];
let selectedCards = [];
let doneCards = [];
let isFirstMove = true;

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
        cards.push(new Card(i.toString(), "resources/img/back.png", false, false));
        cards.push(new Card(i+"b", "resources/img/back.png", false, false));
    }

    shuffleArray(cards);

    getTimer();
    getScore();
    getMoves();

    getBoard(cards);
}

function stopGame() {
    stopTimer();
    document.getElementById("gameOver").style.display = "block";
    let resetButton = document.getElementById("resetBtn");
    resetButton.style.display = "block";
    resetButton.addEventListener("click", () => {
        location.reload();
    });
}

function getCards(){
    return cards;
}

function setCards(cardArray) {
    cards = cardArray;
}

function checkCards(cardId) {
    selectedCards = [];
    if(isFirstMove) {
        isFirstMove = false;
        startTimer();
    }
    cards.forEach(card => {
        if(card.id == cardId) {
            card.isSelected = true;
        }
    });
    selectedCards = cards.filter(card => card.isSelected && !card.isDone);
    if(selectedCards.length == 2) {
        if(selectedCards[0].id != selectedCards[1].id+"b" && selectedCards[1].id != selectedCards[0].id+"b") {
            selectedCards[0].isSelected = false;
            selectedCards[1].isSelected = false;
            cards.forEach(card => {
                if(card.id == selectedCards[0].id || card.id == selectedCards[1].id) {
                    card.isSelected = false;
                    setTimeout(() => {
                        card.imgLink = "resources/img/back.png";
                        cardContainer = document.getElementById(card.id);
                        cardContainer.classList = "card-container card-img-default";
                        cardContainer.children[0].src = "resources/img/back.png";
                    }, 1000);
                }
            });
            return false;
        }else{
            cards.forEach(card => {
                if(card.id == selectedCards[0].id || card.id == selectedCards[1].id) {
                    card.isDone = true;
                    doneCards.push(card);
                }
            });
            if(doneCards.length == cards.length) {
                stopGame();
            }
            return true;
        }
    }
}