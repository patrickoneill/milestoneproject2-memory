var cardArray = [{
        "name": "ten",
        "img": "assets/images/ten_of_diamonds.png"
    },
    {
        "name": "ace",
        "img": "assets/images/ace_of_spades.png"
    },
    {
        "name": "jack",
        "img": "assets/images/jack_of_hearts2.png"
    },
    {
        "name": "king",
        "img": "assets/images/king_of_hearts2.png"
    },
    {
        "name": "queen",
        "img": "assets/images/queen_of_clubs2.png"
    }
];

console.log(cardArray)

var gamePlay = cardArray.concat(cardArray).sort(function() {
    return 0.5 - Math.random();
});


var first = "";
var second = "";
var count = 0;
var previous = "null";
var time = 1500;

var game = document.getElementById("letsPlay");

var stage = document.createElement("section");

stage.setAttribute("class", "grid");
game.appendChild(stage);

gamePlay.forEach(function(item) {
    var name = item.name,
        img = item.img;

    var card = document.createElement("div");
    card.classList.add("card");
    card.dataset.name = name;

    var front = document.createElement("div");
    front.classList.add("front");
    front.style.backgroundImage = "url(assets/images/red_joker.png)";


    var back = document.createElement("div");
    back.classList.add("back");
    back.style.backgroundImage = "url(" + img + ")";

    stage.appendChild(card);
    card.appendChild(front);
    card.appendChild(back);
});

var match = function match() {
    var selected = document.querySelectorAll(".selected");
    selected.forEach(function(card) {
        card.classList.add("match");
    });
};



var reset = function reset() {
    first = "";
    second = "";
    previous = "null";
    

    var selected = document.querySelectorAll(".selected");
    selected.forEach(function(card) {
        card.classList.remove("selected");
    });
};


stage.addEventListener("click", function (event) {
    
    var clicked = event.target;
    
    if (clicked.nodeName === "SECTION" || clicked === previous || clicked.parentNode.classList.contains("selected") || clicked.parentNode.classList.contains("match")) {
        return;
    }
    
    if (count < 2) {
        count++;
        if (count === 1) {
            first = clicked.parentNode.dataset.name;
            console.log(first);
            clicked.parentNode.classList.add("selected");
        } else {
            second = clicked.parentNode.dataset.name;
            console.log(second);
            clicked.parentNode.classList.add("selected");
        }
        
        if ( first && second) {
            if (first === second) {
                setTimeout(match, time);
            }
            setTimeout(reset, time);
        }
        previous = clicked;
    }
});