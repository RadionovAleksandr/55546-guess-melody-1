import React from 'react';
import propTypes from 'prop-types';

import AudioComponent from '../audio-component/audio-component';

class GameGenre extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activePlayer: -1,
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {answers, genre} = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer();
      }}>
        {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
          <AudioComponent
            src={it.src}
            isPlaying={i === this.state.activePlayer}
            onPlayButtonClick={() => this.setState({
              activePlayer: this.state.activePlayer === i ? -1 : i
            })}
          />
          <div className="game__answer">
            <input className="game__input visually-hidden" type="checkbox" name="answer" value={`answer-${i}`} id={`answer-${i}`} />
            <label className="game__check" htmlFor={`answer-${i}`}>
              Отметить
            </label>
          </div>
        </div>)}

        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>;
  }
}

GameGenre.propTypes = {
  onAnswer: propTypes.func.isRequired,
  question: propTypes.shape({
    answers: propTypes.arrayOf(propTypes.shape({
      src: propTypes.string.isRequired,
      genre: propTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    })).isRequired,
    genre: propTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: propTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default GameGenre;
