// alert("Working! :)");

//players
//var player1 =  prompt("Player 1: What is your name?");
//var player2 =  prompt("Player 2: What is your name?");

//document.querySelectorAll("p")[0].innerHTML = player1;
//document.querySelectorAll("p")[1].innerHTML = player2;

//dice1

var randomNumber1 = Math.floor(Math.random() * 6) +1; // 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);


//dice2

var randomNumber2 = Math.floor(Math.random() *6 ) + 1;

var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


//dice3

var randomNumber3 = Math.floor(Math.random() * 6) + 1;
var randomImageSource3 = "images/dice" + randomNumber3 + ".png";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src", randomImageSource3);

var result = [randomNumber1, randomNumber2, randomNumber3];


if (randomNumber1 > randomNumber2 && randomNumber1 > randomNumber3) {
    document.querySelector("h1").innerHTML = "Bori nyert!👧🦄";
}
else if (randomNumber2 > randomNumber1 && randomNumber2 > randomNumber3) {
    document.querySelector("h1").innerHTML = "Boti nyert! 👦🚜";
}
else if (randomNumber3 > randomNumber1 && randomNumber3 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Beni nyert! 👦🍼";
} else if (result.every(r => r === randomNumber1)){
     document.querySelector("h1").innerHTML = "Mindenki nyert 😻";   
}
else {
    document.querySelector("h1").innerHTML = "Dobjatok újra 🤛";   
};


