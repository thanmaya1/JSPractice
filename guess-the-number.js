var randomNum=Math.floor(Math.random()*100)+1;
var turns=10;
var guesses=[] ;
function checkGuess()  {
    var guess= parseInt(document.getElementById("guess").value);
    if(isNaN(guess)||guess<1||guess>100){
        document.getElementById("result").innerHTML="Please enter a valid number between 1 and 100.";
        return;
    }
  guesses.push(guess);
  document.getElementById("guesses").innnerHTML=guesses.join(", ");
  turns--;
  document.getElementById("turns").innerHTML=turns;
  if(guess==randomNum){
    document.getElementById("result").innnerHTML="Congratulations, you guessed the number!";
    disableInput();
} else if (turns==0){
  document.getElementById("result").innerHTML="Wrong guess! The number is "+(guess<randomNum?"higher":"lower")+".";
}
  document.getElementById("guess").value
