import * as React from 'react';

import * as renderer from 'react-test-renderer';
import {App} from './app';
import {snapshotURL} from '../audio-component/audio-component';

import {Type} from "../../types";

const mock = {
  questions: [
    {
      type: Type.GENRE,
      genre: `rock`,
      answers: [
        {
          src: snapshotURL,
          genre: `rock`,
        },
        {
          src: snapshotURL,
          genre: `blues`,
        },
        {
          src: snapshotURL,
          genre: `jazz`,
        },
        {
          src: snapshotURL,
          genre: `rock`,
        },
      ],
    },
    {
      type: Type.ARTIST,
      song: {
        artist: `Jim Beam`,
        src: snapshotURL,
      },
      answers: [
        {
          picture: `path.jpg`,
          artist: `John Snow`,
        },
        {
          picture: `path.jpg`,
          artist: `Jack Daniels`,
        },
        {
          picture: `path.jpg`,
          artist: `Jim Beam`,
        },
      ],
    }
  ],
};

const mockApp = {
  gameTime: 5
};

const mockStore = {
  step: -1,
  mistakes: 0
};

describe(`Test App`, () => {
  it(`Test App renderer`, () => {
    const tree = renderer
      .create(<App
        gameTime={mockApp.gameTime}
        questions={mock.questions}

        step={mockStore.step}
        mistakes={mockStore.mistakes}

        renderScreen={jest.fn()}
        renderMistakes={jest.fn()}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
