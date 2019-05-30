import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api";
import {
  ActionType,
  Operation,
} from "./user";

describe(`Reducer user test`, () => {
  it(`sign in`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const signInFn = Operation.signIn();

    apiMock
      .onPost(`/login`)
      .reply(200, [{fake: true}]);

    return signInFn(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SIGN_IN,
          payload: [{fake: true}],
        });
      });
  });
});
