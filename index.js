var randomNumber1 =  Math.floor(Math.random() * 6) + 1;
var image1 = randomNumber1;
image1 = "images\\dice" + image1 + ".png";
document.querySelector(".img1").setAttribute("src", image1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var image2 = randomNumber2;
image2 = "images\\dice" + image2 +".png";
document.querySelector(".img2").setAttribute("src", image2);

if(randomNumber1 === randomNumber2){
  document.querySelector("h1").innerHTML = "Draw!"
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else{
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
