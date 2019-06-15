import * as React from 'react';
import * as renderer from 'react-test-renderer';

import AudioComponent, {snapshotURL} from './audio-component';

const mockData = {
  src: snapshotURL,
  isPlaying: false,
  isLoading: false,
};

describe(`Test AudioComponent`, () => {
  it(`Test AudioComponent renderer`, () => {
    const tree = renderer.create(<AudioComponent
      renderAudio={jest.fn()}
      src={mockData.src}
      isPlaying={mockData.isPlaying}
      isLoading={mockData.isLoading}
      onPlayButtonClick={jest.fn()}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
