
// My board will be a matriz with start positions zero
let board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

//the game have two players, X and O, they have a value 1 and -1 after the moves I need to sum the position and see if one of them is a winner
const playerX = 1;
const playerO = -1;
//is the start status
let turn = 1;
//store the winner player and check if there is a draw
let winPlayer = '';
//counter to check with there is a draw
let counter = 0;
//change the status for winning or draw and chech draw, because if counter 9 and winplayer is empty than status will be draw 
let gameStatus = ''


//moves are all positions in the board, but if position is 0 we can move a playerX or playerO, if not they are already with some value and can't have other value.
//box is the position
//elId is an agurment that I give in the main.js
const moves = function( elId ) {
  //elID is two numbers, I separeted then in two varibles to make the position on the array board 
  const rowId = elId[0];//elId[] is the index of the first number at elemente ID (HTML)
  const colId = elId[1];////elId[] is the index of the second number at elemente ID (HTML)
  //comparation if the first position clicked is 0 we will acess the boar
  if( board[rowId][colId] === 0 ) {
  //acess the board and change the 0 for the value stored in turn that is 1
   board[rowId][colId] = turn;
   //plus 1 for counter be max 9 and be possible to compare in the draw function
   counter += 1;
   //call next function and change the player 
   changePlayer();
  }
};

//start game with one of the players and them switch for the next move with other player. 
let changePlayer = function() {
  //if turnPlayer is playerX, change for player O, if not be player x.
    if (turn === playerX) {
      turn = playerO
    } else {
      turn = playerX
    }
    winner( );
  };


//if the sum of the 3 elements in the line or in the column or in the diagonal is 3, playerX win.
//if the sum of the 3 elements in the line or in the column or in the diagonal is -3, playerO win.
const winner = function() {
  //sum each line and column in a loop
  //first loop for lines
  for (let i = 0; i < board.length; i += 1) { 
    // create a variable sum them compare the result
    let sumLine = 0;
    let sumColumn = 0;
    // second loop for columns
    for (let j = 0; j < board[i].length; j += 1) {
      //new value for varible sum with each sum line and column
      sumLine = sumLine + board[i][j];
      sumColumn = sumColumn + board [j][i];
    }

    //comparation for winning X in lines and columns
    if (sumColumn === 3 || sumLine === 3) { 
      gameStatus = 'Win - Restart the game and play again!';
      winPlayer = '🐶';
    //comparation for winning O
    } else if ( sumColumn === -3 || sumLine === -3) {
      gameStatus = 'Win - Restart the game and play again!';
      winPlayer = '😼';
      
    }
  }

  //if there is no winning in the lines and columns will check winning in the diagonal
  //for diagonal sum the positions [0][0]+[1][1]+[2][2] and [0][2]+[1][1]+[2][0]
  let diagonal1 = board[0][0]+board[1][1]+board[2][2];
  let diagonal2 = board[0][2]+board[1][1]+board[2][0];
  
  //comparation for winnings in diagonal
  if (diagonal1 === 3 || diagonal2 === 3) {
    gameStatus = 'Win - Restart the game and play again!';
    winPlayer = '🐶';
  } else if (diagonal1 === -3 || diagonal2 === -3) {
    gameStatus = 'Win - Restart the game and play again!';
    winPlayer = '😼';
  }
  
  // if there is no sum equal 3 or -3 in the lines, columns and diagonal and all positions have a value diferent to 0, then will be draw
  //anybody win restart the game
  if (counter === 9 && winPlayer === '') {
    gameStatus = 'Draw 🐶 = 😼 Restart the game!';
  }
  //stop click when someone win or draw
  if (gameStatus !== '') {
    $('.position').off('click');
  }
};