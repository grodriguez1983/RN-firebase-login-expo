import firebase from '../../../libs/firebase';

import { 
	constants 
} from '../../../shared/redux/authentication';

function signInWithEmailAndPassword ({ email, password }) {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
		.then((success) => {
  alert('Log in success');
  dispatch({ type: constants.LOGIN_SUCCESS, payload: { uid: success.uid, email } });
})
    .catch((error) => { 
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      dispatch({ type: constants.LOGIN_ERROR, payload: { errorMessage, errorCode } });
    });
  };
}

export const actions = {
  signInWithEmailAndPassword
};