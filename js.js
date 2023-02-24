
window.onload = function(){rollDice();}

function rollDice(){
    var dice1 = document.getElementById('dice1');
    var dice2 = document.getElementById('dice2');
    var msg='';



    var x = Math.floor(Math.random()*6)+1;
    var y = Math.floor(Math.random()*6)+1;

    dice1.src = "assets/dice" + x + ".png";
	dice2.src = "assets/dice" + y + ".png";

    if (x<y){
        msg ='PLAYER 2 WINS !'
    }else if (x>y){
        msg = 'PLAYER 1 WINS!'
    }else{
        msg ='DRAW!'
    }

    var mainText = document.getElementsByClassName("main-text")[0];
	mainText.innerHTML = msg;

}