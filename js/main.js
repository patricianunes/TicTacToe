//ready the JS just when the document is ready
$(document).ready(function() {
  let turn = 'x';

  $('.position').on('click', e => {
    const $el = $(e.target);
    $el.text(turn);
    if (turn === 'x') {
      turn = 'o';
    } else {
      turn = 'x';
    }
  });
});