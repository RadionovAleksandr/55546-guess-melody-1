import * as React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioComponent, {snapshotURL} from './audio-component';

configure({adapter: new Adapter()});

const mockData = {
  src: snapshotURL,
  isPlaying: false,
  isLoading: false,
};

describe(`e2e test AudioComponent`, () => {
  it(`test AudioComponent change playing state`, () => {
    let playerState = false;

    const tree = shallow(<AudioComponent
      renderAudio={jest.fn()}
      src={mockData.src}
      isPlaying={mockData.isPlaying}
      isLoading={mockData.isLoading}
      onPlayButtonClick={() => {
        playerState = !playerState;
      }}
    />);
    const btnPlay = tree.find(`.track__button`);

    btnPlay.simulate(`click`);
    expect(playerState).toEqual(true);
    btnPlay.simulate(`click`);
    expect(playerState).toEqual(false);
  });
});
