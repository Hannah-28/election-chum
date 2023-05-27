import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';
import Cookies from 'js-cookie'

export const verifyStart = () => ({
  type: types.VERIFY_START,
});

export const verifySuccess = (payload) => ({
  type: types.VERIFY_SUCCESS,
  payload,
});

export const verifyFail = (payload) => ({
  type: types.VERIFY_FAIL,
  payload,
});

export const verifyCleanup = () => ({
  type: types.VERIFY_CLEANUP,
});

export const verify = (payload) => async (dispatch) => {
  try {
    dispatch(verifyStart());
    const votersID = await Cookies.get('ID')
    // console.log(votersID, 'votersID');
    const requestObj = {
      path: `/verify?votersID=${votersID}`,
      method: 'POST',
      data: payload,
    };
    // console.log(Cookies.get('tok'), 'hiii')
    const data = await AxiosCall(requestObj);
    dispatch(verifySuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(verifyFail(error));
  }
};
