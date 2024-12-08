class Card {
    id;
    imgLink;
    isSelected;
    isDone;

    constructor(id, imgLink, isSelected, isDone) {
        this.id = id;
        this.imgLink = imgLink;
        this.isSelected = isSelected;
        this.isDone = isDone;
    }
}