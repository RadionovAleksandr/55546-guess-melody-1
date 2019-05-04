import React from 'react';
import propTypes from 'prop-types';

const WelcomeScreen = (props) => {
  const {time, errorCount} = props;

  WelcomeScreen.propTypes = {
    time: propTypes.number.isRequired,
    errorCount: propTypes.number.isRequired
  };

  return <section className="welcome">
    <div className="welcome__logo">
      <img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83" />
    </div>
    <button className="welcome__button"><span className="visually-hidden">Начать игру</span></button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {time} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {errorCount} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>;
};

export default WelcomeScreen;
