var rollDice, round;
score=0;

//document.querySelector('.dice').style.display ='none';
document.getElementById('score').textContent ='0';


	var text;
	var player= prompt("Please Enter your name :" , " ");
	if(player == null || player == "")
		{
			text= "Welcome to Rolling dice game";
		}
	else{
		text= "Hello " + player + " ! Welcome to Rolling dice game";
	}
	
	document.getElementById('popup').textContent = text;


document.querySelector('.btn-roll').addEventListener('click' , function()
												{


	var dice=Math.floor(Math.random()*6)+1;
	var diceDOM=document.querySelector('.dice');
	diceDOM.style.display='block';
	
	diceDOM.src='dice-'+dice +'.png';
	
	
	
	if(dice !== 6)
		{
			score=score+dice;
	document.querySelector('#current').textContent=score;
		}
	else
		{
			document.querySelector('#score').textContent=score;
			newGame();
		}
	
});


document.querySelector('.btn-new').addEventListener('click', function()
		{											
	document.getElementById('score').textContent ='0';	
	score=0;
	newGame();
});


function newGame()
{   
	document.getElementById('current').textContent = '0';
	var diceView=document.querySelector('.dice');
	diceView.style.display='block';
	diceView.src='dice-0.png';
	
		
}