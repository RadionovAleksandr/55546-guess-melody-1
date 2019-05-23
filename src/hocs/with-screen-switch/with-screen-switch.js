import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {compose} from "recompose";

import GameArtist from "../../components/game-artist/game-artist.jsx";
import GameGenre from "../../components/game-genre/game-genre.jsx";
import WelcomeScreen from "../../components/welcome-screen/welcome-screen.jsx";
import WinScreen from "../../components/win-screen/win-screen.jsx";
import GameOverScreen from "../../components/game-over-screen/game-over-screen.jsx";
import GameMistakes from "../../components/game-mistakes/game-mistakes.jsx";

import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withTransformProps from "../../hocs/with-transform-props/with-transform-props";
import withUserAnswer from "../../hocs/with-user-answer/with-user-asnwer";
import {ActionCreators} from "../../reducer";

const transformPlayerToAnswer = (props) => {
  const newProps = Object.assign({}, props, {
    renderAnswer: props.renderPlayer,
  });
  delete newProps.renderPlayer;
  return newProps;
};

const WrapperGameArtist = withActivePlayer(GameArtist);
const WrapperGameGenre = withUserAnswer(
    withActivePlayer(
        withTransformProps(transformPlayerToAnswer)(GameGenre)
    )
);


const withScreenSwitch = (Component) => {
  class WithScreenSwitch extends PureComponent {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      return <Component
        {...this.props}
        renderScreen={this._getScreen}
        renderMistakes={this._getMistakes}
      />;
    }

    _getScreen(question) {
      if (!question) {
        const {step, questions} = this.props;
        if (step > questions.length - 1) {
          return <WinScreen/>;
        } else {
          const {
            errorCount,
            gameTime,
            onWelcomeScreenClick,
          } = this.props;

          return <WelcomeScreen
            errorCount={errorCount}
            gameTime={gameTime}
            onClick={onWelcomeScreenClick}
          />;
        }
      }

      const {
        onUserAnswer,
        mistakes,
        errorCount,
        resetGame,
      } = this.props;

      if (mistakes >= errorCount) {
        return <GameOverScreen
          onRelaunchButtonClick={resetGame}
        />;
      }

      switch (question.type) {
        case `genre`: return <WrapperGameGenre
          answers={question.answers}
          question={question}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question
          )}
        />;

        case `artist`: return <WrapperGameArtist
          question={question}
          onAnswer={(userAnswer) => onUserAnswer(
              userAnswer,
              question
          )}
        />;
      }

      return null;
    }

    _getMistakes(mistakes) {
      return <GameMistakes mistakes={mistakes} />;
    }
  }

  WithScreenSwitch.propTypes = {
    gameTime: PropTypes.number.isRequired,
    errorCount: PropTypes.number.isRequired,
    mistakes: PropTypes.number.isRequired,
    onUserAnswer: PropTypes.func.isRequired,
    onWelcomeScreenClick: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    step: PropTypes.number.isRequired,
  };

  return WithScreenSwitch;
};


export {withScreenSwitch};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes,
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreators[`INCREMENT_STEP`]()),

  onUserAnswer: (userAnswer, question) => {
    dispatch(ActionCreators[`INCREMENT_STEP`]());
    dispatch(ActionCreators[`INCREMENT_MISTAKES`](question, userAnswer));
  },

  resetGame: () => dispatch({type: `GAME_RESET`}),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withScreenSwitch
);
