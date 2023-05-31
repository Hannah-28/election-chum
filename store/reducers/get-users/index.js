import * as types from '../../action-types';
import { getUsers as initialState } from '../initialStates';

const getUsers = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_USERS_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_USERS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_USERS_CLEANUP:
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

export default getUsers;
