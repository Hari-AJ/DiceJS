
function rollDice(){
    var randomnumber=Math.random();
    randomnumber=Math.floor(randomnumber*6)+1;
    return randomnumber;
}



var randomnumber1=rollDice();
var randomnumber2=rollDice();

var changeImg1=document.querySelector(".dice .img1");
var changeImg2=document.querySelector(".dice .img2");

if(randomnumber1==1)changeImg1.setAttribute("src","images/dice1.png");
else if(randomnumber1==2)changeImg1.setAttribute("src","images/dice2.png");
else if(randomnumber1==3)changeImg1.setAttribute("src","images/dice3.png");
else if(randomnumber1==4)changeImg1.setAttribute("src","images/dice4.png");
else if(randomnumber1==5)changeImg1.setAttribute("src","images/dice5.png");

if(randomnumber2==1)changeImg2.setAttribute("src","images/dice1.png");
else if(randomnumber2==2)changeImg2.setAttribute("src","images/dice2.png");
else if(randomnumber2==3)changeImg2.setAttribute("src","images/dice3.png");
else if(randomnumber2==4)changeImg2.setAttribute("src","images/dice4.png");
else if(randomnumber2==5)changeImg2.setAttribute("src","images/dice5.png");

if(randomnumber1>randomnumber2)document.querySelector(".container h1").innerHTML="Player 1 Wins!";
else if(randomnumber1<randomnumber2)document.querySelector(".container h1").innerHTML="Player 2 Wins!";
else document.querySelector(".container h1").innerHTML="Draw!";