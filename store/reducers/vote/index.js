import * as types from '../../action-types';
import { vote as initialState } from '../initialStates';

const vote = (state = initialState, action) => {
  switch (action.type) {
    case types.VOTE_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.VOTE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.VOTE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.VOTE_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null,
      };
    default:
      return state;
  }
};

export default vote;
