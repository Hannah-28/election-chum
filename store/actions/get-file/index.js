import * as types from '../../action-types'
import AxiosCall from '../../../utils/axios'
import ErrorHandler from '../../../utils/error-handler'

export const getFileStart = () => ({
  type: types.GET_FILE_START,
})

export const getFileSuccess = (payload) => ({
  type: types.GET_FILE_SUCCESS,
  payload,
})

export const getFileFail = (payload) => ({
  type: types.GET_FILE_FAIL,
  payload,
})

export const getFileCleanUp = () => ({
  type: types.GET_FILE_CLEANUP,
})

export const getFile = (id) => async (dispatch) => {
  try {
    dispatch(getFileStart())
    const requestObj = {
      path: `/file/${id}`,
      method: 'GET',
    }
    const data = await AxiosCall(requestObj)
    dispatch(getFileSuccess(data))
  } catch (err) {
    console.log(err)
    const error = ErrorHandler(err)
    dispatch(getFileFail(error))
  }
}
