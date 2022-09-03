var player1 = "player 1";
var player2 = "player 2";

function edit_names() {
    player1 = prompt("change player1 name");
    player2 = prompt("change player2 name");

    document.querySelector("p.player1").innerHTML = player1;
    document.querySelector("p.player2").innerHTML = player2;
}

function roll_the_dice() {    
    setTimeout(function () {
        var randomnumber1 = Math.floor(Math.random() * 6) + 1;
        var randomnumber2 = Math.floor(Math.random() * 6) + 1;

        document.querySelector(".img1").setAttribute("src", "dice" + randomnumber1 + ".png");
        document.querySelector(".img2").setAttribute("src", "dice" + randomnumber2 + ".png");

        if (randomnumber1 === randomnumber2) {
            document.querySelector("h1").innerHTML = "Draw !!!!";
        }
        else if (randomnumber1 > randomnumber2) {
            document.querySelector("h1").innerHTML = (player1+" "+ "wins!");
        }
        else {
            document.querySelector("h1").innerHTML = (player2 +" "+ "wins!");
        }
    },2500);
}