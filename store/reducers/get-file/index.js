import * as types from '../../action-types';
import { getFile as initialState } from '../initialStates';

const getFile = (state = initialState, action) => {
  const { payload, type } = action;

  switch (type) {
    case types.GET_FILE_START:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_FILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      };
    case types.GET_FILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    case types.GET_FILE_CLEANUP:
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

export default getFile;
