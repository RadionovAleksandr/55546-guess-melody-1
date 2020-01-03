import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

const mock = {
  questions: [
      {
          type: 'genre',
          genre: 'rock',
          answers: [{
              src: '',
              genre: 'rock',
          },
          {
              src: '',
              genre: 'rap',
          },
          {
              src: '',
              genre: 'indi',
          },
          {
              src: '',
              genre: 'jazz',
          },
          ],
      }
  ]
};


it('renderes correctly App', () => {
  const {questions} = mock;
  const tree = renderer.create(
    <App
      Screen gameTime={0}
      errorCount={0}
      questions = {questions}
    />).toJSON();
  expect(tree).toMatchSnapshot
});