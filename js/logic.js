(() => {
  const WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  const PLAYERS = {
    DOG: 1,
    CAT: -1,
    EMPTY: 0,
  };

  const GAME_STATUS = {
    CAT_WINS: PLAYERS.CAT,
    DOG_WINS: PLAYERS.DOG,
    PLAYING: PLAYERS.EMPTY,
    DRAW: 2,
  };

  const initialState = {
    history: [new Array(9).fill(PLAYERS.EMPTY)],
    turn: PLAYERS.DOG,
  };

  const mapStage = (square, index) => ({ square, index });
  const mapToPosition = ({index}) => index;

  const getCats = stageMap =>
    stageMap.filter(item => item.square === PLAYERS.CAT).map(mapToPosition);

  const getDogs = stageMap =>
    stageMap.filter(item => item.square === PLAYERS.DOG).map(mapToPosition);

  const getGameStatus = history => {
    const currentStage = history[history.length - 1];
    const stageMap = currentStage.map(mapStage);
    const cats = getCats(stageMap)
    const dogs = getDogs(stageMap);

    const catWin = WINNING_COMBINATIONS.some(combination => combination.every(item => cats.includes(item)));
    const dogWin = WINNING_COMBINATIONS.some(combination => combination.every(item => dogs.includes(item)));
    const draw = history.length > 9;

    if (catWin) return GAME_STATUS.CAT_WINS;
    if (dogWin) return GAME_STATUS.DOG_WINS;
    if (draw) return GAME_STATUS.DRAW;
    return GAME_STATUS.PLAYING;
  }

  const isGameOver = status => {
    return status === GAME_STATUS.CAT_WINS ||
      status === GAME_STATUS.DOG_WINS ||
      status === GAME_STATUS.DRAW;
  };

  const switchTurn = turn => turn === PLAYERS.CAT ? PLAYERS.DOG : PLAYERS.CAT;

  const getGameResult = status => {
    switch (status) {
      case GAME_STATUS.CAT_WINS:
        return '😼 wins';
      case GAME_STATUS.DOG_WINS:
        return '🐶 wins';
      default:
        return `🐶😼 It's a draw`;
    }
  };

  const gameReducer = (state, position) => {
    const { history, turn } = state;
    const lastBoard = history[history.length - 1];

    const nextBoard = [...lastBoard];

    if (nextBoard[position]) {
      return { history, turn };
    }

    nextBoard[position] = turn;

    return {
      history: [...history, nextBoard],
      turn: switchTurn(turn),
    };
  };

  const findWinningCombination = (board, status) => 
    WINNING_COMBINATIONS.find(combination => combination.every(position => board[position] === status));

  window.ttt = window.ttt || { logic: {}};
  window.ttt.logic = {
    state: initialState,
    initialState,
    isGameOver,
    getGameResult,
    getGameStatus,
    gameReducer,
    findWinningCombination,
  };
})();
