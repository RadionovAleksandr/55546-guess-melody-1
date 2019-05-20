import React from 'react';
import propTypes from 'prop-types';

import AudioComponent from '../audio-component/audio-component';

class GameArtist extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false
    };
  }

  render() {
    const {question, onAnswer} = this.props;
    const {isPlaying} = this.state;
    const {answers, song} = question;

    return <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <AudioComponent
          src={song.src}
          isPlaying={isPlaying}
          onPlayButtonClick={() => this.setState({isPlaying: !isPlaying})}
        />
      </div>

      <form className="game__artist">
        {answers.map((it, i) => <div className="artist" key={i}>
          <input
            className="artist__input visually-hidden"
            type="radio"
            name="answer"
            value={`artist-${i}`}
            id={`artist-${i}`}
            onChange={() => {
              onAnswer(it);
            }}
          />
          <label className="artist__name" htmlFor={`artist-${i}`}>
            <img className="artist__picture" src={it.picture} alt={it.artist} />
            {it.artist}
          </label>
        </div>)}
      </form>
    </section>;
  }
}

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
