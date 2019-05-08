import React from 'react';
import propTypes from 'prop-types';

const GameArtist = ({question, onAnswer}) => {
  const {answers} = question;

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      <button className="track__button track__button--play" type="button" />
      <audio />
    </div>

    <form className="game__artist" onChange={onAnswer}>
      {answers.map((it, i) => <div className="artist" key={i}>
        <input className="artist__input visually-hidden" type="radio" name="answer" value={`artist-${i}`} id={`artist-${i}`} />
        <label className="artist__name" htmlFor={`artist-${i}`}>
          <img className="artist__picture" src={it.picture} alt={it.artist} />
          {it.artist}
        </label>
      </div>)}
    </form>
  </section>;
};

GameArtist.propTypes = {
  onAnswer: propTypes.func.isRequired,
  question: propTypes.shape({
    answers: propTypes.arrayOf(propTypes.shape({
      artist: propTypes.string.isRequired,
      picture: propTypes.string.isRequired,
    })).isRequired,
    song: propTypes.shape({
      artist: propTypes.string.isRequired,
      src: propTypes.string.isRequired,
    }).isRequired,
    type: propTypes.oneOf([`genre`, `artist`]).isRequired,
  }).isRequired,
};

export default GameArtist;
