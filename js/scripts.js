var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}

turnTotal = 0;
player1Total = 0;
computerTotal = 0;
        // --DISPLAYS BLANK SCOREBOARD
var soloEasyDiceScoreboard = function() {
$("#soloEasyDicePlayer").text(player1Total);
$("#soloEasyDiceComputer").text(computerTotal);
$("#soloEasyDiceHold").text(turnTotal);
};

var turnTotalScoreboard = function() {
    $("#soloEasyDiceHold").text(turnTotal);
}

var rollResults = function (result) {
    var result = dice.roll();

    if (result === 1) {
        alert("You busted! That is the end of your turn")
        alert("Computer's turn! Click 'computer roll' to start their turn")
        turnTotal = 0;
    }
    else if (result === 2 || result === 3 || result === 4 || result === 5 || result === 6) {
        turnTotal += result;
    }
}
        // --USER HOLDS AND UPDATES THEIR TOTAL. ROLLS 1 DICE THEN ANOTHER--
var addPlayer1Score = function () {
    player1Total = player1Total + turnTotal
    $("#soloEasyDicePlayer").text(player1Total);
    turnTotal = 0;
    $("#soloEasyDiceHold").text(turnTotal);
    if (player1Total >= 100) {
        alert("player 1 wins!");
        alert("player 1 score:" + " " + player1Total + "computer score:" + computerTotal)
    }
    else {
        alert("Player 1 score:" + " " + player1Total + "computer score:" + computerTotal)
        alert("Player 2 turn!")
    }
};

        // --SOLO EASY 1 DICE COMPUTER ROLL--
var computerRoll = function (result) {
    var result = dice.roll();
    console.log(result)

    if (result === 1) {
        alert("Computer busted! That is the end of their turn")
        alert("Player 1's turn! Click'Roll' to start your turn!")
        turnTotal = 0;
    }
    else if (result === 2 || result === 3 || result === 4 || result === 5 || result === 6) {
        turnTotal += result;
        $("#soloEasyDiceHold").text(turnTotal);
        $("#soloEasyDiceComputer").text(computerTotal);
        if (computerTotal >= 100) {
            alert("Computer wins!");
            alert("player 1 score:" + " " + player1Total + "computer score:" + computerTotal)
            $("#soloEasyDiceComputer").text(computerTotal);
        }
        else if (computerTotal < 100) {
            result2 = dice.roll();
            console.log(result2);
            if (result2 === 1) {
                $("#soloEasyDiceComputer").text(computerTotal);
                alert("Computer busted! That is the end of their turn")
                alert("Player 1's turn! Click'Roll' to start your turn!")
                turnTotal = 0;
            }
            else if (result2 === 2 || result2 === 3 || result2 === 4 || result2 === 5 || result2 === 6) {
                turnTotal += result2;
                console.log(turnTotal);
                computerTotal = computerTotal + turnTotal;
                $("#soloEasyDiceComputer").text(computerTotal);
                turnTotal = 0;
                console.log(computerTotal);
                if (computerTotal >= 100) {
                    alert("Computer wins!");
                    alert("player 1 score:" + " " + player1Total + "computer score:" + computerTotal)
                }
            }
        }
    } 
}

$(document).ready(function () {
    soloEasyDiceScoreboard();
    $("#buttonRoll").click(function (event) {
        event.preventDefault();
        rollResults();
        turnTotalScoreboard();
        console.log(turnTotal);
    });
    $("#buttonHold").click(function (event) {
        event.preventDefault();
        addPlayer1Score();
        console.log(player1Total);
    });
    $("#buttonComputer").click(function (event) {
        event.preventDefault();
        computerRoll();
    });




});
