import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const forgotPasswordStart = () => ({
  type: types.FORGOT_PASSWORD_START,
});

export const forgotPasswordSuccess = (payload) => ({
  type: types.FORGOT_PASSWORD_SUCCESS,
  payload,
});

export const forgotPasswordFail = (payload) => ({
  type: types.FORGOT_PASSWORD_FAIL,
  payload,
});

export const forgotPasswordCleanup = () => ({
  type: types.FORGOT_PASSWORD_CLEANUP,
});

export const forgotPassword = (payload) => async (dispatch) => {
  try {
    dispatch(forgotPasswordStart());
    const requestObj = {
      path: '/forgotpassword',
      method: 'POST',
      data: payload,
    };
    const { data } = await AxiosCall(requestObj);
    dispatch(forgotPasswordSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(forgotPasswordFail(error));
  }
};
