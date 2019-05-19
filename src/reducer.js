const initialState = {
  step: -1,
  mistakes: 0,
};

const ActionCreators = {
  'INCREMENT_STEP': () => ({
    type: `INCREMENT_STEP`,
    payload: 1
  }),

  'INCREMENT_MISTAKES': (question, userAnswer) => {
    let isAnswerCorrect = false;
    let type = ``;

    if (question) {
      type = question.type;
    }

    switch (type) {
      case `genre`:
        isAnswerCorrect = question.answers
          .every((it, idx) => (it.genre === question.genre) === userAnswer[idx]);
        break;
      case `artist`:
        isAnswerCorrect = userAnswer.artist === question.song.artist;
        break;
    }

    return {
      type: `INCREMENT_MISTAKES`,
      payload: isAnswerCorrect || !question ? 0 : 1
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_STEP`: return Object.assign({}, state, {
      step: state.step + action.payload,
    });

    case `INCREMENT_MISTAKES`: return Object.assign({}, state, {
      mistakes: state.mistakes + action.payload,
    });

    case `GAME_RESET`: return Object.assign({}, initialState);
  }

  return state;
};

export {reducer, ActionCreators};
