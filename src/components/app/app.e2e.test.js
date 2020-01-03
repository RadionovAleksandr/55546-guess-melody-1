import App from './app';
import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
const mock = {
    questions: [{
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
    }]
};

it('on click om welocomeScreen App switches to the first question', () => {
            const { questions } = mock;
            const app = mount( < App mistakes = { 0 }
                minutes = { 0 }
                questions = { questions }
                //   playClickHandler ={playClickHandler}
                />);

                const button = app.find('button'); button.simulate('click'); app.update(); // ПОЛНОСТЬЮ ПЕРЕСТРАИВАЕТ КОМПОНЕНТ ПОСЛЕ ТОГО КАК ЧТО-ТО ПРОИЗОШЛО

                expect(app.state(`question`)).toEqual(0);
                // const currentQuestion = app.state(``);

                const title = app.find(`.game__title`)
                expect(title).toHaveLength(1); expect(title.text().indexOf(`rock`)).toBeGreaterThanOrEqual(0);
            });