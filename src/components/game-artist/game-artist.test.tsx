import * as React from 'react';
import * as renderer from 'react-test-renderer';

import GameArtist from './game-artist';
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

describe(`Test GameArtist`, () => {
  it(`GameArtist is rendered correctly`, () => {
    const tree = renderer.create(<GameArtist
      renderPlayer={jest.fn()}
      onAnswer={jest.fn()}
      question={mock.questions[0]}
    />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
