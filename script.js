let player1 = Math.floor(Math.random() * 6)+1;
let player2 = Math.floor(Math.random() * 6)+1;
if (player1 === player2) {
    document.getElementById("DRAW").style.display="flex"
}

if (player1 > player2) {
 document.querySelector('.pl1').style.display = "flex";
}

if (player1 < player2) {
    document.querySelector('.pl2').style.display = "flex";
}
let image1="dice"+player1+".png"
let image2="dice"+player2+".png"
document.querySelector(".img1").setAttribute("src",image1)
document.querySelector(".img2").setAttribute("src",image2)

