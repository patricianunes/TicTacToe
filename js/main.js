$(document).ready(function() {
  const $board = $('.board');
  const $position = $('.position');
  const $playAgain = $('#play-again');

  window.ttt.ui.printStage(window.ttt.logic.state, $board);

  const registerPositionClicks = () => {
    $position.on('click', (e) => {
      const $square = $(e.target);
      const position = parseFloat($square.attr('id'));

      window.ttt.logic.state = window.ttt.logic.gameReducer(window.ttt.logic.state, position);
      window.ttt.ui.printStage(window.ttt.logic.state, $board);

      const status = window.ttt.logic.getGameStatus(window.ttt.logic.state.history);
      const { history } = window.ttt.logic.state;
      const lastBoard = history[history.length - 1];

      if (window.ttt.logic.isGameOver(status)) {
        const winningCombination = window.ttt.logic.findWinningCombination(lastBoard, status);
        if (winningCombination) {
          winningCombination.forEach(item => {
            $(`#${item}`).addClass('highlight');
          });
        }
        $position.off('click');
      }
    });
  };

  registerPositionClicks();

  $playAgain.on('click', () => {
    window.ttt.logic.state = window.ttt.logic.initialState
    window.ttt.ui.printStage(window.ttt.logic.state, $board);
    registerPositionClicks();
    $position.removeClass('highlight');
  });
});