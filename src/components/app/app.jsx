import React from 'react';
import propTypes from 'prop-types';

import WelcomeScreen from '../welcome-screen/welcome-screen.jsx';

const App = (props) => {
  const {gameTime, errorCount} = props;

  App.propTypes = {
    gameTime: propTypes.number.isRequired,
    errorCount: propTypes.number.isRequired
  };

  return <WelcomeScreen
    time={gameTime}
    errorCount={errorCount}
  />;
};

export default App;
