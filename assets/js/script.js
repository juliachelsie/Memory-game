const cards = document.querySelectorAll('.card');

let firstCard, secondCard;


    // Function to turn the cards //
function turnCard(e) {
    let cardClicked = e.target;
    if (cardClicked != firstCard) {
        cardClicked.classList.add('turn');
        if (!firstCard) {
            return(firstCard = cardClicked);
        }
    }

    secondCard = cardClicked;

    let firstCardImg = firstCard.querySelector('img').src,
        secondCardImg = secondCard.querySelector('img').src;
    cardsMatch(firstCardImg, secondCardImg);
    
    
}
    // Function if make the cards match //
function cardsMatch(firstCardImg, secondCardImg) {
    if (firstCardImg == secondCardImg) {
        firstCard.removeEventListener('click', turnCard),
        secondCard.removeEventListener('click', turnCard);

        firstCard = secondCard = '';
        return;
    }

    // If cards not matc //
    setTimeout(() =>  {
    firstCard.classList.add('wobble');
    secondCard.classList.add('wobble');
}, 500);

    setTimeout(() => {
    firstCard.classList.remove('wobble', 'turn');
    secondCard.classList.remove('wobble', 'turn');

    firstCard = secondCard = '';
    }, 1000);
}

cards.forEach((card) => {
    card.addEventListener('click', turnCard);
});
