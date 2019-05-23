import React from 'react';
import propTypes from 'prop-types';

class GameGenre extends React.PureComponent {
  render() {
    const {
      question,
      onAnswer,
      onChange,
      renderAnswer,
      userAnswer,
    } = this.props;

    const {
      answers,
      genre,
    } = question;

    return <section className="game__screen">
      <h2 className="game__title">Выберите {genre} треки</h2>
      <form className="game__tracks" onSubmit={(evt) => {
        evt.preventDefault();
        onAnswer();
      }}>
        {answers.map((it, i) => <div className="track" key={`answer-${i}`}>
          {renderAnswer(it, i)}
          <div className="game__answer">
            <input
              checked={userAnswer[i]}
              className="game__input visually-hidden"
              type="checkbox"
              name="answer"
              value={`answer-${i}`}
              id={`answer-${i}`}
              onChange={() => onChange(i)}
            />
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
  onChange: propTypes.func.isRequired,
  renderAnswer: propTypes.func.isRequired,
  question: propTypes.shape({
    answers: propTypes.arrayOf(propTypes.shape({
      src: propTypes.string.isRequired,
      genre: propTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    })).isRequired,
    genre: propTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    type: propTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
  userAnswer: propTypes.arrayOf(propTypes.bool).isRequired,
};


export default GameGenre;
