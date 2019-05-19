import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreators} from "../../reducer";

import WelcomeScreen from '../welcome-screen/welcome-screen';
import GameArtist from "../game-artist/game-artist";
import GameGener from "../game-genre/game-genre";
import GameMistakes from "../game-mistakes/game-mistakes";

const Type = {
  artist: `game--artist`,
  genre: `game--genre`,
};

class App extends React.Component {
  _getScreen(question, onClick) {
    if (!question) {
      const {errorCount, gameTime} = this.props;

      return <WelcomeScreen
        errorCount={errorCount}
        time={gameTime}
        onButtonStartClick={onClick}
      />;
    }

    switch (question.type) {
      case `genre`: return <GameGener
        question={question}
        onAnswer={onClick}
      />;

      case `artist`: return <GameArtist
        question={question}
        onAnswer={onClick}
      />;
    }

    return null;
  }

  shouldComponentUpdate(props) {
    const {mistakes, errorCount} = props;

    if (mistakes >= errorCount) {
      this.props.onResetGame();
    }

    return true;
  }

  render() {
    const {questions, step, mistakes} = this.props;
    const question = questions[step];

    return <section className={`game ${question ? Type[question.type] : ``}`}>
      <header className="game__header">
        <a className="game__back" href="#">
          <span className="visually-hidden">Сыграть ещё раз</span>
          <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
        </a>

        <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
          <circle className="timer__line" cx="390" cy="390" r="370"
            style={{
              filter: `url(#blur)`,
              transform: `rotate(-90deg) scaleY(-1)`,
              transformOrigin: `center`
            }}
          />
        </svg>

        <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
          <span className="timer__mins">05</span>
          <span className="timer__dots">:</span>
          <span className="timer__secs">00</span>
        </div>

        <GameMistakes mistakes={mistakes} />
      </header>

      {this._getScreen(question, (userAnswer) => {
        this.props.onUserAnswer(question, userAnswer);

        if (step >= questions.length) {
          this.props.onResetGame();
        }
      })}
    </section>;
  }
}

App.propTypes = {
  errorCount: propTypes.number.isRequired,
  gameTime: propTypes.number.isRequired,
  questions: propTypes.array.isRequired,

  step: propTypes.number.isRequired,
  mistakes: propTypes.number.isRequired,
  onUserAnswer: propTypes.func.isRequired,
  onResetGame: propTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes
});

const mapDispatchToProps = (dispatch) => ({
  onUserAnswer: (question, userAnswer) => {
    dispatch(ActionCreators[`INCREMENT_STEP`]());
    dispatch(ActionCreators[`INCREMENT_MISTAKES`](question, userAnswer));
  },
  onResetGame: () => {
    dispatch({type: `GAME_RESET`});
  }
});

export {App};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
