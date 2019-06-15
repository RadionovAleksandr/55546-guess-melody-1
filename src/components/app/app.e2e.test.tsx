// import * as React from 'react';

// import {configure, mount} from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import {App} from './app';
// import {snapshotURL} from '../audio-component/audio-component';

// import {Type} from "../../types";

// configure({adapter: new Adapter()});

// const mock = {
//   questions: [
//     {
//       type: Type.GENRE,
//       genre: `rock`,
//       answers: [
//         {
//           src: snapshotURL,
//           genre: `rock`,
//         },
//         {
//           src: snapshotURL,
//           genre: `blues`,
//         },
//         {
//           src: snapshotURL,
//           genre: `jazz`,
//         },
//         {
//           src: snapshotURL,
//           genre: `rock`,
//         },
//       ],
//     },
//     {
//       type: Type.ARTIST,
//       song: {
//         artist: `Jim Beam`,
//         src: snapshotURL,
//       },
//       answers: [
//         {
//           picture: `path.jpg`,
//           artist: `John Snow`,
//         },
//         {
//           picture: `path.jpg`,
//           artist: `Jack Daniels`,
//         },
//         {
//           picture: `path.jpg`,
//           artist: `Jim Beam`,
//         },
//       ],
//     }
//   ],
// };

describe(`e2e test App`, () => {
  it(`Question answer switches to another question`, () => {
    // const {questions} = mock;
    // const app = mount(<App
    //   errorCount={0}
    //   gameTime={0}
    //   questions={questions}
    // />);

    // app.setState({
    //   question: 0,
    // });
    // app.update();

    // const form = app.find(`form`);
    // form.simulate(`submit`, {
    //   preventDefault() { },
    // });

    // expect(app.state(`question`)).toEqual(1);
  });

  it(`Last question answer leads to the first screen`, () => {
    // const {questions} = mock;
    // const app = mount(<App
    //   errorCount={0}
    //   gameTime={0}
    //   questions={questions}
    // />);

    // app.setState({
    //   question: questions.length - 1,
    // });
    // app.update();

    // const form = app.find(`form`);
    // form.simulate(`change`, {
    //   preventDefault() { }
    // });

    // expect(app.state(`question`)).toEqual(-1);
  });
});
