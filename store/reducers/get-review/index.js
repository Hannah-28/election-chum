import * as types from '../../action-types';
import { getReview as initialState } from '../initialStates';

const getReview = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_VOTES_DATA_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_VOTES_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_VOTES_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_VOTES_DATA_CLEANUP:
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

export default getReview;
