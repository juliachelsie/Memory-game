const cards = document.querySelectorAll('.card');

let firstCard, secondCard;
let disableDeck = false;
let cardMatched = 0;


    // Function to turn the cards //
function turnCard(e) {
    let cardClicked = e.target;
    if (cardClicked != firstCard && !disableDeck) {
        cardClicked.classList.add('turn');
        if (!firstCard) {
            return(firstCard = cardClicked);
        }
    }

    secondCard = cardClicked;
    disableDeck = true;

    let firstCardImg = firstCard.querySelector('img').src,
        secondCardImg = secondCard.querySelector('img').src;
    cardsMatch(firstCardImg, secondCardImg);
    
    
}
    // Function if make the cards match //
function cardsMatch(firstCardImg, secondCardImg) {
    if (firstCardImg == secondCardImg) {
        cardMatched++;
        if (cardMatched == 8) {
            setTimeout(() => {
                cardShuffle();
            },2000);
        }
        firstCard.removeEventListener('click', turnCard),
        secondCard.removeEventListener('click', turnCard);

        firstCard = secondCard = '';
        return (disableDeck = false);
    }

    // If cards not match //
    setTimeout(() =>  {
    firstCard.classList.add('wobble');
    secondCard.classList.add('wobble');
}, 500);

    setTimeout(() => {
    firstCard.classList.remove('wobble', 'turn');
    secondCard.classList.remove('wobble', 'turn');

    firstCard = secondCard = '';
    disableDeck = false;
    }, 1000);
}

    // Function to shuffle the cards //
function cardShuffle(){
    cardMatched = 0;
    firstCard = secondCard = '';
    disableDeck = false;

    // Array of the cards //
    let shuffle = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
    shuffle.sort(() => (Math.random() > 0.5 ? 1 : -1));

    // Passing a random image to each card, and removing the turn-class //

    cards.forEach((card, i) => {
        card.classList.remove('turn');
        let imgPic = card.querySelector('.card-back img');
        imgPic.src = `assets/images/img-${shuffle[i]}.jpg`;
        card.addEventListener('click', turnCard);
    });
}

cardShuffle();

cards.forEach((card) => {
    card.addEventListener('click', turnCard);
});
