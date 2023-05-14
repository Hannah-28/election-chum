import * as types from '../../action-types'
import { verify as initialState } from '../initialStates'

const verify = (state = initialState, action) => {
  switch (action.type) {
    case types.VERIFY_START:
      return {
        ...state,
        isLoading: true,
      }
    case types.VERIFY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: action.payload,
      }
    case types.VERIFY_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case types.VERIFY_CLEANUP:
      return {
        ...state,
        isLoading: false,
        isSuccessful: false,
        error: null,
        data: null,
      }
    default:
      return state
  }
}

export default verify
