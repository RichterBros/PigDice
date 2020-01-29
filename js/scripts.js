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



var rollResults = function(result){
    var result = dice.roll();
    console.log(result)

if (result === 1){
    alert("You busted! That is the end of your turn")
    turnTotal = 0;
}
else if (result === 2 || result === 3 || result === 4  || result === 5 || result === 6 ) {
    turnTotal  += result;

}

}


$(document).ready(function () {
    $("#button").click(function (event) {
        event.preventDefault();
        rollResults();
        console.log(turnTotal);
        // console.log(turnTotal);

        
    });




});
