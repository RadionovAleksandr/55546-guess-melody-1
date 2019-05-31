import axios from 'axios';
import {ActionCreator} from './reducer/user/user';

const STATUS_ERROR = 403;

const baseURL = `https://es31-server.appspot.com/guess-melody`;
const timeout = 5000;

export const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL,
    timeout,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    return response;
  };
  const onFail = (err) => {
    if (err.response.status === STATUS_ERROR) {
      dispatch(ActionCreator.requireAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
