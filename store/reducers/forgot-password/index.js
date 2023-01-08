import * as types from '../../action-types';
import { forgotPassword as initialState } from '../initialStates';

const forgotPassword = (state = initialState, action) => {
  switch (action.type) {
    case types.FORGOT_PASSWORD_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      };
    case types.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.FORGOT_PASSWORD_CLEANUP:
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

export default forgotPassword;
