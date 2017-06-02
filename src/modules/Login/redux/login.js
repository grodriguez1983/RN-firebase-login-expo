import firebase from '../../../libs/firebase';

import {
	constants
} from '../../../shared/redux/authentication';

function signInWithEmailAndPassword ({ email, password }) {
  return (dispatch) => {
    dispatch({ type: constants.SHOW_LOADING });
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((success) => {
        dispatch({ type: constants.LOGIN_SUCCESS, payload: { uid: success.uid, email } });
        resolve();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        dispatch({ type: constants.LOGIN_ERROR, payload: { errorMessage, errorCode } });
        reject();
      });
    });
  };
}

function rememberSession () {
  return (dispatch) => {
    dispatch({ type: constants.SHOW_LOADING });
    return new Promise((resolve) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          dispatch({ type: constants.LOGIN_SUCCESS, payload: { uid: user.uid, email: user.email } });
          resolve(user);
        } else {
          dispatch({ type: constants.HIDE_LOADING });
        }
      });
    });
  };
}

export const actions = {
  signInWithEmailAndPassword,
  rememberSession
};