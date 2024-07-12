import './style.css';
import { createDeck } from './usecases/create-deck.js';

const myModule = (() => {
    'use strict'
    /**
     * 2C - 2 Clubs
     * 2D - 2 Diamonds
     * 2H - 2 Heart
     * 2S  2 spades
     */

    let deck = [];
    const types = ['C', 'D', 'H', 'S']
    const additionalCards = ['A', 'J', 'Q', 'K']

    let playerPoints = [];

    const btnAsk = document.querySelector('#btnAsk');
    const btnStart = document.querySelector('#btnNew');
    const btnStop = document.querySelector('#btnStop');

    const smalls = document.querySelectorAll('small');
    const divCards = document.querySelectorAll('.divCards');

    const initGame = ( numPlayers = 1 ) => {
        deck = createDeck( types, additionalCards );
        playerPoints = [];
        for(let i = 0; i <= numPlayers; i++){
            playerPoints.push(0);
        }
        smalls.forEach( elem => elem.innerText );
        divCards.forEach( div => div.innerText )

        btnAsk.disabled = false;
        btnStop.disabled = false;
    }



    const askCard = () => {
        if ( deck.length === 0) {
            throw 'No more cards available';
        }
        return deck.pop();
    }

    const cardValue = ( card ) => {
        const cardValue = card.substring(0, card.length-1);
        return (isNaN( cardValue)) ?
            (cardValue === 'A') ? 11 : 10
            : cardValue * 1;
    }

    const addPoints = (card, turn) => {
        playerPoints[turn] += cardValue(card);
        console.log(playerPoints[turn]);
        smalls[turn].innerText = playerPoints[turn];
    }

    const addCard = (card, turn) => {
        const imgCard = document.createElement('img');
        imgCard.src = `assets/cards/${ card }.png`;
        imgCard.className = 'card';
        divCards[turn].append(imgCard);
    }

    const defineWinner = () => {
        const [player, computerPoints] = playerPoints;
        setTimeout(() => {
            if( computerPoints === player ) {
                alert('Tie!');
            } else if ( player > 21 ) {
                alert('Computer wins!')
            } else if( computerPoints > 21 ) {
                alert('Player 1 wins!');
            } else {
                alert('Computer wins!')
            }
        }, 100 );
    }

    const computerTurn = ( minPoints ) => {
        let computerPoints = 0;
        let player = playerPoints[0];
        do {
            computerPoints = playerPoints[playerPoints.length -1];
            const card = askCard();
            addPoints(card, playerPoints.length -1 );
            addCard(card, playerPoints.length -1 );

            if ( computerPoints > 21) {
                break;
            }
        } while ( computerPoints < player);
        defineWinner();
    }

    btnAsk.addEventListener('click', () => {
        const card = askCard();
        addPoints(card, 0);
        addCard(card, 0);

        if( playerPoints > 21){
            console.log('Player 1 lose');
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerTurn();
        } else if ( playerPoints === 21) {
            console.log('Player 1 wins');
            btnAsk.disabled = true;
            btnStop.disabled = true;
            computerTurn();
        }
    });

    btnStop.addEventListener('click', () => {
        btnAsk.disabled = true;
        btnStop.disabled = true;

        computerTurn();
    });

    btnStart.addEventListener('click', () => {
        initGame();
    });

    return {
        newGame: initGame
    }
})();

