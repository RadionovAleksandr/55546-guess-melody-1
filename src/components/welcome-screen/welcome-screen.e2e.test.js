import WelcomeScreen from './welcome-screen';
import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

it('Button play click in WelcomeScreen', () => {
  const playClickHandler = jest.fn();
  const app = shallow(
    <WelcomeScreen
      mistakes ={0}
      minutes ={0}
      playClickHandler ={playClickHandler}
    />);

    const startButton = app.find('button');
    startButton.simulate('click');
    expect(playClickHandler).toHaveBeenCalledTimes(1);
});