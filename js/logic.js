//read the JS just when the document is ready
$(document).ready(function() {

//store all the logic in a object 
const ticTacToe = {

  //turnPlayers is a object that will turn the time of the players 
  //with two functions getter and setter the time for the turn 0 for player x and turn 1 for player o
  turnPlayers: {
    actual: 0,
    get: function() {
      return this.actual;
    },
    set: function(val) {
      this.actual = val;
    }
  },

  //actualMove will store all the movies for player x and o
  //After I will compare these arrays with the winning combinations
  actualMove: {
    x: [],
    o:[]
  },

  //winningCombos is an array of arrays that store all winning combinations
  //I need a function that will compare the actualMove.x array with winningCombos and find a match
  // or actualMove.o array with winningCombos and find a match
  winningCombos: [
    [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
  ],  

  //check if the player is winner or if hapen a draw
  // function will receive a player
  checkForWin: function(player) {
    //variable with a counter to be compared if the player is a winner
    let counter = 0;
    //look all possibles winning combos
    for (let i = 0; i < winningCombos.length; i += 1) {

      for (let j = 0; j < winningCombos[i].length; j += 1) {

        for (let w = 0; w < player.length; w += 1 ) {
          //if the counter of the player have 3 matches he is a winner
          // if turnPlayers.get is 0 the winner is x other wise (else if) o is winner
          if (counter === 3 && this.turnPlayers.get())
        }

      }
    }
  },

}
});

