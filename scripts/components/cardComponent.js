function getCard(card) {
    //div - container
    let container = document.createElement("div");
    container.classList.add("card-container");
    container.id = card.id;
        //img - card
        let cardImage = document.createElement("img");
        cardImage.classList.add("card-img");
        cardImage.src = card.imgLink;
        cardImage.alt = card.id;
        //
    container.appendChild(cardImage);
    //
    return container;
}

function spinCard(card) {
    if(card.isSelected)
        card.imgLink = "resources/img/" + card.id + ".png";
    else
        card.imgLink = "resources/img/back.png";
}