let moves = 0;

function getMoves() {
    moves = 0;
    let movesContainer = document.getElementById("moves");
    clearContainer(movesContainer);
    // moves - h2
        let movesH2 = document.createElement("h2");
        movesH2.id = "moves-h2";
        movesH2.innerText = `Moves: ${moves}`;
    //
    movesContainer.appendChild(movesH2);
}

function updateMoves() {
    moves += 1;
    document.getElementById("moves-h2").innerText = `Moves: ${moves}`;
}