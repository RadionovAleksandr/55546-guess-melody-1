import {reducer} from './reducer';

const mock = {
  step: -1,
  mistakes: 0,
};

describe(`Test reducer`, () => {
  it(`increment step`, () => {
    expect(reducer(mock, {
      type: `INCREMENT_STEP`,
      payload: 1
    })).toEqual({
      step: 0,
      mistakes: 0,
    });
  });

  it(`increment mistakes`, () => {
    expect(reducer(mock, {
      type: `INCREMENT_MISTAKES`,
      payload: 1
    })).toEqual({
      step: -1,
      mistakes: 1,
    });
  });

  it(`game reset`, () => {
    expect(reducer({
      step: 3,
      mistakes: 2,
    }, {
      type: `GAME_RESET`
    })).toEqual(mock);
  });
});

