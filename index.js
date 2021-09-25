document.querySelector("button").addEventListener("click",roll);

function roll(){
var randomNumber1= Math.floor(Math.random()*6)+1;
var imgsrc1= "image/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src", imgsrc1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var imgsrc2= "image/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src", imgsrc2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Dice 1 Wins";
    }
    else if(randomNumber2>randomNumber1){
        document.querySelector("h1").innerText="Dice 2 Wins";
    }
    else{
        document.querySelector("h1").innerText="Draw";
    }
}