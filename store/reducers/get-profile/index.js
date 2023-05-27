import * as types from '../../action-types'
import { getProfile as initialState } from '../initialStates'

const getProfile = (state = initialState, action) => {
  const { payload, type } = action

  switch (type) {
    case types.GET_PROFILE_START:
      return {
        ...state,
        isLoading: true,
      }
    case types.GET_PROFILE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isSuccessful: true,
        data: payload,
      }
    case types.GET_PROFILE_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload,
      }
    case types.GET_PROFILE_CLEANUP:
      return {
        ...state,
        error: null,
        isLoading: false,
        isSuccessful: false,
        data: null,
      }
    default:
      return state
  }
}

export default getProfile
