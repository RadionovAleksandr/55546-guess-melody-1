import React from 'react';
import propTypes from 'prop-types';
import {connect} from 'react-redux';

const Type = {
  artist: `game--artist`,
  genre: `game--genre`,
};

class App extends React.Component {
  render() {
    const {
      questions,
      renderScreen,
      renderMistakes,
      step,
      mistakes
    } = this.props;

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

        {renderMistakes(mistakes)}
      </header>

      {renderScreen(question)}
    </section>;
  }
}

App.propTypes = {
  gameTime: propTypes.number.isRequired,
  questions: propTypes.array.isRequired,
  renderScreen: propTypes.func.isRequired,
  renderMistakes: propTypes.func.isRequired,
  step: propTypes.number.isRequired,
  mistakes: propTypes.number.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  step: state.step,
  mistakes: state.mistakes
});

export {App};

export default connect(mapStateToProps)(App);
