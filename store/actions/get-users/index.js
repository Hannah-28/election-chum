import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getUsersStart = () => ({
  type: types.GET_USERS_START,
});

export const getUsersSuccess = (payload) => ({
  type: types.GET_USERS_SUCCESS,
  payload,
});

export const getUsersFail = (payload) => ({
  type: types.GET_USERS_FAIL,
  payload,
});

export const getUsersCleanup = () => ({
  type: types.GET_USERS_CLEANUP,
});

export const getUsers = () => async (dispatch) => {
  try {
    dispatch(getUsersStart());
    const requestObj = {
      path: '/getUsers',
      method: 'GET',
    };
    const data  = await AxiosCall(requestObj);
    dispatch(getUsersSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(getUsersFail(error));
  }
};
