const SIGNUP_SUCCESS = 'authentication/SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'authentication/SIGNUP_ERROR';
const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
const LOGIN_ERROR = 'authentication/LOGIN_ERROR';

const initialState = {
  uid: null,
  email: null
};

function authenticationReducer (state = initialState, action) {
  switch (action.type) {
  case SIGNUP_SUCCESS:
    return {
      ...state,
      uid: action.payload.uid,
      email: action.payload.email,
      errorCode: null,
      errorMessage: null
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      uid: action.payload.uid,
      email: action.payload.email,
      errorCode: null,
      errorMessage: null
    };
  case SIGNUP_ERROR:
    return {
      ...state,
      uid: null,
      email: null,
      errorCode: action.payload.errorCode,
      errorMessage: action.payload.errorMessage
    };
  case LOGIN_ERROR:
    return {
      ...state,
      uid: null,
      email: null,
      errorCode: action.payload.errorCode,
      errorMessage: action.payload.errorMessage
    };
  default:
    return state;
  }
}

export const reducer = authenticationReducer;

export const constants = {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR
};