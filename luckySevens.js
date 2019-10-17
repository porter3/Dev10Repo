function validateInput(){
    var startingBet = document.getElementById("startingBet").value;
    console.log(typeof(startingBet) + startingBet);

    if (startingBet > 0){
        return Number(startingBet);
    }
    else{
        alert("Starting bet must be a positive number");
        return false;
    }
}

function runGame(){
    //set user input to starting bet
    var money = validateInput();
    if (money == false){
        return false;
    }

    //begin game loop
    do{


    }
    //check that there's money to play with, gane will end if there's not
    while (money > 0);
}