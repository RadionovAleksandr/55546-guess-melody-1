import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome-screen/welcome-screen.jsx';
import GameArtist from '../game-artist/game-artist.jsx';
import GameGenre from '../game-genre/game-genre.jsx';

class App extends PureComponent {
    constructor(props) {
        super(props);


        this.state = {
            question: -1,
        };
    };

    _getScreen(question, onUserAnswer) {
        console.log(`question`);
        console.log(question);

        const {
            gameTime,
            errorCount
        } = this.props.settings;


        if (!question) {
            return <Welcome
                gameTime={gameTime}
                errorCount={errorCount}
                onStartButtonClick={onUserAnswer}
            />;

        }
        //  const currentQuestion = questions[question];

        switch (question.type) {
            case `genre`: return <GameGenre
                gameTime={gameTime}
                question={question}
                onAnswer={onUserAnswer}
            />;

            case `artist`:
                return <GameArtist
                    gameTime={gameTime}
                    question={question}
                    onAnswer={onUserAnswer}
                />;
        }

        return null;
    }

    render() {
        // console.log('Страница App');
        // console.log(`this.props.settings`)
        // console.log(this.props.settings.gameTime)

        
        const {
            gameTime,
            errorCount,
        } = this.props.settings;

        // const gameTime = this.props.settings.gameTime;
        // const errorCount = this.props.settings.errorCount;

        const {question} = this.state //.props.settings.questions //.questions[this.state.currentLevel];
        const questions = this.props.questions
        // console.log(`this.props`)
        // console.log(this.props)

        // console.log(`this.props.questions`)
        // console.log(this.props.questions)

        // console.log(`this.state`);
        // console.log(this.state);

        return <section className="game game--genre">
            <header className="game__header">
                <a className="game__back" href="#">
                    <span className="visually-hidden">Сыграть ещё раз</span>
                    <img className="game__logo" src="img/melody-logo-ginger.png"
                        alt="Угадай мелодию" />
                </a>

                <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
                    <span className="timer__mins">0{gameTime}</span>
                    <span className="timer__dots">:</span>
                    <span className="timer__secs">00</span>
                </div>

                <div className="game__mistakes">
                    <div className="wrong" />
                    <div className="wrong" />
                    <div className="wrong" />
                </div>
            </header>

            {this._getScreen(questions[question], () => {
                this.setState({
                    question: question + 1 >= questions.length
                        ? 0
                        : question + 1
                });
            })}

        </section>

        // return App.getScreen(this.state, () => {
        // this.setState((prevState) => {
        //     console.log(`prevState`);
        //     console.log(prevState)
        //     const nextIndex = prevState.currentLevel + 1;
        //     const isEnd = nextIndex >= this.state.questions.length;

        //     return {
        //         ...prevState,
        //         currentLevel: !isEnd ? nextIndex : -1,
        //     };
        // });
        // });
    }
}

App.propTypes = {
    //   settings: PropTypes.exact({
    //     gameTime: PropTypes.number.isRequired,
    //     errorCount: PropTypes.number.isRequired,
    //     currentLevel: PropTypes.number.isRequired,
    //   }).isRequired,
    //   questions: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;


//        // return <section className="game game--artist">
//         //     <header className="game__header">
//         //         <a className="game__back" href="#" onClick={this._handleClick}>
//         //             <span className="visually-hidden">Сыграть ещё раз</span>
//         //             <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию" />
//         //         </a>

//         //         <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
//         //             <circle className="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center" />
//         //         </svg>

//         //         <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
//         //             <span className="timer__mins">05</span>
//         //             <span className="timer__dots">:</span>
//         //             <span className="timer__secs">00</span>
//         //         </div>

//         //         <div className="game__mistakes">
//         //             <div className="wrong"></div>
//         //             <div className="wrong"></div>
//         //             <div className="wrong"></div>
//         //         </div>
//         //     </header>

//         //     {this._getScreen(questions[question], () => {
//         //         this.setState({
//         //             question: question + 1 >= question.length
//         //                 ? 0
//         //                 : question + 1,
//         //         });
//         //     })}
//         // </section >