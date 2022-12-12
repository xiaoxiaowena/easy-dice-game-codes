//create random number from 1-6 for dice 1 and 2
var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
const player1 = randomNumber1.toString();
const player2 = randomNumber2.toString();
// console.log(randomNumber1);
// console.log(randomNumber1);
var image1 = "images/dice"+randomNumber1.toString()+".png"
var image2 = "images/dice"+randomNumber2.toString()+".png"
// $(".play Button").click(function () {
//   $(".img1").attr("scr",image1);
// })
$('.play Button').on({
     'click': function(){
         $('.img1').attr('src',image1);
         $('.img2').attr('src',image2);
         if (randomNumber1>randomNumber2) {
           $("h1").text("Player1 wins!");
         } else if (randomNumber1<randomNumber2) {
           $("h1").text("Player2 wins!");
         } else {
           $("h1").text("Tie!");
         }

     }
 });
