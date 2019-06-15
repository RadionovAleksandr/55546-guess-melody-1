import * as React from 'react';

interface Props {
  mistakes: number
}

const GameMistakes: React.FunctionComponent<Props> = (props) => {
  return <div className="game__mistakes">
    {new Array(props.mistakes).fill(null).map((it, idx) => <div key={idx} className="wrong" />)}
  </div>;
};

export default GameMistakes;
