import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const voteStart = () => ({
  type: types.VOTE_START,
});

export const voteSuccess = (payload) => ({
  type: types.VOTE_SUCCESS,
  payload,
});

export const voteFail = (payload) => ({
  type: types.VOTE_FAIL,
  payload,
});

export const voteCleanup = () => ({
  type: types.VOTE_CLEANUP,
});

export const vote = (payload) => async (dispatch) => {
  try {
    dispatch(voteStart());
    const requestObj = {
      path: '/vote',
      method: 'POST',
      data: payload,
    };
    const { data } = await AxiosCall(requestObj);
    dispatch(voteSuccess(data));
  } catch (err) {
    const error = ErrorHandler(err);
    dispatch(voteFail(error));
  }
};
