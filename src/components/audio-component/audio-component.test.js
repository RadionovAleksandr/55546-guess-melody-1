import React from 'react';
import renderer from 'react-test-renderer';

import AudioComponent from './audio-component';

const mockData = {
  src: `path/audio.ogg`,
  isPlaying: false
};

describe(`Test AudioComponent`, () => {
  it(`Test AudioComponent renderer`, () => {
    const tree = renderer.create(<AudioComponent
      src={mockData.src}
      isPlaying={mockData.isPlaying}
      onPlayButtonClick={jest.fn()}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
