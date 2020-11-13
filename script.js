class AudioController {
    constructor() {
        this.bgMusic = new Audio('Assets/audio/waves.mp3');
        this.flipSound = new Audio('Assets/audio/flip.mp3');
        this.matchSound = new Audio('Assets/audio/match.mp3');
        this.victorySound = new Audio('Assets/audio/victory.mp3');
        this.gameOverSound = new Audio('Assets/audio/gameover.mp3');
        this.bgMusic.volume = 0.5;
        this.bgMusic.loop = true;
    }
    startMusic() {
        this.bgMusic.play();
    }
    stopMusic() {
        this.bgMusic.pause();
        this.bgMusic.currentTime = 0;
    }
    flip() {
        this.flipSound.play();
    }
    match() {
        this.matchSound.play();
    }
    victory() {
        this.stopMusic();
        this.victorySound.play();
    }
    gameOver() {
        this.stopMusic();
        this.gameOverSound.play();
    }
}

class summerMemories {
    constructor(totalTime, cards) {
        this.cardsArray = cards;
        this.totalTime = totalTime;
        this.timeRemaining = totalTime;
        this.timer = document.getElementById('time-remaining');
        this.ticker = document.getElementById('flips');
        this.audioController = new AudioController();
    }
startGame() {
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    this.cardToCheck = null;
    this.matchedCards = [];
    this.busy = true;

    this.shuffleCards();
    }

flipCard(card) {
    if(this.canFlipCard(card)) {
        this.audioController.flip();
        this.totalClicks++;
        this.ticker.innerText = this.totalClicks;
        card.classList.add('visble');

        //if statement
    }
}

    shuffleCards() {
        for(let i = this.cardsArrayLength - 1; i > 0; i--) {
            let randIndex = math.floor(Math.random() * (i+1));
            this.cardsArray[randIndex].style.order = i;
            this.cardsArray[i].style = randIndex;

        }
    }

canFlipCard(card) {
    return true;
    //return(!this.busy && !this.matchedCards.includes(card) && card !== this.cardToCheck)
    }   
}

function ready() {
    let overlays = Array.from(document.getElementsByClassName('overlay-text'));
    let cards = Array.from(document.getElementsByClassName('card'));
    let game = new SummerMemories(100, cards);

    overlays.forEach(overlay => {
        overlay.addEventListener('click', () => {
            overlay.classList.remove('visible');
            game.startGame();
        });
    });

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // game.flipCard(card);
        });
    });
}

if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', ready());
} else {
    ready();
}

