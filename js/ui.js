(() => {
  const EMOJIS = {
    CAT: '😼',
    DOG: '🐶',
  };

  const printStage = (state,  $board) => {
    const $currentPlayer = $('.current-player');
    const $positions = $board.find('.position');
    const $scoreboard = $('.scoreboard');
    const $result = $('.result')
    const isGameOverClass = 'is-game-over';

    const { history, turn } = state;
    
    const status = window.ttt.logic.getGameStatus(history);
    const currentStage = history[history.length - 1];

    $positions.each((index, position) => {
      const emoji = convertToEmoji(currentStage[index]);
      $(position).text(emoji);
    });

    $currentPlayer.text(convertToEmoji(turn));

    if (window.ttt.logic.isGameOver(status)) {
      printResult(status, $result);
      $scoreboard.addClass(isGameOverClass);
    } else {
      $scoreboard.removeClass(isGameOverClass);
    }
  };

  const printResult = (status, $result) => {
    $result.text(window.ttt.logic.getGameResult(status));
  };

  const setCurrentPlayer = (player, $container) =>
    $container.text(convertToEmoji(player));


  const convertToEmoji = code => {
    switch(code) {
      case -1:
        return EMOJIS.CAT;
      case 1:
        return EMOJIS.DOG;
      case 0:
        return '';
    }
  };

  window.ttt = window.ttt || { ui: {} };
  window.ttt.ui = {
    EMOJIS,
    printStage,
    setCurrentPlayer,
  };
})();