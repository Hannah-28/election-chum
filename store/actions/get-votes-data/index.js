import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getVotesDataStart = () => ({
  type: types.GET_VOTES_DATA_START,
});

export const getVotesDataSuccess = (payload) => ({
  type: types.GET_VOTES_DATA_SUCCESS,
  payload,
});

export const getVotesDataFail = (payload) => ({
  type: types.GET_VOTES_DATA_FAIL,
  payload,
});

export const getVotesDataCleanup = () => ({
  type: types.GET_VOTES_DATA_CLEANUP,
});

export const getVotesData = () => async (dispatch) => {
  try {
    dispatch(getVotesDataStart());
    const requestObj = {
      path: '/',
      method: 'GET',
    };
    const data = await AxiosCall(requestObj);
    dispatch(getVotesDataSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(getVotesDataFail(error));
  }
};
