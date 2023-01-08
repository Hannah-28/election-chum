import * as types from '../../action-types'
import AxiosCall from '../../../utils/axios'
import ErrorHandler from '../../../utils/error-handler'

export const updateSingleReviewStart = () => ({
  type: types.UPDATE_SINGLE_REVIEW_START,
})

export const updateSingleReviewSuccess = (payload) => ({
  type: types.UPDATE_SINGLE_REVIEW_SUCCESS,
  payload,
})

export const updateSingleReviewFail = (payload) => ({
  type: types.UPDATE_SINGLE_REVIEW_FAIL,
  payload,
})

export const updateSingleReviewCleanup = () => ({
  type: types.UPDATE_SINGLE_REVIEW_CLEANUP,
})

export const updateSingleReview = (id) => async (dispatch) => {
  try {
    dispatch(markNotificationAsReadStart())
    const requestObj = {
      path: `/review/${id}`,
      method: 'PATCH',
    }
    const { data } = await AxiosCall(requestObj)
    dispatch(updateSingleReviewSuccess(data))
  } catch (err) {
    const error = ErrorHandler(err)
    dispatch(updateSingleReviewFail(error))
  }
}
