import { combineReducers } from 'redux';
import register from './register';
import login from './login';
import verify from './verify';
import forgotPassword from './forgot-password';
import getReview from './get-review';
import getSingleReview from './get-single-review';
import updateSingleReview from './update-single-review';
import getVotesData from './get-votes-data';
import vote from './vote';
import getFile from './get-file';
import getProfile from './get-profile';
import getUsers from './get-users';

const baseReducers = combineReducers({
  register,
  login,
  verify,
  forgotPassword,
  getReview,
  getSingleReview,
  updateSingleReview,
  getVotesData,
  vote,
  getFile,
  getProfile,
  getUsers,
});

export default baseReducers;
