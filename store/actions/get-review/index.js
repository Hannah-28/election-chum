import * as types from '../../action-types';
import AxiosCall from '../../../utils/axios';
import ErrorHandler from '../../../utils/error-handler';

export const getReviewStart = () => ({
  type: types.GET_REVIEW_START,
});

export const getReviewSuccess = (payload) => ({
  type: types.GET_REVIEW_SUCCESS,
  payload,
});

export const getReviewFail = (payload) => ({
  type: types.GET_REVIEW_FAIL,
  payload,
});

export const getReviewCleanup = () => ({
  type: types.GET_REVIEW_CLEANUP,
});

export const getReview = () => async (dispatch) => {
  try {
    dispatch(getReviewStart());
    const requestObj = {
      path: '/review',
      method: 'GET',
    };
    const data  = await AxiosCall(requestObj);
    dispatch(getReviewSuccess(data));
  } catch (err) {
    console.log(err);
    const error = ErrorHandler(err);
    dispatch(getReviewFail(error));
  }
};
