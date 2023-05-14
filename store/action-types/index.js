// submit a request for account creation for the user
export const REGISTER_START = 'REGISTER_START';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';
export const REGISTER_CLEANUP = 'REGISTER_CLEANUP';

// allows a user to login once his/her account has been approved
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_CLEANUP = 'LOGIN_CLEANUP';

// verify user
export const VERIFY_START = 'VERIFY_START';
export const VERIFY_SUCCESS = 'VERIFY_SUCCESS';
export const VERIFY_FAIL = 'VERIFY_FAIL';
export const VERIFY_CLEANUP = 'VERIFY_CLEANUP';

// resets a user password
export const FORGOT_PASSWORD_START = 'FORGOT_PASSWORD_START';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';
export const FORGOT_PASSWORD_CLEANUP = 'FORGOT_PASSWORD_CLEANUP';

// gets the list and total number of all pending users waiting for their account to be approved
export const GET_REVIEW_START = 'GET_REVIEW_START';
export const GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS';
export const GET_REVIEW_FAIL = 'GET_REVIEW_FAIL';
export const GET_REVIEW_CLEANUP = 'GET_REVIEW_CLEANUP';

// gets the full details of a single user to be reviewed for approval
export const GET_SINGLE_REVIEW_START = 'GET_SINGLE_REVIEW_START';
export const GET_SINGLE_REVIEW_SUCCESS = 'GET_SINGLE_REVIEW_SUCCESS';
export const GET_SINGLE_REVIEW_FAIL = 'GET_SINGLE_REVIEW_FAIL';
export const GET_SINGLE_REVIEW_CLEANUP = 'GET_SINGLE_REVIEW_CLEANUP';

// update the status of the user and assigns a voterID to be used for login
export const UPDATE_SINGLE_REVIEW_START = 'UPDATE_SINGLE_REVIEW_START';
export const UPDATE_SINGLE_REVIEW_SUCCESS = 'UPDATE_SINGLE_REVIEW_SUCCESS';
export const UPDATE_SINGLE_REVIEW_FAIL = 'UPDATE_SINGLE_REVIEW_FAIL';
export const UPDATE_SINGLE_REVIEW_CLEANUP = 'UPDATE_SINGLE_REVIEW_CLEANUP';

// gets all the votes data only if he has voted
export const GET_VOTES_DATA_START = 'GET_VOTES_DATA_START';
export const GET_VOTES_DATA_SUCCESS = 'GET_VOTES_DATA_SUCCESS';
export const GET_VOTES_DATA_FAIL = 'GET_VOTES_DATA_FAIL';
export const GET_VOTES_DATA_CLEANUP = 'GET_VOTES_DATA_CLEANUP';

// allows user to cast their vote
export const VOTE_START = 'VOTE_START';
export const VOTE_SUCCESS = 'VOTE_SUCCESS';
export const VOTE_FAIL = 'VOTE_FAIL';
export const VOTE_CLEANUP = 'VOTE_CLEANUP';
