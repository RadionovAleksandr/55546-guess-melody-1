import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/app/app.jsx';
import questions from './mocks/questions';

const settings = {
    gameTime: 5,
    errorCount: 3,
    // currentLevel: -1,  
};


// console.log('Страница Index');
// console.log(questions);
const init = () => {
  ReactDOM.render(
      <App
        settings={settings}
        questions={questions}
      />,
      document.querySelector(`.main`)
  );
};

init();