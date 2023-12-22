const cards = document.querySelectorAll('.card');

let firstCard, secondCard;


    // Function to turn the cards //
function turnCard(e) {
    let cardClicked = e.target;
    if (cardClicked == firstCard) {
        cardClicked.classList.add('turn');
        if (!firstCard) {
            return (firstCard = cardClicked);
        }

        secondCard = cardClicked;

        let firstCardImg = firstCard.querySelector('.img').src, 
            secondCardImg = secondCard.querySelector('.img').src;
        cardsmatch(firstCardImg, secondCardImg);
    }
}


cards.forEach((card) => {
    card.addEventListener('click', turnCard);
});
