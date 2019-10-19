function validateInput(){
    var startingBet = document.getElementById("startingBet").value;
    console.log(typeof(startingBet) + startingBet);

    if (startingBet > 0){
        return Number(startingBet);
    }
    else{
        alert("Starting bet must be a positive number");
        document.forms["betForm"]["startingBet"].parentElement.className = "row marginSpace form-group has-error";
        document.forms["betForm"]["startingBet"].focus();
        return false;
    }
}

function runGame(){
    //set user input to starting bet
    var money = validateInput();
    if (money == false){
        return false;
    }

    //display results table and starting bet
    document.getElementById("resultsTable").style = "display: block";
    document.getElementById("startingBetResult").innerText = money;

    var sidesOfDie = 6;
    var rollCounter = 0;
    var highScoreOfMoney = money;
    var highestAmountRollCount = 0;

    //begin game loop
    do{
        //roll dice
        var dieOne = (Math.floor(Math.random() * sidesOfDie) + 1);
        var dieTwo = (Math.floor(Math.random() * sidesOfDie) + 1);
        //if dice equal 7, add 4 to money
        if (dieOne + dieTwo == 7){
            money += 4;
        }
        //else, subtract 1 from money
        else{
            money -= 1;
        }
        //increment roll counter
        rollCounter += 1;

        //check if current money is highest amount as of yet, assign high score to it if it is
        if (money > highScoreOfMoney){
            highScoreOfMoney = money;
            highestAmountRollCount = rollCounter;
        }
    }
    //check that there's money to play with, game will end if there's not
    while (money > 0);

    document.getElementById("totalRolls").innerText = rollCounter;
    document.getElementById("highestAmountWon").innerText = highScoreOfMoney;
    document.getElementById("highestAmountRollCount").innerText = highestAmountRollCount;

}