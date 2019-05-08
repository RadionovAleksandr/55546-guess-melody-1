import React from 'react';

import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from './welcome-screen';

Enzyme.configure({adapter: new Adapter()});

describe(`e2e test WelcomeScreen`, () => {
  it(`Test button play click`, () => {
    const startGameFn = jest.fn();
    const tree = shallow(<WelcomeScreen
      time={0}
      errorCount={0}
      onButtonStartClick={startGameFn}
    />);
    const btnStart = tree.find(`.welcome__button`);
    expect(startGameFn).toHaveBeenCalledTimes(0);
    btnStart.simulate(`click`);
    expect(startGameFn).toHaveBeenCalledTimes(1);
  });
});
