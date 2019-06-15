import * as React from 'react';
import * as renderer from 'react-test-renderer';

import GameGenre from './game-genre';
import {snapshotURL} from '../audio-component/audio-component';

import {Type} from "../../types";

const mock = {
  question: {
    type: Type.GENRE,
    genre: `rock`,
    answers: [
      {
        src: snapshotURL,
        genre: `rock`,
      },
      {
        src: snapshotURL,
        genre: `jazz`,
      },
      {
        src: snapshotURL,
        genre: `jazz`,
      },
      {
        src: snapshotURL,
        genre: `blues`,
      },
    ],
  },
  userAnswer: [false, false, false, false]
};

describe(`Test GameGenre`, () => {
  it(`GameGenre is rendered correctly`, () => {
    const {question, userAnswer} = mock;
    const tree = renderer.create(<GameGenre
      userAnswer={userAnswer}
      renderAnswer={jest.fn()}
      onAnswer={jest.fn()}
      onChange={jest.fn()}
      question={question}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
