import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player/audio-player.jsx';

console.log(`Screen GameGenre`)

class GameGenre extends React.PureComponent {

    constructor(props) {
        super(props);

        this.state = {
            activePlayer: -1
        }
    };



    render() {
        console.log(`props GameGenre`);
        console.log(this.props);

        // console.log(`answers`);
        // console.log(answers);
        const genre = this.props.question.genre;
        const answers = this.props.question.answers;

        return <section className="game__screen">

            <h2 className="game__title">Выберите {genre} треки</h2>
            <form className="game__tracks" onSubmit={(evt) => {
                evt.preventDefault();
                props.onAnswer();
            }}>

                {answers.map((it, i) => <div key={`answer-${i}`} className="track">
                    <AudioPlayer
                        src={it.src}
                        isPlaying = {i === this.state.activePlayer}
                        onPlayButtonClick={() => this.setState({
                            activePlayer: this.state.activePlayer === i ? -1 : i
                        })}
                    />

                    <div className="game__answer">
                        <input className="game__input visually-hidden" type="checkbox"
                            name="answer" value={`answer-${i}`} id={`answer-${i}`} />
                        <label className="game__check"
                            htmlFor={`answer-${i}`}>Отметить</label>
                    </div>
                </div>
                )}

                <button className="game__submit button" type="submit">Ответить</button>
            </form>
        </section>

    };
};

GameGenre.propTypes = {
    question: PropTypes.exact({
        type: PropTypes.oneOf([`genre`, `artist`]),
        genre: PropTypes.string,
        answers: PropTypes.arrayOf(
            PropTypes.exact({
                src: PropTypes.string,
                genre: PropTypes.string,
            })
        ),
    }).isRequired,
    onAnswer: PropTypes.func.isRequired,
};

export default GameGenre;
