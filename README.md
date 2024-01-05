# Memory-game
Memory-game is, as it describes i the title, a memory-game. With happy colours and images with animals it is a fun way for children to practise their memory skills.

## Existing features

__Header__
- The website have a header with the text "Memory-Game!"
![Header](https://github.com/juliachelsie/Memory-game/blob/main/media/header.PNG)

__Welcome-text and rules__
- Under the header there is a text that welcomes the user and explains how the game works in a easy way. 
![Welcome-text](https://github.com/juliachelsie/Memory-game/blob/main/media/welcome-memory.PNG)

__Game-board__
- The gameboard have 16 cards, which the user can click to turn. The card has question marks on them, and when they are turned there is cute animals. 
![Frontside](https://github.com/juliachelsie/Memory-game/blob/main/media/board.PNG)
![Backside](https://github.com/juliachelsie/Memory-game/blob/main/media/turnedcards1.PNG)

__Music__
- There is a option for the user to play music while playing the game. The music is very friendly and happy.
![Music](https://github.com/juliachelsie/Memory-game/blob/main/media/audiopic.PNG)

__Alert__
- When the user wins the game there is an alert popping up and congratulates the user.
![Alert](https://github.com/juliachelsie/Memory-game/blob/main/media/congrats.PNG)

- __Fanfare__
- When the game is finished there is a fanfare playing in the background to celebrate the win.

__Footer__
- At the bottom of the page there is a footer that contains a text that thank the user for playing the game, and two links to social media.
![Footer](https://github.com/juliachelsie/Memory-game/blob/main/media/footer.PNG)

## Design

- __Typography__
- Google Fonts was used for the following font:
- Quicksand is used on the body and heading, and is a sans-serif font.
  
- __Colour__
- I used this color scheme on the website. I think the palette goes well with the theme and gives a friendly and happy impression to the user.
![Color scheme](https://github.com/juliachelsie/Memory-game/blob/main/media/coolors-memory.PNG)

## Testing

### Testing code via validators

- __HTML__
- No errors were returned when passing through the official [W3C validator](https://github.com/juliachelsie/Memory-game/blob/main/media/htmlvalidator.PNG)

- __CSS__
- No errors were returned when passing through the official [Jigsaw](https://github.com/juliachelsie/Memory-game/blob/main/media/cssvalidator.PNG)

- __Javascript__
- No errors were returned when passing through the official [JSHint]

### Testing via lighthouse
- __Desktop__
![Desktop](https://github.com/juliachelsie/Memory-game/blob/main/media/desktoplighthouse.PNG)
- __Mobile__
![Mobile](https://github.com/juliachelsie/Memory-game/blob/main/media/mobilelighthouse.PNG)

### Fixed bugs
There was a bug in the javascript. When the game is finished and all the cards are matched there is a alert message that congratulates the user, but the alert message popped up before the last card was turned. I fixed this by editing my code and moving the alert message to the right place.

### Unfixed bugs
There is a bug in the javascript when turning the cards. If i press one card twice, the card stays on that side. And i have to reload the page and start over. This is something i would like to fix in the future. 

### How does it look on different screen sizes?
I have tested how the website look on different screen sixes, here how it look:
- __Desktop__
![Desktop](https://github.com/juliachelsie/Memory-game/blob/main/media/ondesktop.PNG)
- __Tablet__
![Tablet](https://github.com/juliachelsie/Memory-game/blob/main/media/onipad.PNG)
- __Mobile__
![Mobile](https://github.com/juliachelsie/Memory-game/blob/main/media/onmobile.PNG)

## Deployment

- The site was deployed to Github pages. And the steps i followed were:
- In the GitHub repository, navigate to the Settings tab
- From the source section drop-down menu, select the Master Branch
- Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - https://juliachelsie.github.io/Memory-game

## Credits

### Content

- I found some information about how to get an image to wobble at [UnusedCSS](https://unused-css.com/blog/css-shake-animation)
- The icons i used for the social media links was taken from [Font Awesome](https://fontawesome.com/)
- I found imformation about ho to implement audio in html at [W3Schools](https://www.w3schools.com/html/html5_audio.asp)
- The palette was created on [Coolors](https://coolors.co/)
- I used the teaching materials from [Code Institute](https://codeinstitute.net/se/full-stack-software-development-diploma/?utm_term=code%20institute&utm_campaign=CI+-+SWE+-+Search+-+Brand&utm_source=adwords&utm_medium=ppc&hsa_acc=8983321581&hsa_cam=14660337051&hsa_grp=134087657984&hsa_ad=635849372549&hsa_src=g&hsa_tgt=aud-594467886660:kwd-319867646331&hsa_kw=code%20institute&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQiAy9msBhD0ARIsANbk0A-KzWfEWIEKro0lAjCWlRs39NXo9RYt9D-dWoWORVO4s9uSL8000pcaArUhEALw_wcB)
- I found information on how to implement sound effets on [https://medium.com/](https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984)

### Media
- The images i used for the memory cards was taken from [Freepic](https://www.freepik.com/free-photos-vectors/memory-game)
- The music i used is taken from [Zapsplat](https://www.zapsplat.com/)
