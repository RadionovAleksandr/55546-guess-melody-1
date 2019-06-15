import * as React from "react";
import {connect} from "react-redux";
import {compose} from "recompose";
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";

import GameArtist from "../../components/game-artist/game-artist";
import AuthorizationScreen from "../../components/authorization-screen/authorization-screen";
import GameGenre from "../../components/game-genre/game-genre";
import WelcomeScreen from "../../components/welcome-screen/welcome-screen";
import WinScreen from "../../components/win-screen/win-screen";
import GameOverScreen from "../../components/game-over-screen/game-over-screen";
import GameMistakes from "../../components/game-mistakes/game-mistakes";

import withActivePlayer from "../../hocs/with-active-player/with-active-player";
import withTransformProps from "../../hocs/with-transform-props/with-transform-props";
import withUserAnswer from "../../hocs/with-user-answer/with-user-asnwer";
import {ActionCreator} from "../../reducer/game/game";

import {getStep, getMistakes} from "../../reducer/game/selectors";
import {getQuestions} from "../../reducer/data/selectors";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {AnswerArtist, AnswerGenre, QuestionArtist, QuestionGenre} from "../../types";

type Answer = AnswerArtist | AnswerGenre | boolean[];
type Question = QuestionGenre | QuestionArtist;

interface Props {
  gameTime: number,
  isAuthorizationRequired: boolean,
  maxMistakes: number,
  mistakes: number,
  onUserAnswer: (answer: Answer, question: Question) => void,
  onWelcomeScreenClick: () => void,
  resetGame: () => void,
  questions: Question[],
  step: number,
  errorCount: number,
}

const transformPlayerToAnswer = (props) => {
  const newProps = Object.assign({}, props, {
    renderAnswer: props.renderPlayer,
  });
  delete newProps.renderPlayer;
  return newProps;
};

const WrapperGameArtist = withActivePlayer(GameArtist);
const WrapperGameGenre = withUserAnswer(
    withActivePlayer(withTransformProps(transformPlayerToAnswer)(GameGenre)));


const withScreenSwitch = (Component) => {
  class WithScreenSwitch extends React.PureComponent<Props, null> {
    constructor(props) {
      super(props);

      this._getScreen = this._getScreen.bind(this);
    }

    render() {
      return <BrowserRouter>
        <Switch>
          <Route path="/" exact render={() => {
            return <Component
              {...this.props}
              renderScreen={this._getScreen}
              renderMistakes={this._getMistakes}
            />;
          }} />
          <Route path="/results" render={() => {
            return <WinScreen
              mistakes={this.props.mistakes}
              onReplayButtonClick={this.props.resetGame}
            />;
          }} />
          <Route path="/lose" render={() => {
            return <GameOverScreen
              onRelaunchButtonClick={this.props.resetGame}
            />;
          }} />
          <Route path="/login" render={() => {
            return <AuthorizationScreen />;
          }} />
        </Switch>
      </BrowserRouter>;
    }

    _getScreen(question) {
      const {
        gameTime,
        errorCount,
        mistakes,
        onUserAnswer,
        onWelcomeScreenClick,
        questions,
        step,
        isAuthorizationRequired
      } = this.props;

      if (isAuthorizationRequired) {
        return <Redirect to="/login" />;
      }

      // Переход на экран победы, если пользователь добрался
      // до последнего шага
      if (step >= questions.length) {
        return <Redirect to="/results" />;
      }

      // Если количество ошибок превысило максимально допустимое
      // количество, переход на экран поражения
      if (mistakes >= errorCount) {
        return <Redirect to="/lose" />;
      }

      // NB!
      // Компоненты <WinScreen />, <QuestionGenreScreenWrapped />
      // и <ArtistQuestionScreenWrapped /> отрисовываются без помощи
      // компонента <Redirect />. Это значит, что все эти экраны
      // переключаются в рамках одного сценария: невозможно перейти
      // на экран второго вопроса, не ответив, предварительно на первый

      // Если номер текущего вопроса в игре равен -1
      // значит игра ещё не начата и нужно показать
      // приветственный экран
      if (step === -1) {
        return <WelcomeScreen
          errorCount={errorCount}
          gameTime={gameTime}
          onClick={onWelcomeScreenClick}
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

  return WithScreenSwitch;
};


export {withScreenSwitch};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  questions: getQuestions(state),
  step: getStep(state),
  mistakes: getMistakes(state),
  isAuthorizationRequired: getAuthorizationStatus(state),
});

const mapDispatchToProps = (dispatch) => ({
  onWelcomeScreenClick: () => dispatch(ActionCreator.incrementStep()),

  onUserAnswer: (userAnswer, question) => {
    dispatch(ActionCreator.incrementStep());
    dispatch(ActionCreator.incrementMistake(
        userAnswer,
        question
    ));
  },

  resetGame: () => dispatch(ActionCreator.resetGame()),
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withScreenSwitch
);
