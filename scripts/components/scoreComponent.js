let score = 0;

function getScore() {
    score = 0;
    let scoreContainer = document.getElementById("score");
    clearContainer(scoreContainer);
    // score - h2
        let scoreH2 = document.createElement("h2");
        scoreH2.id = "score-h2";
        scoreH2.innerText = `Score: ${score}`;
    //
    scoreContainer.appendChild(scoreH2);
}

function updateScore() {
    score += 1;
    document.getElementById("score-h2").innerText = `Score: ${score}`;
}