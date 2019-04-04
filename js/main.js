//ready the JS just when the document is ready
$(document).ready(function() {
  //turn is the start player
  let turn = '🐶';
  //we get the elements of the all box in the document
  //we put an event click
  $('.position').on('click', function() {
    if( $(this). text() === '' ) {
      //when the box is clicked we put the X and O
      $(this).text(turn);
      //if the player is X the next will be O
      if (turn === '🐶') {
        turn = '😼';
      } else {
        turn = '🐶';
      }
      //store the element id after been clicked
      const elementID = $(this).attr('id');
      //call the first function in the logic after make the first click
      //Give the element ID for the argument in the moves function
      moves( elementID );
      //display the result on the page
      $('.result').text(`${winPlayer} ${gameStatus}`);
    }
  });
});