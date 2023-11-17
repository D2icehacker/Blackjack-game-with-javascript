
let hasblackjack = false
let isalive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardEl = document.getElementById("cards-el")

function getrandomcard() {
   
    let randomNumer =  Math.floor( Math.random() * 13 ) + 1
    if (randomNumer > 10) {
        return 10
    } else if (randomNumer === 1) {
        return 11
    } else {
    return randomNumer
    
    }
}


function startgame() {
    isalive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard]
    sum = firstcard + secondcard
    rendergame()
}


function rendergame() {

    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
         cardEl.textContent += cards[i] + " "
        
        }

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
if (isalive === true && hasblackjack === false) {

    let card = getrandomcard()
    sum += card
    cards.push(card)
    rendergame()
}
    
}





