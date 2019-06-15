import * as React from 'react';
import {QuestionGenre, AnswerGenre} from "../../types";

interface Props {
  onAnswer: () => void,
  onChange: (i: number) => void,
  renderAnswer: (answer: AnswerGenre, id: number) => void,
  question: QuestionGenre,
  userAnswer: boolean[],
}

const GameGenre: React.FunctionComponent<Props> = (props) => {
  const {question, onAnswer, onChange, renderAnswer, userAnswer} = props;
  const {answers, genre} = question;

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
            onChange={() => onChange(i)} />
          <label className="game__check" htmlFor={`answer-${i}`}>Отметить</label>
        </div>
      </div>)}

      <button className="game__submit button" type="submit">Ответить</button>
    </form>
  </section>;
}

export default GameGenre;
