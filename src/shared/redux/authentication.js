import firebase from '../../libs/firebase';

const SIGNUP_SUCCESS = 'authentication/SIGNUP_SUCCESS';
const SIGNUP_ERROR = 'authentication/SIGNUP_ERROR';
const LOGIN_SUCCESS = 'authentication/LOGIN_SUCCESS';
const LOGIN_ERROR = 'authentication/LOGIN_ERROR';
const SHOW_LOADING = 'authentication/SHOW_LOADING';
const SIGN_OUT = 'authentication/SIGN_OUT';
const HIDE_LOADING = 'authentication/HIDE_LOADING';

function signOut() {
  return (dispatch) => {
    dispatch({ type: SHOW_LOADING });
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(function() {
        dispatch({ type: SIGN_OUT });
        resolve();
      }, function() {
        reject();
      });
    });
  };

}

const initialState = {
  uid: null,
  email: null,
  loading: false
};

function authenticationReducer (state = initialState, action) {
  switch (action.type) {
  case SIGNUP_SUCCESS:
    return {
      ...state,
      uid: action.payload.uid,
      email: action.payload.email,
      errorCode: null,
      errorMessage: null,
      loading: false
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      uid: action.payload.uid,
      email: action.payload.email,
      errorCode: null,
      errorMessage: null,
      loading: false
    };
  case SIGNUP_ERROR:
    return {
      ...state,
      uid: null,
      email: null,
      errorCode: action.payload.errorCode,
      errorMessage: action.payload.errorMessage,
      loading: false
    };
  case LOGIN_ERROR:
    return {
      ...state,
      uid: null,
      email: null,
      errorCode: action.payload.errorCode,
      errorMessage: action.payload.errorMessage,
      loading: false
    };
  case SHOW_LOADING: {
    return {
      ...state,
      loading: true
    };
  }
  case SIGN_OUT: {
    return {
      ...state,
      uid: null,
      email: null,
      errorCode: null,
      errorMessage:null,
      loading: false
    };
  }
  case HIDE_LOADING: {
    return {
      ...state,
      loading: false
    };
  }
  default:
    return state;
  }
}

export const reducer = authenticationReducer;

export const constants = {
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SHOW_LOADING,
  HIDE_LOADING
};

export const actions = {
  signOut
};