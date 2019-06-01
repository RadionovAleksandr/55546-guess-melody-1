const initialState = {
  isAuthorizationRequired: false,
  user: {}
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  SIGN_IN: `SIGN_IN`,
  CHECK_AUTHORIZATION: `CHECK_AUTHORIZATION`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  signIn: (status) => {
    return {
      type: ActionType.SIGN_IN,
      payload: status
    };
  },
  checkAuthorization: (status) => {
    return {
      type: ActionType.CHECK_AUTHORIZATION,
      payload: status
    };
  },
};

const Operation = {
  signIn: (data) => (dispatch, _getState, api) => {
    return api.post(`/login`, data)
    .then((response) => {
      if (response.data) {
        dispatch(ActionCreator.signIn(response.data));
        dispatch(ActionCreator.requireAuthorization(false));
      }
    })
    .catch(() => {});
  },
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        if (response.data) {
          dispatch(ActionCreator.signIn(response.data));
          dispatch(ActionCreator.requireAuthorization(false));
        }
      })
      .catch(() => {});
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorizationRequired: action.payload,
      });

    case ActionType.SIGN_IN:
      return Object.assign({}, state, {
        user: action.payload,
      });
  }

  return state;
};

export {
  Operation,
  ActionCreator,
  ActionType,
  reducer,
};
