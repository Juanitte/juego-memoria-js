function clearContainer(container) {
    if(!container) return;
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}