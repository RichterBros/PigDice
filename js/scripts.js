var dice = {
    sides: 6,
    roll: function () {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
    }
}
var result = parseInt(dice.roll());
//console.log(result);
turnTotal = 0;
player1Total = 0;


var rollResults = function(result){

if (result === 1){
    alert("You busted! That is the end of your turn")
    //player1Total = player1Total + turnTotal
}
else if (result === 2 || result === 3 || result === 4  || result === 5 || result === 6 ) {
    turnTotal  += result;
}

}


$(document).ready(function () {
    $("#button").click(function (event) {
        event.preventDefault();
        rollResults(result);
        console.log(result);
        console.log(turnTotal);

        
    });




});
