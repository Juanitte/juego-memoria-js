let board = document.getElementById("gameBoard");

function getBoard(cards) {
    clearContainer(board);
    for (let i = 0; i < cards.length; i++) {
        const card = getCard(cards[i]);
        board.appendChild(card);
    }
}