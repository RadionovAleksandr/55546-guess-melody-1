import * as React from 'react';
import {QuestionArtist, Song, AnswerArtist} from "../../types";

interface Props {
  question: QuestionArtist,
  onAnswer: (answer: AnswerArtist) => void,
  renderPlayer: (song: Song, id: number) => AnswerArtist,
}

const GameArtist: React.FunctionComponent<Props> = (props) => {
  const {question, onAnswer, renderPlayer} = props;
  const {answers, song} = question;

  return <section className="game__screen">
    <h2 className="game__title">Кто исполняет эту песню?</h2>
    <div className="game__track">
      {renderPlayer(song, 0)}
    </div>

    <form className="game__artist">
      {answers.map((it, i) => <div className="artist" key={i}>
        <input
          className="artist__input visually-hidden"
          type="radio"
          name="answer"
          value={`artist-${i}`}
          id={`artist-${i}`}
          onClick={() => onAnswer(it)}
        />
        <label className="artist__name" htmlFor={`artist-${i}`}>
          <img className="artist__picture" src={it.picture} alt={it.artist} />
          {it.artist}
        </label>
      </div>)}
    </form>
  </section>;
}

export default GameArtist;
