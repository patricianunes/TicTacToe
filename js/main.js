const cat = '😼';
const dog = '🐶';

const setCurrentPlayer = player =>
  $('#current-player').text(player === cat ? cat : dog);


$(document).ready(function() {
  //turn is the start player
  let turn = dog;
  setCurrentPlayer(turn);
  //we get the elements of the all box in the document
  //we put an event click
  $('.position').on('click', function() {
    if( $(this). text() === '' ) {
      //when the box is clicked we put the X and O
      $(this).text(turn);
      //if the player is X the next will be O
      if (turn === dog) {
        turn = cat;
      } else {
        turn = dog;
      }
      //store the element id after been clicked
      const elementID = $(this).attr('id');
      //call the first function in the logic after make the first click
      //Give the element ID for the argument in the moves function
      moves( elementID );

      if (gameStatus) {
        $('.result').text(`${winPlayer} ${gameStatus}`);
        $('.turn').remove();
        $('.scoreboard').addClass('is-game-over');
        $('#play-again').on('click', () => {
          window.location.reload();
        })
      } else {
        setCurrentPlayer(turn);
      }
    }
  });
});
