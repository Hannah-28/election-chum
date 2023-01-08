import * as types from '../../action-types';
import { getVotesData as initialState } from '../initialStates';

const getVotesData = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_REVIEW_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_REVIEW_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_REVIEW_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_REVIEW_CLEANUP:
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

export default getVotesData;
