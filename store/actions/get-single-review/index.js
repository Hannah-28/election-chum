import * as types from '../../action-types'
import AxiosCall from '../../../utils/axios'
import ErrorHandler from '../../../utils/error-handler'

export const getSingleReviewStart = () => ({
  type: types.GET_SINGLE_REVIEW_START,
})

export const getSingleReviewSuccess = (payload) => ({
  type: types.GET_SINGLE_REVIEW_SUCCESS,
  payload,
})

export const getSingleReviewFail = (payload) => ({
  type: types.GET_SINGLE_REVIEW_FAIL,
  payload,
})

export const getSingleReviewCleanup = () => ({
  type: types.GET_SINGLE_REVIEW_CLEANUP,
})

export const getSingleReview = (id) => async (dispatch) => {
  try {
    dispatch(getSingleReviewStart())
    const requestObj = {
      path: `/review/${id}`,
      method: 'GET',
    }
    const { data } = await AxiosCall(requestObj)
    dispatch(getSingleReviewSuccess(data))
  } catch (err) {
    console.log(err)
    const error = ErrorHandler(err)
    dispatch(getSingleReviewFail(error))
  }
}
