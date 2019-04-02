/* //I will use an object to store everything
const game = {
// the possibilities to play x or o, I store the   
players: ['x', 'o'],

// players object that is storing the last moves
// e.g. to query from a function would be this.players.X.moves
players: {
  X: {
    moves: [], 
    isTurn: true
  }, 
  O: {
    moves: [],
    isTurn: false
  }
},

winningCombos: [
  '123', '456', '789', '147', '258', '369', '159', '357'
],

checkForWin: function() {
  if this.players.X.moves.slice(3rdlast, last).sort().join("")

  winner
}

makeMove: function(currentPlayer, boardNumber) {
  // check if boardNumber has already been used
  // if it is current players turn or not
  // if there is a winner or not

  // add the boardNumber to this.players[currentPlayer].moves.push(boardNumber)
}

currentPlayer: 'x',

// board: {
//   line1:{
//     c1l1:'',
//     c2l1:'',
//     c3l1:''
//   }, 

//   line2:{
//     c1l2:'',
//     c2l2:'',
//     c3l2:''
//   }, 

//   line3:{
//     c1l3:'',
//     c2l3:'',
//     c3l3:''
//   } 
// },

switchTurns: function(){
  if (this.currentPlayer === 'x') {
    this.currentPlayer = 'o';
    console.log(this.nextTurn);
  } else {
    this.currentPlayer = 'x';
  }
}

};


console.log(game.makeMove('x', 1))
console.log(game.makeMove('o', 2))
console.log(game.makeMove('o', 3)) //no not o's turn
console.log(game.makeMove('x', 4)) 
console.log(game.makeMove('o', 2)) //no board piece has been taken
console.log(game.makeMove('x', 7)) //winner. you should not be able to make anymore moves */

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
    let counter = 0;
    for (let i = 0; i < winningCombos.length; i += 1) {
      console.log(winningCombos[i]);
    }
  },

}
});

let winningCombos = [
  [1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]
];
for (let i = 0; i < winningCombos.length; i += 1) {
  console.log(winningCombos[i]);
  for (let j = 0; j < winningCombos[i].length; j += 1) {
    console.log(winningCombos[j]);
  }
};