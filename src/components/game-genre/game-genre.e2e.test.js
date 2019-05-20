import React from 'react';

import {configure, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import GameGenre from "./game-genre";
import {snapshotURL} from '../audio-component/audio-component';

configure({adapter: new Adapter()});

const mock = {
  question: {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: snapshotURL,
        genre: `rock`,
      },
    ],
  },
};
describe(`e2e test GameGenre`, () => {
  it(`When user answers genre question form is not sent`, () => {
    const {question} = mock;
    const onAnswer = jest.fn();
    const genreQuestion = mount(<GameGenre
      onAnswer={onAnswer}
      question={question}
    />);

    const form = genreQuestion.find(`form`);
    const formSendPrevention = jest.fn();
    form.simulate(`submit`, {
      preventDefault: formSendPrevention,
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(formSendPrevention).toHaveBeenCalledTimes(1);
  });
});
