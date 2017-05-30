import firebase from '../../../libs/firebase';

import { 
	constants
} from '../../../shared/redux/authentication';

function createUserWithEmailAndPassword ({ email, password }) {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
		.then((success) => {
  alert('User created');
  dispatch({ type: constants.SIGNUP_SUCCESS, payload: { uid: success.uid, email } });
})
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
      dispatch({ type: constants.SIGNUP_ERROR, payload: { errorMessage, errorCode } });
    });
  };
}

export const actions = {
  createUserWithEmailAndPassword
};
