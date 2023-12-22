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

    let firstCardImg = firstCard.querySelector('img1').src,
        secondCardImg = secondCard.querySelector('img2').src;
    cardsMatch(firstCardImg, secondCardImg);
    
}

function cardsMatch(img1, img2) {
    if (img1==img2) {
        firstCard.removeEventListener('click', 'turnCard'),
        secondCard.removeEventListener('click', 'turnCard');

        firstCard = secondCard = '';
        return;
    }
    
    
    setTimeout(() => {
        firstCard.classList.remove('turn'),
        secondCard.classList.remove('turn');

        firstCard = secondCard = '';
    }, 1000);
}

cards.forEach((card) => {
    card.addEventListener('click', turnCard);
});
