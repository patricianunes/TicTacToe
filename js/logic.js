
// My board will be a matriz with start positions zero
let board = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
]

//the game have two players, X and O, they have a value 1 and -1 after the moves I need to sum the position and see if one of them is a winner
const playerX = 1;
const playerO = -1;
let start = 1;

//start game with one of the players and them switch for the next move with other player. 
let startPlayer = function(start) {
//if turnPlayer is playerX, change for player O, if not be player x.
if (start === playerX) {
  start = playerO
} else {
  start = playerX
}
return start;
};
console.log(start);

//moves are all positions in the board, but if position is 0 we can move a player, if not they are already with some value and can't have other value.
const moves = function(board){
  
}

//if the sum of the 3 elements in the line or in the column or in the diagonal is 3, playerX win.
//if the sum of the 3 elements in the line or in the column or in the diagonal is -3, playerO win.
//const winner;
// first need to see each element and sum with the next element
// loop i for lines, loop j for colunms
// create a variable sum them compare the result
//for diagonal sum the positions [0][0]+[1][1]+[2][2] and [0][2]+[1][1]+[2][0]
// compare the result 
// draw - if all the positions are not 0 and any sum is 3 or -3 

//Game Over and restart