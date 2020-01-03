import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

class GameArtist extends React.PureComponent {
    
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false
        };
    }


    render () {
        const song = question.song;
        const answers = question.answers;
        const {
            answers,
            song
        } = question;

        <section className="game game--artist">

            <section className="game__screen">
                <h2 className="game__title">Кто исполняет эту песню?</h2>
                <div className="game__track">
                    <div className="track">
                        <AudioPlayer
                            src={it.src}
                            isPlaying={isPlaying}
                            onPlayButtonClick={() => this.setState({
                                isPlaying: !isPlaying
                            })}
                        />
                    </div>
                </div>

                <form className="game__artist" onChange={onAnswer}>

                    {answers.map((answer, i) => (
                        <div className="artist" key={`answer-${i}`}>
                            <input className="artist__input visually-hidden" type="radio"
                                name="answer" value={`artist-${i}`} id={`artist-${i}`} />
                            <label className="artist__name" htmlFor={`artist-${i}`}>
                                <img className="artist__picture"
                                    src={answer.picture} alt={answer.artist} />
                                {answer.artist}
                            </label>
                        </div>
                    ))}

                </form>
            </section>
        </section>
    };
};

GameArtist.propTypes = {
    question: PropTypes.exact({
        type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
        song: PropTypes.exact({
            artist: PropTypes.string,
            src: PropTypes.string,
        }),
        answers: PropTypes.arrayOf(PropTypes.exact({
            picture: PropTypes.string,
            artist: PropTypes.string,
        })),
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default GameArtist;