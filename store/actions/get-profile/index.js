import AxiosCall from '../../../utils/axios'
import ErrorHandler from '../../../utils/error-handler'
import * as types from '../../action-types'

const getProfileStart = () => ({
  type: types.GET_PROFILE_START,
})

const getProfileFail = (payload) => ({
  type: types.GET_PROFILE_FAIL,
  payload,
})

const getProfileSuccess = (payload) => ({
  type: types.GET_PROFILE_SUCCESS,
  payload,
})

export const getProfileCleanup = () => ({
  type: types.GET_PROFILE_CLEANUP,
})

export const getProfile = () => async (dispatch) => {
  dispatch(getProfileStart())
  const requestObj = {
    path: '/profile',
    method: 'GET',
  }
  try {
    const data = await AxiosCall(requestObj)
    dispatch(getProfileSuccess(data))
  } catch (err) {
    const error = ErrorHandler(err)
    dispatch(getProfileFail(error))
  }
}
