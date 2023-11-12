let firstcard = 10
let secondcard = 4
let cards = [firstcard, secondcard]
let sum = firstcard + secondcard 
let hasblackjack = false
let isalive = true
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

function startgame(){
    rendergame()
}


function rendergame() {

    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum

    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack!  "
        hasblackjack = true
    } else {
        message = "You're out of the game!  "
        isalive = false
    }
    messageEl.textContent = message

}

function newcard() {
     let card = 6
     sum += card
     cards.push(card)
     rendergame()
}
