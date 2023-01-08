import * as types from '../../action-types';
import { updateSingleReview as initialState } from '../initialStates';

const updateSingleReview = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.UPDATE_SINGLE_REVIEW_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.UPDATE_SINGLE_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.UPDATE_SINGLE_REVIEW_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.UPDATE_SINGLE_REVIEW_CLEANUP:
      return {
        ...state,
        error: null,
        isLoading: false,
        isSuccessful: false,
      };
    default:
      return state;
  }
};

export default updateSingleReview;
