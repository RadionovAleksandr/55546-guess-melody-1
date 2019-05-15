import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import AudioComponent from './audio-component';

configure({adapter: new Adapter()});

const mockData = {
  src: `path/audio.ogg`,
  isPlaying: false
};

describe(`e2e test AudioComponent`, () => {
  it(`test AudioComponent change playing state`, () => {
    const tree = shallow(<AudioComponent
      src={mockData.src}
      isPlaying={mockData.isPlaying}
      onPlayButtonClick={jest.fn()}
    />);
    const btnPlay = tree.find(`.track__button`);

    btnPlay.simulate(`click`);
    expect(tree.state().isPlaying).toEqual(true);
    btnPlay.simulate(`click`);
    expect(tree.state().isPlaying).toEqual(false);
  });
});
