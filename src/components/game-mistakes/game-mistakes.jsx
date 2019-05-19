import React from 'react';
import propTypes from 'prop-types';

const GameMistakes = (props) => {
  return <div className="game__mistakes">
    {new Array(props.mistakes).fill(null).map((it, idx) => <div key={idx} className="wrong" />)}
  </div>;
};

GameMistakes.propTypes = {
  mistakes: propTypes.number.isRequired
};

export default GameMistakes;
