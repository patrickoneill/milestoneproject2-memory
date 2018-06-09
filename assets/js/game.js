let card = document.getElementsByClassName("card");         //telling where i want to find the card
let cards = [...card]                                       //creating an array with all the cards

console.log(cards);                                         //checking that it works and that all the cards are there

const deck = document.getElementById("all-cards");          //all the cards that are in the deck       
console.log(deck);                                          //checking that it works (didn't realise that I get all the info)

let matchCard = document.getElementsByClassName("match");   //catches the matched class 
console.log(matchCard);                                     

var opened = [];

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
};

document.body.onload = start();

function start() {
    cards = shuffle(cards);
    
    for (var i = 0; i < cards.length; i++) {
        deck.innerHTML = "";
        [].forEach.call(cards, function(item) {
            deck.appendChild(item);
        });
        cards[i].classList.remove("show", "open", "match", "disable");
    }
}

var displayCard = function () {
    this.classList.toggle("open");
    this.classList.toggle("show");
    this.classList.toggle("disable");
};



