import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import forgotPassword from './forgot-password';
import getReview from './get-review';
import getSingleReview from './get-single-review';
import updateSingleReview from './update-single-review';
import getVotesData from './get-votes-data';
import vote from './vote';

const baseReducers = combineReducers({
  register,
  login,
  forgotPassword,
  getReview,
  getSingleReview,
  updateSingleReview,
  getVotesData,
  vote,
});

export default baseReducers;
