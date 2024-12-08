function getCard(card) {
    let container = document.createElement("div");
    container.classList.add("card-container");
    container.id = card.id;

    // Carta
    let cardElement = document.createElement("div");
    cardElement.classList.add("card");

    // Cara frontal
    let cardFront = document.createElement("div");
    cardFront.classList.add("card-face", "card-front");
    let frontImage = document.createElement("img");
    frontImage.src = `resources/img/${card.id.toString().split("b")[0]}.png`;
    cardFront.appendChild(frontImage);

    // Cara trasera
    let cardBack = document.createElement("div");
    cardBack.classList.add("card-face", "card-back");
    let backImage = document.createElement("img");
    backImage.src = "resources/img/back.png";
    cardBack.appendChild(backImage);

    // Ensamblar la carta
    cardElement.appendChild(cardFront);
    cardElement.appendChild(cardBack);
    container.appendChild(cardElement);

    return container;
}

function spinCard(card) {
    let cardContainer = document.getElementById(card.id);

    card.isSelected = !card.isSelected;
    if (card.isSelected) {
        cardContainer.classList.add("flipped");
        if (checkCards(card.id)) {
            updateScore();
        }
    } else {
        cardContainer.classList.remove("flipped");
    }

    return card.isSelected;
}