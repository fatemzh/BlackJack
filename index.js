let player = {
    name: "Per",
    chips: 0
}

let cards = [] 
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.querySelector(".sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let startGameEl = document.getElementById("start-game-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber > 10){
        return 10
    }
    else if (randomNumber === 1)
    {
        return 11
    }
    else{
        return randomNumber
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    cards = []
    sum = 0

    renderGame()

    startGameEl.textContent = "Start Game"
}

function restartGame(){
    isAlive=false
    cards = [0]
    sum = 0
    renderGame()
}

function renderGame() {
    cardsEl.textContent = ""
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack! You earned 10 chips."
        hasBlackJack = true
        player.chips += 10
    } else {
        message = "You're out of the game!"
        isAlive = false
        if(player.chips>=10) {
            player.chips -= 10
        }
    }
    
    messageEl.textContent = message 
    playerEl.textContent = player.name + ": $" + player.chips 
     
}

function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
} 