var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
// var result = parseInt(dice.roll());
turnTotal = 0;
player1Total = 0;
computerTotal = 0;


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

var addPlayer1Score = function (){
    player1Total = player1Total + turnTotal
    turnTotal =0;
if (player1Total >= 100) {
    alert("player 1 wins!");
    alert("player 1 score:" + " ")
}
else { 
    alert("Player 1 score:" + " " +player1Total)
    alert("Player 2 turn!")
}
};

var computerRoll = function(result){
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
//     var result = dice.roll();
//     if (result === 1) {
//         alert("Computer busted! That is the end of their turn")
//         alert("Player 1's turn! Click'Roll' to start your turn!")
//         turnTotal = 0;
//     }
//     else if (result === 2 || result === 3 || result === 4 || result === 5 || result === 6) {
//         turnTotal += result;
//         dice.roll();
//         console.log("made it to 2nd dice roll!")
//             if (result === 1) {
//                 alert("Computer busted! That is the end of their turn")
//                 alert("Player 1's turn! Click'Roll' to start your turn!")
//                 turnTotal = 0;
//             }
//             else if (result === 2 || result === 3 || result === 4 || result === 5 || result === 6) {
//                 turnTotal += result;
//                 computerTotal = computerTotal + turnTotal;
//                 turnTotal = 0;

//     }
// }
// }


$(document).ready(function () {
    $("#buttonRoll").click(function (event) {
        event.preventDefault();
        rollResults();
        console.log(turnTotal);
        // console.log(turnTotal);
    });

        $("#buttonHold").click(function (event) {
        event.preventDefault();
        addPlayer1Score();
        console.log(player1Total);
    });
    $("#buttonComputer").click(function (event) {
        event.preventDefault();
        console.log("button works!")
        computerRoll();
        console.log(turnTotal)

    });
    //     $("#buttonComputer").click(function (event) {
    //     event.preventDefault();
    //     console.log("Button works!")
    //     // computerRoll();
    //     // console.log(turnTotal);
    //     // console.log(computerTotal);
    //     // console.log(turnTotal);
    // });



});
